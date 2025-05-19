"use client";
import React from "react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Bem-vindo ao Next.js!
        </h1>
        <p className="text-gray-600 mb-6">
          Edite <code className="bg-gray-200 p-1 rounded">src/app/page.js</code> e salve para recarregar.
        </p>
        <a
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenda Next.js
        </a>
      </div>
    </main>
  );
}
