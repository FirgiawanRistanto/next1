import "@/app/globals.css"; // Style global Tailwind
import Link from "next/link"; 
import Image from "next/image"; 

// Array daftar proyek 
const projects = [ 
  { 
    title: "Library App", 
    description: "Aplikasi perpustakaan dengan Next.js dan Firebase.", 
    demoLink: "#", 
    repoLink: "https://github.com/", 
    image: "/images/perpus.png", 
  }, 
  { 
    title: "Inventory App", 
    description: "Pencatatan stok dan keluar-masuk barang dengan React dan Tailwind CSS.", 
    demoLink: "#", 
    repoLink: "https://github.com/", 
    image: "/images/inven.png", 
  }, 
  { 
    title: "E-Commerce App", 
    description: "Aplikasi Penjualan parfum dengan CI dan Bootstrap.", 
    demoLink: "#", 
    repoLink: "https://github.com/", 
    image: "/images/parfum.png", 
  }, 
]; 

export default function Portfolio() { 
  return ( 
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 p-6"> 
      <div className="max-w-6xl mx-auto"> 
        <h1 className="text-5xl font-bold mb-2 text-blue-700 dark:text-blue-400 text-center">Firgi</h1> 
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 text-center">Junior Web Developer</p> 

        <h2 className="text-3xl font-semibold mb-4 text-blue-600 dark:text-blue-300 text-center">Proyek Unggulan</h2> 

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> 
          {projects.map((project, index) => ( 
            <div key={index} className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow rounded-xl p-6 group"> 
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3> 
              <Image src={project.image} alt={project.title} width={600} height={400} className="rounded-lg mb-4 object-cover transition-transform transform group-hover:scale-105" /> 
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p> 
              <div className="mt-4 flex gap-4"> 
                <a href={project.demoLink} className="text-blue-500 hover:underline transform hover:scale-105 transition">Demo</a> 
                <a href={project.repoLink} className="text-blue-500 hover:underline transform hover:scale-105 transition">GitHub</a> 
              </div> 
            </div> 
          ))} 
        </div> 

        {/* Tombol kembali */} 
        <br /> 
        <Link href="/"> 
          <button className="bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-500 transition-transform transform hover:scale-105"> 
            ← Kembali ke Halaman Utama 
          </button> 
        </Link> 
      </div> 
    </div> 
  ); 
}
