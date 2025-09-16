// src/pages/Historia.jsx
import React from "react";
import heroImg from "../assets/hero.jpg";

export default function Historia() {
  return (
    <main className="w-full min-h-screen bg-white">

      {/* HERO FULL-BLEED de verdade (via inline style) */}
      <section
        className="relative h-[420px] md:h-[520px] overflow-hidden w-screen flex items-center justify-center"
        style={{
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        }}
      >
        <div
          className="absolute inset-0 bg-cover"
          // ajuste 40% pra subir/descer o enquadramento
          style={{ backgroundImage: `url(${heroImg})`, backgroundPosition: "50% 40%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700/85 via-purple-500/55 to-yellow-400/75" />

        <div className="relative z-10 w-full px-6 text-center">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight">
            Nossa História
          </h1>
          <p className="mt-6 text-white/90 text-lg md:text-2xl max-w-5xl mx-auto">
            Acompanhe a trajetória do futebol feminino brasileiro e as conquistas
            que moldaram nossa paixão pelo esporte
          </p>
        </div>
      </section>

      {/* CONTEÚDO CENTRAL (pode ficar dentro do container mesmo) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold text-slate-900">
          O futebol feminino é uma história de resistência, paixão e muita bola no pé.
        </h2>

        {/* 2 CARDS */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="rounded-2xl border border-slate-200 bg-white shadow-sm px-6 md:px-10 py-8 md:py-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">Os Primeiros Passos</h3>
            <p className="mt-4 text-slate-600 md:text-lg">
              Desde o final do século XIX, mulheres já batiam bola, mesmo com olhares tortos da sociedade.
              Na Inglaterra, rolavam partidas desde 1895.
            </p>
            <p className="mt-4 text-slate-600 md:text-lg">
              Durante a Primeira Guerra Mundial, com os homens no front, os times femininos bombaram —
              o Dick, Kerr's Ladies chegou a lotar estádios.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white shadow-sm px-6 md:px-10 py-8 md:py-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">O Baque do Machismo</h3>
            <p className="mt-4 text-slate-600 md:text-lg">
              Mas o machismo deu o bote: em 1921, a FA (Federação Inglesa) baniu o futebol feminino de seus
              gramados, chamando-o de “inadequado para mulheres”.
            </p>
            <p className="mt-4 text-slate-600 md:text-lg">
              Vários países copiaram essa decisão. Só décadas depois essas barreiras começaram a cair.
            </p>
          </article>
        </div>

        {/* CARD CENTRAL */}
        <div className="mt-16">
          <article className="rounded-2xl border border-slate-200 bg-white shadow-sm px-6 md:px-10 py-10 text-center">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">A Luta Brasileira</h3>
            <p className="mt-4 text-slate-600 md:text-lg">
              No Brasil, a história tem um sabor ainda mais amargo. Em 1941, foi proibido por lei que mulheres
              jogassem futebol — só em 1979 essa lei foi revogada.
            </p>
            <p className="mt-4 text-slate-600 md:text-lg">
              A partir daí, o futebol feminino começou a se erguer de novo, com guerreiras que abriram caminho
              como Marta, Formiga e tantas outras.
            </p>
            <p className="mt-6 md:text-xl font-extrabold text-slate-900">
              Hoje, mesmo com desafios, a luta segue: mais visibilidade, mais investimento, mais respeito.
              <br />E mais meninas sonhando com gols que mudam vidas.
            </p>
          </article>
        </div>

        {/* TÍTULO + 3 CARDS (TIMELINE) */}
        <h3 className="mt-20 text-center text-3xl md:text-4xl font-extrabold text-slate-900">
          A Luta Continua
        </h3>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm px-6 md:px-8 py-8 text-center">
            <div className="text-6xl font-extrabold text-amber-400">2024</div>
            <h4 className="mt-4 text-xl md:text-2xl font-extrabold text-slate-900">
              Hoje, mesmo com desafios, a luta segue:
            </h4>
            <p className="mt-3 text-slate-600">
              mais visibilidade, mais investimento, mais respeito. E mais meninas sonhando com gols que mudam vidas.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm px-6 md:px-8 py-8 text-center">
            <div className="text-6xl font-extrabold text-amber-400">2019</div>
            <h4 className="mt-4 text-xl md:text-2xl font-extrabold text-slate-900">
              Copa do Mundo na França
            </h4>
            <p className="mt-3 text-slate-600">
              A Seleção Brasileira alcança as oitavas de final, inspirando uma nova geração e ganhando milhões de fãs.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm px-6 md:px-8 py-8 text-center">
            <div className="text-6xl font-extrabold text-amber-400">2013</div>
            <h4 className="mt-4 text-xl md:text-2xl font-extrabold text-slate-900">
              Criação do Brasileirão Feminino
            </h4>
            <p className="mt-3 text-slate-600">
              A CBF oficializa o campeonato, profissionalizando a modalidade e criando mais oportunidades.
            </p>
          </div>
        </div>
      </section>

      {/* CALLOUT FINAL FULL-BLEED */}
      <section
        className="relative w-screen py-16 px-6 border-t border-slate-200 shadow-sm bg-gradient-to-r from-purple-100 to-amber-50"
        style={{
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        }}
      >
        <div className="text-center max-w-5xl mx-auto">
          <h4 className="text-2xl md:text-3xl font-extrabold text-slate-900">O Legado Continua</h4>
          <p className="mt-5 text-slate-600 md:text-lg">
            Cada partida, cada gol, cada conquista é um passo a mais na construção de um futuro
            onde o talento feminino no futebol seja celebrado e valorizado como merece.
          </p>
        </div>
      </section>
    </main>
  );
}