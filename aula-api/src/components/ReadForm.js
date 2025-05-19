"use client";
import React, { useState, useEffect } from "react";

const ReadUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/read", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(data);
        console.log("Busca realizada com sucesso!");
      } else {
        console.error("Erro ao buscar usuários:", response.status);
      }
    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Tem certeza que deseja deletar esse usuário?")) return;

    try {
      const response = await fetch("/api/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        console.log("Usuário deletado com sucesso!");
        fetchUsers(); // Atualiza a lista após deletar
      } else {
        const data = await response.json();
        console.error("Erro ao deletar usuário:", data.error);
      }
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Lista de Usuários</h2>
        <table className="min-w-full bg-white border border-black">
          <thead>
            <tr>
              <th className="py-2 px-4 border border-black bg-blue-500 text-white">ID</th>
              <th className="py-2 px-4 border border-black bg-blue-500 text-white">Nome</th>
              <th className="py-2 px-4 border border-black bg-blue-500 text-white">Email</th>
              <th className="py-2 px-4 border border-black bg-blue-500 text-white">Ação</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="text-gray-700">
                <td className="py-2 px-4 border border-black">{user.id}</td>
                <td className="py-2 px-4 border border-black">{user.nome}</td>
                <td className="py-2 px-4 border border-black">{user.email}</td>
                <td className="py-2 px-4 border border-black text-center">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReadUsers;
