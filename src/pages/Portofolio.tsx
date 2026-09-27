import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

import oneHomeImage from "@/assets/porto/one-home.png";
import presensikuImage from "@/assets/porto/presensiku.png";
import edutanimasImage from "@/assets/porto/edutanimas.png";
import swanbagImage from "@/assets/porto/swanbag.png";
import buketImage from "@/assets/porto/buket.png";
import momsieeImage from "@/assets/porto/momsiee.png";
import libtourImage from "@/assets/porto/libtour.png";
import myumkmImage from "@/assets/porto/myumkm.png";
import lindsocietyImage from "@/assets/porto/lindsociety.png";
import himalayaImage from "@/assets/porto/himalaya.png";

const projects = [
  {
    title: "One Home",
    description: "Sistem pembelajaran bahasa inggris dan informasi terpadu",
    tech: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
    ],
    categories: ["Website", "E-learning"],
    image: oneHomeImage
  },
  {
    title: "PresensiKU",
    description: "Sistem absensi online sederhana untuk UMKM",
    tech: [
      { name: "Next js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Node js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
    ],
    categories: ["Website", "SaaS"],
    image: presensikuImage
  },
  {
    title: "Buket Byatiq",
    description: "Profile UMKM buket bunga & cendera mata",
    tech: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
    ],
    categories: ["Website"],
    image: buketImage
  },
  {
    title: "Momsie",
    description: "Platform sharing & konsultasi kehamilan antar tenaga medis & ibu hamil",
    tech: [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
    ],
    categories: ["UI/UX Design"],
    image: momsieeImage
  },
  {
    title: "Swanbag",
    description: "Profile UMKM tas ramah lingkungan",
    tech: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
    ],
    categories: ["Website"],
    image: swanbagImage
  },
  {
    title: "EduTaniMas",
    description: "Profile edukasi pertanian berkelanjutan untuk sekolah",
    tech: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
    ],
    categories: ["Website"],
    image: edutanimasImage
  },
  {
    title: "LIND Society",
    description: "Sistem pengelolaan & penyewaan properti & wisate di Bali",
    tech: [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
    ],
    categories: ["Wireframe", "UX Research"],
    image: lindsocietyImage
  },
  {
    title: "My UMKM",
    description: "Dashboard analitik UMKM naungan Indomaret",
    tech: [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
    ],
    categories: ["UI/UX Design"],
    image: myumkmImage
  },
  {
    title: "LIBTour",
    description: "Profile perpustakaan kampus dengan sistem virtual tour",
    tech: [
      { name: "Next js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Node js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
    ],
    categories: ["Website"],
    image: libtourImage
  },
  {
    title: "Bimbel Himalaya",
    description: "Platform bimbingan belajar untuk SD-SMA dengan berbagai jenis program",
    tech: [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "compas.co.id", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" }
    ],
    categories: ["Product Research"],
    image: himalayaImage
  }
];

const Portofolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Portofolio Kami
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Project terbaik kami yang telah membantu klien mencapai tujuan bisnis mereka
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentProjects.map((project, index) => (
            <Card
              key={index}
              className="border-border overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(index % itemsPerPage) * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex flex-col mb-2 gap-2">
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((category, idx) => (
                      <Badge key={idx} variant="secondary" className="text-[10px] uppercase font-bold tracking-wider">
                        {category}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                </div>
                <CardDescription className="text-sm line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary/30 border border-border"
                      title={tech.name}
                    >
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-4 h-4"
                      />
                      <span className="text-[10px] font-medium text-muted-foreground">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {currentPage === totalPages && (
            <Card className="border-border border-dashed bg-secondary/20 flex flex-col items-center justify-center text-center px-6 py-12 animate-fade-in">
              <span className="text-5xl font-bold text-primary mb-2">10+</span>
              <span className="text-sm text-muted-foreground">Project Lainnya</span>
            </Card>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full border border-border hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`w-10 h-10 rounded-full border border-border font-medium transition-all ${currentPage === number
                    ? "bg-primary text-primary-foreground border-primary"
                    : "hover:bg-secondary"
                    }`}
                >
                  {number}
                </button>
              ))}
            </div>
            <button
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full border border-border hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portofolio;