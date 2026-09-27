import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { to: "/", label: "Beranda" },
    { to: "/layanan", label: "Layanan" },
    { to: "/portofolio", label: "Portofolio" },
    { to: "/produk", label: "Produk" },
  ];

  const tentangLinks = [
    { to: "/tentang", label: "Perusahaan" },
    { to: "/komunitas", label: "Komunitas" },
    { to: "/artikel", label: "Artikel" },
  ];

  const isTentangActive = tentangLinks.some((link) => link.to === pathname);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 sm:gap-3">
            <img
              src="/logo.jpg"
              alt="Step Up Project Logo"
              className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain rounded-lg"
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
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

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-300 font-medium outline-none ${
                  isTentangActive ? "text-primary" : ""
                }`}
              >
                Tentang Kami
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                {tentangLinks.map((link) => (
                  <DropdownMenuItem key={link.to} asChild>
                    <Link
                      to={link.to}
                      className={`w-full cursor-pointer font-medium ${
                        pathname === link.to ? "text-primary" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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

              <div className="flex flex-col gap-3 pt-2 border-t border-border">
                <span
                  className={`font-medium ${isTentangActive ? "text-primary" : "text-foreground"}`}
                >
                  Tentang Kami
                </span>
                <div className="flex flex-col gap-3 pl-4">
                  {tentangLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 py-1"
                      activeClassName="text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>

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
