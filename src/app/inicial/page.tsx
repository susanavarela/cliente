"use client"
import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 p-4 flex justify-between items-center">
        <div>
          <h1 className="text-white text-xl font-semibold">Mi Aplicación</h1>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-white">Usuario</span>
          <i className="fas fa-user-circle text-white text-xl"></i>
        </div>
      </header>

      <main className="flex">
        <nav className="bg-gray-800 text-white w-64 min-h-screen p-4">
          <ul className="space-y-2">
            <li>
              <Link href="inicial/recetas" className="block p-2 hover:bg-gray-700">
                Ver mis recetas
              </Link>
            </li>
            <li>
              <Link href="#" className="block p-2 hover:bg-gray-700">
                Ver a los usuarios que sigo
              </Link>
            </li>
            <li>
              <Link href="#" className="block p-2 hover:bg-gray-700">
                Buscar usuarios
              </Link>
            </li>
            <li>
              <Link href="#" className="block p-2 hover:bg-gray-700">
                Buscar recetas
              </Link>
            </li>
          </ul>
        </nav>

        <section className="p-4">
          {/* Contenido principal del dashboard */}
        </section>
      </main>
    </div>
  );
};

export default Page;