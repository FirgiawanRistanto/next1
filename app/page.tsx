"use client"; // Menandakan bahwa komponen ini dirender di sisi klien, bukan server

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-800 transition-all">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-gray-100">
        <h1 className="text-3xl font-bold text-blue-700">Firgi</h1>
        <div className="flex items-center gap-6">
          <Link href="/cv" className="hover:underline text-blue-600 transition duration-300">
            CV
          </Link>
          <Link href="/portfolio" className="hover:underline text-blue-600 transition duration-300">
            Portfolio
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <main className="text-center mt-16 px-6">
        <h2 className="text-5xl font-semibold mb-4">Selamat Datang di Personal Landing Page</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
          Jelajahi informasi tentang saya di halaman CV, atau lihat karya saya di halaman Portfolio.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/cv"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-500 transition transform hover:scale-105"
          >
            Lihat CV
          </Link>
          <Link
            href="/portfolio"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl shadow-md hover:bg-blue-100 transition transform hover:scale-105"
          >
            Lihat Portfolio
          </Link>
        </div>

        {/* About me and Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-8 mt-16">
          {/* About Me Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-2xl font-semibold mb-2">Tentang Saya</h3>
            <p className="text-gray-700">
              Saya adalah seorang developer web dengan passion untuk menciptakan aplikasi yang efisien dan responsif. 
              Saya memiliki pengalaman bekerja dengan berbagai teknologi modern dan berkomitmen untuk belajar hal-hal baru.
            </p>
          </div>
        </div>
      </main>

      <footer className="text-center mt-20 mb-0">
        <span className="block text-sm text-gray-500">© {new Date().getFullYear()} Firgi. All rights reserved.</span>
      </footer>
    </div>
  );
}
