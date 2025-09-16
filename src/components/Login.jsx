// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { autenticar } from "./Servidorlogin";

export default function Login() {
  const navigate = useNavigate(); // pode deixar aqui, mas vamos usar window.location.replace
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setErro("");
    setLoading(true);
    try {
      const res = await autenticar({ email, senha }); // senha precisa ser "1234"
      localStorage.setItem(
        "auth",
        JSON.stringify({ ok: res.ok, token: res.token, email: res.user.email })
      );
      // navegação garantida
      window.location.replace("/"); // <-- aqui a magia
    } catch {
      setErro("Credenciais inválidas!");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center login-bg px-4">
      <div className="w-full max-w-md bg-white/95 backdrop-blur rounded-2xl p-8 shadow-xl">
        <h1 className="text-3xl font-extrabold text-center mb-2">Passa a Bola</h1>
        <p className="text-center text-gray-600 mb-6">
          Faça login para acessar o sistema
        </p>

        {erro && (
          <div className="text-center text-red-600 font-semibold mb-4">
            {erro}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Digite seu email"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Digite sua senha"
              required
            />
            <div className="text-xs text-gray-500 mt-1">Dica: A senha é “1234”</div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 text-white font-semibold rounded-xl py-2 hover:bg-purple-700 transition disabled:opacity-60"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
