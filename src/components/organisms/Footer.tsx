import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
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

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Beranda
                </a>
              </li>
              <li>
                <a href="/layanan" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Layanan Kami
                </a>
              </li>
              <li>
                <a href="/portofolio" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Portofolio
                </a>
              </li>
              <li>
                <a href="/tentang" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Tentang Kami
                </a>
              </li>
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
