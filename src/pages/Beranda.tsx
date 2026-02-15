import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Palette, Globe, MessageSquare, Users, Shield, CheckCircle, Search, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

// Client logos
import swanbagLogo from "@/assets/clients/swanbag.png";
import sman1Logo from "@/assets/clients/sman1bringin.png";
import smpn2Logo from "@/assets/clients/smpn2.png";
import buketAtiqLogo from "@/assets/clients/buket-atiq.png";
import daunLogo from "@/assets/clients/daun-logo.png";
import himatifLogo from "@/assets/clients/himatif.png";
import libtourLogo from "@/assets/clients/libtour.png";
import tehIdamanLogo from "@/assets/clients/teh-idaman.png";

const clientLogos = [
  { src: swanbagLogo, alt: "SwanBag" },
  { src: sman1Logo, alt: "SMAN 1 Bringin" },
  { src: smpn2Logo, alt: "SMPN 2" },
  { src: buketAtiqLogo, alt: "Buket by Atiq" },
  { src: daunLogo, alt: "Daun Logo" },
  { src: himatifLogo, alt: "HIMATIF" },
  { src: libtourLogo, alt: "LIBTour" },
  { src: tehIdamanLogo, alt: "Teh Idaman" },
];

const Beranda = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Step Up!{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Code Up!
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Kami membangun solusi digital yang inovatif dan berkualitas tinggi untuk mengembangkan bisnis Anda ke level berikutnya
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-hover transition-all duration-300"
              >
                <Link to="/layanan">
                  Lihat Layanan Kami <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <Link to="/portofolio">
                  Lihat Portofolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pencapaian Kami Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pencapaian Kami
            </h2>
            <p className="text-muted-foreground">
              Kami hadir sebagai mitra teknologi yang terus bertumbuh melalui kolaborasi dengan berbagai klien
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { number: "20+", label: "Project Selesai" },
              { number: "10+", label: "Klien Puas" },
              { number: "100%", label: "Kepuasan Klien" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-background hover:bg-secondary/50 transition-all duration-300 border border-border">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos */}
          <div className="text-center mb-6">
            <p className="text-sm text-muted-foreground mb-6">Dipercaya oleh berbagai klien</p>
            <div className="overflow-hidden relative">
              <div className="flex animate-marquee">
                {/* Double the logos for seamless loop */}
                {[...clientLogos, ...clientLogos].map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 mx-6"
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border-2 border-border">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan Kami Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Layanan Kami
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Solusi digital untuk mengembangkan bisnis Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                icon: Palette,
                title: "UI/UX Design",
                description: "Desain antarmuka yang menarik dan pengalaman pengguna yang optimal"
              },
              {
                icon: Globe,
                title: "Web Development",
                description: "Website modern, cepat, dan SEO friendly dengan teknologi terkini"
              },
              {
                icon: Search,
                title: "Quality Assurance",
                description: "Testing website untuk memastikan kualitas dan bebas bug"
              },
              {
                icon: UserCheck,
                title: "Talent Network",
                description: "Membantu perusahaan mencari & menyaring talenta IT terbaik"
              }
            ].map((service, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary transition-all duration-300 hover:shadow-soft group"
              >
                <CardHeader>
                  <service.icon className="w-10 h-10 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/layanan">
                Lihat Semua Layanan <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mengapa Pilih Kami Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Mengapa Pilih Kami?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "Free Konsultasi",
                description: "Konsultasi gratis untuk membahas kebutuhan proyek Anda"
              },
              {
                icon: Users,
                title: "Tim Profesional",
                description: "Tim berpengalaman yang siap membantu mewujudkan ide Anda"
              },
              {
                icon: CheckCircle,
                title: "Hasil Berkualitas",
                description: "Mengutamakan kualitas di setiap proyek yang dikerjakan"
              },
              {
                icon: Shield,
                title: "Bergaransi",
                description: "Garansi maintenance hingga 6 bulan setelah serah terima"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-background border border-border hover:border-primary transition-all duration-300 hover:shadow-soft group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portofolio Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Portofolio
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beberapa proyek yang telah kami selesaikan untuk klien kami
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { title: "Company Profile", category: "Web Development", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop" },
              { title: "Prototyping", category: "UI/UX Design", image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=500&fit=crop" },
              { title: "Product Development", category: "Research & Inovation", image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=500&fit=crop" }
            ].map((project, index) => (
              <Card
                key={index}
                className="border-border transition-all duration-300 group overflow-hidden"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.category}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/portofolio">
                Lihat Portofolio Lengkap <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hubungi Kami Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Hubungi Kami
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Siap memulai proyek Anda? Konsultasikan kebutuhan bisnis Anda dengan tim kami secara gratis dan temukan solusi terbaik untuk mengembangkan bisnis digital Anda.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="shadow-hover hover:scale-105 transition-all duration-300"
          >
            <Link to="/hubungi-kami">
              Konsultasi Sekarang <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Beranda;
