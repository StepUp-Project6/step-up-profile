import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, MessageCircle, Instagram, Linkedin, Handshake } from "lucide-react";

const Komunitas = () => {
  const events = [
    {
      title: "One on One Mentoring: Project Manager Career Path",
      date: "27 Januari 2026",
      location: "Online",
      participants: "3 Peserta",
      description: "Sesi mentoring private yang membahas tentang karir seorang Project Manager, mulai skill yang dibutuhkan hingga apa saja yang perlu dipersiapkan untuk apply sebagai PM",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop"
    },
    {
      title: "Sharing Session #2: Startup Journey",
      date: "16 November 2025",
      location: "Online",
      participants: "21 Peserta",
      description: "Sharing Session yang diisi oleh Co-Founder Teamly, berbagi pengalaman tentang bagaiaman mendirikan startup dari tahap ide hingga pengembangan produk.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop"
    },
    {
      title: "Sharing Session #1: Vibe Coding",
      date: "25 Oktober 2025",
      location: "Online",
      participants: "15 Peserta",
      description: "Sharing Session yang diisi oleh praktisi Fullstack Developer, berbagi pengalaman tentang bagaimana penggunaan Vibe Coding dan trend kedepannya.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=500&fit=crop"
    },
    {
      title: "FE Talks: State Management",
      date: "10 Januari 2025",
      location: "Offline",
      participants: "10 Peserta",
      description: "Workshop yang membahasa tentang bagaimana menerapkan State Management yang efektif di level frontend",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop"
    },
    {
      title: "Mini Course: UI/UX For Beginner",
      date: "24 & 25 Mei 2024",
      location: "Offline",
      participants: "5 Peserta",
      description: "Mini Course yang membahas tentang konsep & praktik, dasar UI/UX mulai dari UX Law hingga implementasi User Flow, Design System, Wireframing dan Prototyping.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Komunitas Step Up
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bergabunglah dengan komunitas developer yang passionate dalam belajar dan berkembang bersama
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="border-border hover:border-primary transition-all duration-300 text-center">
            <CardHeader>
              <Users className="w-12 h-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-3xl">30+</CardTitle>
              <CardDescription>Active Members</CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-border hover:border-primary transition-all duration-300 text-center">
            <CardHeader>
              <Calendar className="w-12 h-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-3xl">5+</CardTitle>
              <CardDescription>Event Hosted</CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-border hover:border-primary transition-all duration-300 text-center">
            <CardHeader>
              <Handshake className="w-12 h-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-3xl">5+</CardTitle>
              <CardDescription>Organization Collaboration</CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-border hover:border-primary transition-all duration-300 text-center">
            <CardHeader>
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-3xl">24/7</CardTitle>
              <CardDescription>Active Discussion</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Events Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Event Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary transition-all duration-300 group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}{(event as any).time ? ` • ${(event as any).time}` : ''}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{event.participants}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join Community & Social Media Section */}
        <div className="bg-gradient-hero rounded-lg p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Join Komunitas Kami!
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Bergabunglah dengan komunitas kami untuk mendapatkan akses ke diskusi harian, event eksklusif, networking dengan developer lainnya, dan update terbaru
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="shadow-hover hover:scale-105 transition-all duration-300"
            >
              <a href="https://discord.gg/Yj8FzNqtdc" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-5 h-5" />
                Join Discord Community
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="https://instagram.com/stepup.project" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 w-5 h-5" />
                Follow Instagram
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="https://www.linkedin.com/company/step-up-project" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 w-5 h-5" />
                Follow LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Komunitas;
