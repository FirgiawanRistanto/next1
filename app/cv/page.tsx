"use client"; // Menandakan bahwa ini adalah komponen client

import Image from "next/image";
import { Mail, Linkedin, ArrowLeft } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function CV() {
   const [open, setOpen] = useState<number | null>(null);

  const pengalaman = [
    {
      title: "Frontend Developer - PT Inovasi",
      time: "2022 - Sekarang",
      detail: [
        "Membangun dashboard analitik dengan React & Tailwind CSS.",
        "Optimisasi performa website & responsiveness.",
        "Kolaborasi dengan tim UI/UX."
      ]
    },
    {
      title: "Junior Developer - Startup XYZ",
      time: "2020 - 2022",
      detail: [
        "Kontribusi ke pengembangan MVP aplikasi mobile.",
        "Riset & implementasi API publik.",
        "Testing unit dan integrasi, CI/CD pipeline."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-800 dark:to-gray-900 p-6">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
        {/* Header & Foto Profil */}
        <div className="flex items-center gap-6 mb-6">
          <Image src="/images/saitama.png" alt="Foto Profil" width={100} height={100} className="rounded-full border-4 border-blue-500" />
          <div>
            <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400">Firgi</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">Junior Web Developer</p>
          </div>
        </div>
        <hr className="my-4 border-gray-300 dark:border-gray-700" />

        {/* Tentang Saya */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-300">Tentang Saya</h2>
          <p className="text-gray-700 dark:text-gray-200 mt-2">
            Saya adalah developer dengan passion di bidang web, membangun aplikasi efisien dan responsif.
          </p>
        </section>

        {/* Pengalaman Kerja Interaktif */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-300">Pengalaman</h2>
          <div className="space-y-4 mt-2">
            {pengalaman.map((exp, i) => (
              <div
                key={i}
                className="rounded border border-blue-200 dark:border-blue-700 p-3 hover:bg-blue-50 dark:hover:bg-blue-900 transition cursor-pointer"              
                onClick={() => setOpen(open === i ? null : i)}>
              >
                <div className="flex flex-col">
                  <span className="font-medium">{exp.title}</span>
                  <span className="text-sm text-gray-500">{exp.time}</span>
                  {open === i && (
                    <ul className="mt-2 list-disc ml-5 text-sm text-gray-700 dark:text-gray-200">
                      {exp.detail.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pendidikan */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-300">Pendidikan</h2>
          <p className="mt-2">S1 Komputer - Institut Teknologi dan Bisnis Diniyyah Lampung (2022–2026)</p>
        </section>

        {/* Kontak */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-300">Kontak</h2>
          <div className="flex items-center mt-2 gap-2">
            <Mail className="text-blue-500" /> <span className="font-medium">user@email.com</span>
          </div>
          <div className="flex items-center mt-2 gap-2">
            <Linkedin className="text-blue-500" />
            <a href="#" className="text-blue-500 hover:underline">linkedin.com/</a>
          </div>
        </section>

        {/* Tombol Kembali */}
        <div className="mt-8 text-center">
          <Link href="/">
            <button className="flex items-center bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-500 transition mx-auto">
               ← Kembali ke Halaman Utama
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
