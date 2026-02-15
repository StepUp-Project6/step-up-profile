import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, MessageCircle, Instagram, Linkedin, Handshake } from "lucide-react";

const Komunitas = () => {
  const events = [
    {
      title: "Workshop: React Advanced Patterns",
      date: "25 Maret 2024",
      time: "14:00 - 17:00 WIB",
      location: "Online via Zoom",
      participants: "50+ peserta",
      description: "Workshop intensif membahas advanced patterns di React seperti Compound Components, Render Props, dan Custom Hooks.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop"
    },
    {
      title: "Tech Talk: Microservices Architecture",
      date: "18 Maret 2024",
      time: "19:00 - 21:00 WIB",
      location: "Hybrid (Online & Offline)",
      participants: "80+ peserta",
      description: "Diskusi mendalam tentang implementasi microservices architecture di production environment.",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=500&fit=crop"
    },
    {
      title: "Meetup: Mobile Development Trends 2024",
      date: "10 Maret 2024",
      time: "15:00 - 18:00 WIB",
      location: "Jakarta Selatan",
      participants: "60+ peserta",
      description: "Networking dan sharing session tentang tren mobile development terbaru di tahun 2024.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop"
    },
    {
      title: "Coding Bootcamp: Full Stack Web Dev",
      date: "1-3 Maret 2024",
      time: "09:00 - 17:00 WIB",
      location: "Bandung",
      participants: "30+ peserta",
      description: "Bootcamp 3 hari intensif untuk belajar full stack web development dari nol hingga deploy.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop"
    },
    {
      title: "Webinar: AI Integration in Web Apps",
      date: "25 Februari 2024",
      time: "13:00 - 15:00 WIB",
      location: "Online via Google Meet",
      participants: "100+ peserta",
      description: "Cara mengintegrasikan AI dan machine learning ke dalam aplikasi web modern.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop"
    },
    {
      title: "Hackathon: Build for Impact",
      date: "10-11 Februari 2024",
      time: "Full Day",
      location: "Surabaya",
      participants: "120+ peserta",
      description: "Hackathon 24 jam untuk membuat solusi digital yang memberikan dampak positif untuk masyarakat.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop"
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
                      <span>{event.date} • {event.time}</span>
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
