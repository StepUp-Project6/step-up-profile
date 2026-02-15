import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, BarChart3, CheckCircle, Home, Trophy, History, Search, Medal } from "lucide-react";

const ProdukKami = () => {
  const products = [
    {
      name: "PresensiKU",
      tagline: "Solusi Absensi Modern untuk UMKM",
      description: "Web app absensi yang dilengkapi dengan pelacakan lokasi GPS, foto selfie, dan laporan kehadiran realtime. Dirancang khusus untuk memudahkan manajemen kehadiran karyawan di UMKM.",
      features: [
        { icon: MapPin, text: "GPS Location Tracking" },
        { icon: Clock, text: "Clock In/Out Realtime" },
        { icon: Users, text: "Employee Management" },
        { icon: BarChart3, text: "Attendance Reports" },
        { icon: CheckCircle, text: "Photo Verification" }
      ],
      types: ["B2B", "SaaS"],
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=500&fit=crop"
    },
    {
      name: "Billiard Rank",
      tagline: "Bermain Dengan Lebih Kompetitif",
      description: "Web App untuk para pemain billiard agar lebih kompetitif, bukan hanya bermain semata. Hadir dengan fitur rank sebagai mvp, dilengkapi dengan fitur mencari lawan, create & join room, serta history match.",
      features: [
        { icon: Trophy, text: "Player Rank" },
        { icon: Users, text: "Host & Join Room" },
        { icon: History, text: "Match History" },
        { icon: Search, text: "Search Player" },
        { icon: Medal, text: "Badge & Achievement" }
      ],
      types: ["B2C"],
      status: "Coming Soon",
      image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=800&h=500&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Produk Kami
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solusi digital siap pakai yang dapat disesuaikan dengan kebutuhan bisnis Anda. Hemat waktu dan biaya pengembangan dengan produk yang sudah teruji.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="border-border transition-all duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.types.map((type, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                      {type}
                    </span>
                  ))}
                  {product.status === "Coming Soon" && (
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-500 text-white">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">{product.name}</CardTitle>
                <p className="text-lg text-primary font-medium">
                  {product.tagline}
                </p>
                <CardDescription className="text-base leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Fitur Utama:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2 rounded-lg bg-secondary/30"
                      >
                        <feature.icon className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-xs text-foreground">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button
                  disabled={product.status === "Coming Soon"}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => {
                    if (product.status !== "Coming Soon") {
                      const message = `Halo Step Up Project, saya tertarik untuk request demo produk ${product.name}. Mohon informasinya lebih lanjut.`;
                      window.open(`https://wa.me/6282262191159?text=${encodeURIComponent(message)}`, '_blank');
                    }
                  }}
                >
                  Request Demo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-hero rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Tertarik dengan Produk Kami?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Hubungi kami untuk diskusi lebih lanjut tentang bagaimana produk kami dapat membantu bisnis Anda
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="shadow-hover"
            onClick={() => {
              const message = "Halo Step Up Project, saya ingin bertanya lebih lanjut mengenai produk-produk yang tersedia.";
              window.open(`https://wa.me/6282262191159?text=${encodeURIComponent(message)}`, '_blank');
            }}
          >
            Hubungi Sales
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProdukKami;