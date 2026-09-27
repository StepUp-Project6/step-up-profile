import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Layanan = () => {
  const packages: { name: string; price?: string; originalPrice?: string; description: string; examples: string[]; features: string[]; recommended?: boolean }[] = [
    {
      name: "Paket Starter",
      price: "Mulai dari Rp 500.000",
      originalPrice: "Rp 800.000",
      description: "Website sederhana untuk bisnis yang ingin mulai hadir secara online.",
      examples: ["Landing Page", "E-Katalog"],
      features: [
        "Website one-page",
        "Tampilan desktop & mobile",
        "Max 5 section",
        "Tombol WhatsApp",
        "Formulir sederhana",
        "Integrasi Google Maps",
        "Basic SEO",
        "1 bulan maintenance",
        "Garansi 2 bulan"
      ]
    },
    {
      name: "Paket Bisnis",
      price: "Mulai dari Rp 1.000.000",
      originalPrice: "Rp 1.500.000",
      description: "Website multi-halaman untuk bisnis yang membutuhkan informasi lebih lengkap dan tampilan lebih profesional.",
      examples: ["Company Profile"],
      features: [
        "Website multi-page hingga 5 halaman",
        "Tampilan desktop & mobile",
        "Tombol WhatsApp",
        "Formulir sederhana",
        "Integrasi Google Maps",
        "Basic SEO",
        "3 bulan maintenance",
        "Garansi 4 bulan"
      ]
    },
    {
      name: "Paket Custom",
      description: "Solusi website yang dirancang khusus sesuai alur kerja, kebutuhan, dan tujuan bisnis Anda.",
      examples: ["Sistem Booking", "Sistem Informasi & Manajemen", "E-Learning", "POS", "CRM", "ERP"],
      recommended: true,
      features: [
        "Konsultasi dan analisis kebutuhan",
        "Fitur khusus sesuai kebutuhan bisnis",
        "Dashboard Admin & pengelolaan konten",
        "6 bulan maintenance",
        "Garansi 1 tahun"
      ]
    }
  ];

  const others = [
    {
      name: "Desain Aplikasi",
      description: "Desain UI/UX yang intuitif dan ramah pengguna untuk memberikan pengalaman digital terbaik di setiap platform.",
      points: [
        "Riset Pengguna",
        "Alur Pengguna",
        "Wireframe & Prototyping",
        "Desain Visual",
        "Uji Usabilitas",
        "Design System"
      ]
    },
    {
      name: "Tim IT",
      description: "Penyediaan talenta IT profesional yang siap langsung bekerja dan mendukung keberhasilan project Anda.",
      points: [
        "Pencarian & Seleksi Kandidat",
        "Tes Kemampuan Teknis",
        "Koordinasi Interview",
        "Verifikasi Latar Belakang",
        "Pendampingan Onboarding",
        "Akses Talent Pool"
      ]
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

        {/* Paket Website */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`flex flex-col border-border hover:border-primary transition-all duration-300 hover:shadow-soft animate-fade-in ${
                  pkg.recommended ? "md:col-span-2" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  {pkg.recommended && (
                    <span className="w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      Direkomendasikan
                    </span>
                  )}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  {pkg.price && (
                    <p className="flex items-baseline gap-2">
                      {pkg.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {pkg.originalPrice}
                        </span>
                      )}
                      <span className="text-lg font-semibold text-primary">{pkg.price}</span>
                    </p>
                  )}
                  <CardDescription className="text-base">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-5">
                    <p className="text-sm font-semibold text-foreground mb-2">Contoh Website:</p>
                    <div className="flex flex-wrap gap-2">
                      {pkg.examples.map((example) => (
                        <span
                          key={example}
                          className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Lainnya */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Lainnya
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((item, index) => (
              <Card
                key={index}
                className="border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {item.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layanan;