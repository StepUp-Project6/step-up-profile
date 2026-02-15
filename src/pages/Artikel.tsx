import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Clock } from "lucide-react";

const Artikel = () => {
  const articles = [
    {
      title: "Pentingnya Membuat Design System",
      description: "Kenali apa itu design system dan manfaat dibaliknya",
      date: "21 Jun 2024",
      readTime: "2 min",
      category: "Knowledge",
      link: "https://medium.com/@stepup.project/pentingnya-membuat-design-system-95a9064ba50e",
      image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*gbNps-MaQDB2c5SVT0s4qg.jpeg"
    },
    {
      title: "Cara Install & Sinkronisasi GIT dan GitHub",
      description: "Cara memanajemen project dengan mudah menggunakan github",
      date: "15 Jul 2024",
      readTime: "3 min",
      category: "Tutorial",
      link: "https://medium.com/@stepup.project/cara-install-sinkronisasi-git-dan-github-1e5608d9a4fe",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*1wMClMdwa__7Lv6jpIB4bA.png"
    },
    {
      title: "API : Jembatan Penghubung Aplikasi",
      description: "Cara sederhana memahami API",
      date: "6 Jul 2024",
      readTime: "3 min",
      category: "Performance",
      link: "https://medium.com/@stepup.project/api-jembatan-sederhana-penghubung-aplikasi-dec4b3c9a294",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*7btm5KJSCgMEPDn6jJXxJg.jpeg"
    },
    /*
    {
      title: "Membangun API dengan Node.js dan Express",
      description: "Tutorial step-by-step membuat RESTful API yang scalable menggunakan Node.js dan Express framework.",
      date: "5 Mar 2024",
      readTime: "12 min",
      category: "Backend",
      link: "https://medium.com/@stepupproject/membangun-api-nodejs-express",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
    },
    {
      title: "UI/UX Design Principles untuk Developer",
      description: "Prinsip-prinsip desain UI/UX yang wajib dipahami developer untuk membuat aplikasi yang user-friendly.",
      date: "1 Mar 2024",
      readTime: "7 min",
      category: "Design",
      link: "https://medium.com/@stepupproject/uiux-design-principles",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop"
    },
    {
      title: "Database Design untuk Aplikasi Modern",
      description: "Cara merancang struktur database yang efisien dan scalable untuk mendukung aplikasi modern Anda.",
      date: "25 Feb 2024",
      readTime: "9 min",
      category: "Database",
      link: "https://medium.com/@stepupproject/database-design-modern-apps",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop"
    }
    */
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Artikel & Tutorial
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorial, dan best practices dari tim Step Up Project
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary transition-all duration-300 group overflow-hidden animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              <CardHeader className="flex-1">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {article.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10"
                >
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    Baca di Medium <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-hero rounded-lg p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ingin Belajar Lebih Banyak?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Follow akun Medium kami untuk mendapatkan update artikel dan tutorial terbaru
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="shadow-hover hover:scale-105 transition-all duration-300"
          >
            <a href="https://medium.com/@stepup.project" target="_blank" rel="noopener noreferrer">
              Follow di Medium <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Artikel;
