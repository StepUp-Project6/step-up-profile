import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Globe, ShieldCheck, Users, Lightbulb, MessageSquare, ClipboardList, Code, Rocket } from "lucide-react";

const Layanan = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Desain antarmuka yang menarik dan pengalaman pengguna yang optimal untuk produk digital Anda",
      features: ["User Research", "User Flow", "Wireframing", "Prototyping", "Visual Design", "Usability Testing"]
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Pembuatan website modern, responsif, dan berkinerja tinggi dengan teknologi terkini",
      features: ["SEO Friendly", "Fast Load Time", "Responsive Design", "Progressive Web App", "Secure & Scalable", "Cross-Browser Compatible"]
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "Testing website secara menyeluruh untuk memastikan kualitas produk dan bebas dari bug",
      features: ["Manual Testing", "Automated Testing", "Performance Testing", "Security Testing", "Bug Reporting", "Regression Testing"]
    },
    {
      icon: Users,
      title: "Talent Network",
      description: "Membantu perusahaan untuk mencari dan menyaring talenta IT yang berkualitas",
      features: ["Candidate Sourcing", "Technical Assessment", "Interview Coordination", "Background Check", "Onboarding Support", "Talent Pool Access"]
    },
    {
      icon: Lightbulb,
      title: "Product Innovation",
      description: "Sebagai product builder, kami membantu mewujudkan ide startup Anda menjadi produk digital",
      features: ["Idea Validation", "MVP Development", "Product Strategy", "Market Research", "Tech Consultation", "Iterative Development"]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Layanan Kami
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solusi digital komprehensif untuk semua kebutuhan teknologi bisnis Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-border hover:border-primary transition-all duration-300 hover:shadow-soft group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <service.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Proses Kerja Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Konsultasi", icon: MessageSquare, desc: "Kami memulai dengan diskusi mendalam untuk memahami kebutuhan, tantangan, dan tujuan bisnis klien agar solusi yang dirancang benar-benar relevan dan tepat sasaran." },
              { step: "02", title: "Planning", icon: ClipboardList, desc: "Berdasarkan hasil konsultasi, kami menyusun perencanaan dan strategi pengembangan yang mencakup ruang lingkup pekerjaan, pendekatan pengerjaan, jadwal, serta prioritas fitur." },
              { step: "03", title: "Development", icon: Code, desc: "Kami mengerjakan solusi secara bertahap melalui proses yang terstruktur dan kolaboratif, dengan fokus pada kualitas hasil serta kesesuaian dengan kebutuhan klien." },
              { step: "04", title: "Launch", icon: Rocket, desc: "Sebelum digunakan secara resmi, kami melakukan pengujian menyeluruh dan penyiapan sistem agar dapat berjalan dengan baik saat mulai dipakai oleh pengguna." }
            ].map((process, index) => (
              <Card 
                key={index} 
                className="relative border-border hover:border-primary transition-all duration-300 hover:shadow-soft group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step badge */}
                <div className="absolute -top-3 left-6 bg-gradient-hero text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
                  Step {process.step}
                </div>
                
                <CardHeader className="pt-8">
                  <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300">
                    <process.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{process.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {process.desc}
                  </p>
                </CardContent>
                
                {/* Connector arrow for desktop */}
                {index < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground text-xs">→</span>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layanan;