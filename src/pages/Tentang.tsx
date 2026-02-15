import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";

const Tentang = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "Memberikan solusi digital terbaik yang membantu bisnis berkembang dan mencapai target mereka"
    },
    {
      icon: Eye,
      title: "Vision",
      description: "Menjadi software house terdepan yang dikenal dengan kualitas dan inovasi dalam setiap project"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Kami passionate dalam mengembangkan teknologi yang memberikan impact positif untuk klien"
    },
    {
      icon: Users,
      title: "Team",
      description: "Tim profesional yang berpengalaman dan selalu update dengan teknologi terkini"
    }
  ];

  const team = [
    {
      name: "Ahmad Rizki",
      role: "CEO & Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Siti Nurhaliza",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Budi Santoso",
      role: "Backend Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "Dewi Lestari",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tentang Kami
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Step Up Project adalah software house yang fokus pada pengembangan solusi digital berkualitas tinggi
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20 bg-secondary/50 rounded-lg p-8 md:p-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg">
            <p>
              Step Up Project dimulai pada Januari 2024 dengan visi sederhana: membantu bisnis bertransformasi digital dengan solusi yang tepat dan berkualitas. Kami percaya bahwa teknologi yang baik dapat mengubah cara bisnis beroperasi dan berkembang.
            </p>
            <p>
              Dengan tim yang berpengalaman dan passionate di bidang teknologi, kami telah membantu puluhan klien dari berbagai industri untuk mewujudkan ide mereka menjadi produk digital yang sukses.
            </p>
            <p>
              Kami tidak hanya membuat kode, tetapi membangun solusi yang benar-benar memberikan nilai tambah untuk bisnis klien kami. Setiap project adalah kesempatan untuk menciptakan sesuatu yang meaningful dan impactful.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="border-border hover:border-primary transition-all duration-300 hover:shadow-soft animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <value.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-hero rounded-lg p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Mari Bekerja Sama!
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Kami siap membantu mewujudkan ide digital Anda. Hubungi kami untuk diskusi lebih lanjut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
