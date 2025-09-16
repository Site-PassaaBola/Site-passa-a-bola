// src/pages/TimePerfil.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

/* ===== carrega imagens da pasta assets (maiúsc/minúsc) ===== */
const assetsLower = import.meta.glob("../assets/**/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
  import: "default",
});
const assetsUpper = import.meta.glob("../assets/**/*.{PNG,JPG,JPEG,SVG,WEBP}", {
  eager: true,
  import: "default",
});
const allAssets = { ...assetsLower, ...assetsUpper };

const norm = (s = "") =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-");

const getAssetExact = (keys) => {
  const arr = Array.isArray(keys) ? keys : [keys];
  for (const k of arr) {
    if (!k) continue;
    const want = norm(k);
    for (const [p, src] of Object.entries(allAssets)) {
      const base = p.split("/").pop().split(".")[0];
      if (norm(base) === want) return src;
    }
  }
  return null;
};

const getTeamPhoto = (clubName, keys = []) => {
  const exata = getAssetExact(keys);
  if (exata) return exata;

  const club = norm(clubName);
  let fallback = null;
  for (const [p, src] of Object.entries(allAssets)) {
    const b = norm(p.split("/").pop().split(".")[0]);
    const hasClub = b.includes(club);
    const isCrest = b.includes("escudo") || b.includes("logo") || b.includes("badge");
    if (hasClub && !isCrest) {
      const hasHint = b.includes("time") || b.includes("tima") || b.includes("team") || b.includes("hero");
      if (hasHint) return src;
      fallback = fallback || src;
    }
  }
  return fallback;
};

const getCrest = (clubName, keys = []) => {
  const exata = getAssetExact(keys);
  if (exata) return exata;

  const club = norm(clubName);
  for (const [p, src] of Object.entries(allAssets)) {
    const b = norm(p.split("/").pop().split(".")[0]);
    const hasClub = b.includes(club);
    const isCrest = b.includes("escudo") || b.includes("logo") || b.includes("badge");
    if (hasClub && isCrest) return src;
  }
  return getAssetExact([clubName]);
};

/* ===== dados mock (ajusta quando quiser) ===== */
const TEAMS = {
  flamengo: {
    nome: "Flamengo",
    posicao: 5,
    pontos: 24,
    saldo: 15,
    heroKeys: ["TimeFlamengo", "FlamengoHero", "Flamengo"],
    crestKeys: ["EscudoFlamengo", "Flamengo-logo", "Flamengo-escudo", "Flamengo"],
    historia:
      "Projeto tradicional do futebol feminino no Rio, com base competitiva e categorias em formação.",
    proximos: [
      { jogo: "Flamengo x São Paulo", comp: "Brasileirão Feminino A1", quando: "Próxima Quinta", hora: "20:00" },
      { jogo: "Grêmio x Flamengo", comp: "Brasileirão Feminino A1", quando: "Domingo", hora: "16:00" },
    ],
    elenco: { goleiras: 3, defensoras: 8, "meio-campo": 7, atacantes: 5 },
  },
  corinthians: {
    nome: "Corinthians",
    posicao: 2,
    pontos: 27,
    saldo: 10,
    heroKeys: ["TimeCorinthians", "CorinthiansHero"],
    crestKeys: ["EscudoCorinthians", "Corinthians-logo", "Corinthians-escudo"],
    historia: "Potência recente no futebol feminino, com títulos nacionais e base forte.",
    proximos: [
      { jogo: "Corinthians x Ferroviária", comp: "Brasileirão Feminino A1", quando: "Sábado", hora: "18:00" },
    ],
    elenco: { goleiras: 3, defensoras: 8, "meio-campo": 7, atacantes: 6 },
  },
  "sao-paulo": {
    nome: "São Paulo",
    posicao: 3,
    pontos: 25,
    saldo: 10,
    heroKeys: ["TimeSaoPaulo", "SPFCHero", "SaoPaulo"],
    crestKeys: ["EscudoSaoPaulo", "SPFC-escudo"],
    historia: "Tricolor com tradição e investimentos estáveis no futebol feminino.",
    proximos: [
      { jogo: "São Paulo x Santos", comp: "Brasileirão Feminino A1", quando: "Domingo", hora: "11:00" },
    ],
    elenco: { goleiras: 3, defensoras: 8, "meio-campo": 7, atacantes: 6 },
  },
  ferroviaria: {
    nome: "Ferroviária",
    posicao: 4,
    pontos: 24,
    saldo: 17,
    heroKeys: ["TimeFerroviaria"],
    crestKeys: ["EscudoFerroviaria"],
    historia: "Uma das referências históricas do futebol feminino no Brasil.",
    proximos: [
      { jogo: "Ferroviária x Palmeiras", comp: "Brasileirão Feminino A1", quando: "Sábado", hora: "16:00" },
    ],
    elenco: { goleiras: 3, defensoras: 7, "meio-campo": 7, atacantes: 5 },
  },
  palmeiras: {
    nome: "Palmeiras",
    posicao: 6,
    pontos: 20,
    saldo: 10,
    heroKeys: ["TimePalmeira", "TimePalmeiras", "PalmeirasFeminino"],
    crestKeys: ["EscudoPalmeiras", "Palmeiras-logo"],
    historia: "Projeto em crescimento, com estrutura e captação de talentos.",
    proximos: [
      { jogo: "Palmeiras x Cruzeiro", comp: "Brasileirão Feminino A1", quando: "Sábado", hora: "19:00" },
    ],
    elenco: { goleiras: 3, defensoras: 8, "meio-campo": 7, atacantes: 6 },
  },
  cruzeiro: {
    nome: "Cruzeiro",
    posicao: 1,
    pontos: 35,
    saldo: 10,
    heroKeys: ["TimeCruzeiro", "CruzeiroTime"],
    crestKeys: ["EscudoCruzeiro", "Cruzeiro-logo"],
    historia: "Campanha consistente e defesa sólida, liderando a competição.",
    proximos: [
      { jogo: "Cruzeiro x Botafogo", comp: "Brasileirão Feminino A1", quando: "Domingo", hora: "16:00" },
    ],
    elenco: { goleiras: 3, defensoras: 8, "meio-campo": 7, atacantes: 6 },
  },
};

