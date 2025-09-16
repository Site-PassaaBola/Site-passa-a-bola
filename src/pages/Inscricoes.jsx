// src/pages/Inscricoes.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function getInscricoesFromStorage() {
  try {
    return JSON.parse(localStorage.getItem("inscricoes") || "[]");
  } catch {
    return [];
  }
}

export default function Inscricoes() {
  const [inscricoes, setInscricoes] = useState([]);
  const navigate = useNavigate();  // Adicionando o useNavigate para redirecionamento

  useEffect(() => {
    setInscricoes(getInscricoesFromStorage());
  }, []);

  return (
    <div>
      {/* HERO */}
      <section
        className="w-screen text-center py-16 relative left-1/2 -translate-x-1/2"
        style={{
          background: "linear-gradient(90deg, #7B3AF5 0%, #FADF63 100%)",
        }}
      >
        <h1 className="text-5xl font-extrabold text-white">Inscrições</h1>
        <p className="text-white mt-3 text-lg">
          Faça parte da história do futebol feminino brasileiro. Inscreva-se agora!
        </p>
        {/* Botão que redireciona para a página de fazer inscrição */}
        <button
          onClick={() => navigate("/fazer-inscricao")}  // Navega para a página de inscrição
          className="mt-6 px-8 py-3 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold shadow-lg transition-all"
        >
          Fazer Inscrição
        </button>
      </section>

      {/* LISTA */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-3xl font-extrabold text-purple mb-2">
          Inscrições Realizadas ({inscricoes.length})
        </h2>
        <p className="text-gray-500 mb-10">
          Lista de todas as inscrições em ordem de chegada
        </p>

        {inscricoes.length === 0 ? (
          <p className="text-gray-600">
            Nenhuma inscrição realizada ainda. Seja a primeira!
          </p>
        ) : (
          <div className="max-w-2xl mx-auto flex flex-col gap-6">
            {inscricoes.map((insc) => (
              <div
                key={insc.id}
                className="bg-white p-6 rounded-2xl shadow-xl text-left border border-gray-100"
              >
                <h3 className="text-lg font-bold text-purple">{insc.nome}</h3>
                <p className="text-sm text-gray-600">{insc.email}</p>
                <p className="mt-2 text-sm">
                  <b>Posição:</b> {insc.posicao} |{" "}
                  <b>Experiência:</b> {insc.experiencia}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  <b>Data:</b> {insc.dataHora}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
