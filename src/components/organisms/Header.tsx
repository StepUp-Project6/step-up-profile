import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Beranda" },
    { to: "/layanan", label: "Layanan Kami" },
    { to: "/produk", label: "Produk Kami" },
    { to: "/portofolio", label: "Portofolio" },
    { to: "/artikel", label: "Artikel" },
    { to: "/komunitas", label: "Komunitas" },
    { to: "/tentang", label: "Tentang Kami" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Step Up Project Logo"
              className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-lg"
            />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-foreground">
                Step Up Project
              </span>
              <span className="text-xs text-muted-foreground">Step Up! Code Up!</span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                activeClassName="text-primary"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Button asChild className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-hover transition-all duration-300">
            <Link to="/hubungi-kami">
              Hubungi Kami
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                  activeClassName="text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft w-full mt-2">
                <Link to="/hubungi-kami" onClick={() => setIsMenuOpen(false)}>
                  Hubungi Kami
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