/* ===== componente KPI com números centrados ===== */
function KPI({ label, value }) {
  return (
    <div className="kpi-card">
      <div className="kpi-label">{label}</div>
      <div className="kpi-value">{value}</div>
    </div>
  );
}

export default function TimePerfil() {
  const { slug } = useParams();
  const data = TEAMS[slug];

  if (!data) {
    return (
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-2xl font-bold">Time não encontrado</h1>
        <Link to="/times" className="text-[#7B3AF5] underline mt-2 inline-block">
          Voltar aos times
        </Link>
      </main>
    );
  }

  const hero = getTeamPhoto(data.nome, data.heroKeys);
  const crest = getCrest(data.nome, data.crestKeys);

  return (
    <main className="bg-[#FBFBFE] text-[#101010]">
      {/* HERO */}
      <section className="relative w-screen left-1/2 -translate-x-1/2">
        <div className="relative h-[380px] md:h-[440px] lg:h-[480px] overflow-hidden">
          {hero ? (
            <img src={hero} alt={`Foto do ${data.nome}`} className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <div className="absolute inset-0 bg-gray-300" />
          )}
          {/* overlay p/ leitura */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-transparent" />

          {/* TÍTULO – SEMPRE BRANCO */}
          <div className="relative z-10 h-full w-full container mx-auto px-4 md:px-6 lg:px-8 flex items-end pb-6">
            <div className="flex items-center gap-3">
              {crest && (
                <img src={crest} alt={`${data.nome} logo`} className="w-12 h-12 md:w-14 md:h-14 object-contain" />
              )}
              <h1
                className="hero-title force-white"
                style={{ fontFamily: '"Bebas Neue", Inter, ui-sans-serif' }}
              >
                {data.nome}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* KPIs alinhados e elevados */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20 -mt-10 md:-mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <KPI label="POSIÇÃO ATUAL" value={data.posicao} />
          <KPI label="PONTOS" value={data.pontos} />
          <KPI label="SALDO DE GOLS" value={data.saldo} />
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-10">
        <h2 className="section-title">História do {data.nome}</h2>
        <div className="panel">
          <p className="text-gray-700 leading-relaxed">{data.historia}</p>
        </div>
      </section>

      {/* PRÓXIMOS JOGOS */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 pb-6">
        <h2 className="section-title">Próximos Jogos</h2>
        <div className="panel p-4 md:p-6">
          <ul className="divide-y divide-gray-200">
            {data.proximos.map((j, i) => (
              <li key={i} className="py-3 md:py-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold">{j.jogo}</div>
                  <div className="text-sm text-gray-500">{j.comp}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">{j.quando}</div>
                  <div className="text-xs text-gray-400">{j.hora}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ELENCO / COMISSÃO */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="panel">
            <h3 className="sub-title">Elenco Atual</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center justify-between">
                <span>Goleiras</span>
                <span className="text-gray-500">{data.elenco.goleiras} jogadoras</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Defensoras</span>
                <span className="text-gray-500">{data.elenco.defensoras} jogadoras</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Meio-campo</span>
                <span className="text-gray-500">{data.elenco["meio-campo"]} jogadoras</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Atacantes</span>
                <span className="text-gray-500">{data.elenco.atacantes} jogadoras</span>
              </li>
            </ul>
          </div>

          <div className="panel">
            <h3 className="sub-title">Comissão Técnica</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <div className="font-semibold">Técnico Principal</div>
                <div className="text-sm text-gray-500">Com experiência no futebol feminino</div>
              </li>
              <li>
                <div className="font-semibold">Preparador Físico</div>
                <div className="text-sm text-gray-500">Especialista em condicionamento</div>
              </li>
              <li>
                <div className="font-semibold">Analista de Desempenho</div>
                <div className="text-sm text-gray-500">Análise tática e técnica</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
