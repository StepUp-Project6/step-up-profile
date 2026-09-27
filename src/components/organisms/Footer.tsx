import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const pageLinks = [
    { to: "/", label: "Beranda" },
    { to: "/layanan", label: "Layanan" },
    { to: "/portofolio", label: "Portofolio" },
    { to: "/produk", label: "Produk" },
    { to: "/tentang", label: "Tentang Kami" },
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Step Up Project
            </h3>
            <p className="text-muted-foreground mb-2">Step Up! Code Up!</p>
            <p className="text-sm text-muted-foreground">
              Membangun solusi digital yang inovatif dan berkualitas tinggi untuk bisnis Anda.
            </p>
          </div>

          {/* Halaman */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Halaman</h4>
            <ul className="space-y-2">
              {pageLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm">Sleman, DI Yogyakarta, Indonesia</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm">stepup.project6@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm">+62 822 6219 1159</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Step Up Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
