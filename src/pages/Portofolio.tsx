import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=500&fit=crop"
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
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&h=500&fit=crop"
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
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=500&fit=crop"
  },
  {
    title: "EduTaniMas",
    description: "Profile edukasi pertanian berkelanjutan untuk sekolah",
    tech: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
    ],
    categories: ["Website"],
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=500&fit=crop"
  },
  {
    title: "Bimbel Himalaya",
    description: "Platform bimbingan belajar untuk SD-SMA dengan berbagai jenis program",
    tech: [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "compas.co.id", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" }
    ],
    categories: ["Product Research"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop"
  },
  {
    title: "My UMKM",
    description: "Dashboard analitik UMKM naungan Indomaret",
    tech: [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
    ],
    categories: ["UI/UX Design"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
  },
  {
    title: "Swanbag",
    description: "Profile UMKM tas ramah lingkungan",
    tech: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
    ],
    categories: ["Website"],
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&h=500&fit=crop"
  },
  {
    title: "Buket Byatiq",
    description: "Profile UMKM buket bunga & cendera mata",
    tech: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
    ],
    categories: ["Website"],
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800&h=500&fit=crop"
  },
  {
    title: "LIND Society",
    description: "Sistem pengelolaan & penyewaan properti & wisate di Bali",
    tech: [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
    ],
    categories: ["Wireframe", "UX Research"],
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=500&fit=crop"
  },
  {
    title: "Momsie",
    description: "Platform sharing & konsultasi kehamilan antar tenaga medis & ibu hamil",
    tech: [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
    ],
    categories: ["UI/UX Design"],
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=500&fit=crop"
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
            Karya-karya terbaik kami yang telah membantu klien mencapai tujuan bisnis mereka
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