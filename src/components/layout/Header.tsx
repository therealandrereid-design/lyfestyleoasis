import { useState, useEffect } from "react";
import { Menu, X, Phone, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Book", href: "#booking" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center gap-2 group"
        >
          <Scissors className="w-6 h-6 text-primary transition-transform group-hover:rotate-45" />
          <span className="font-display text-xl font-semibold text-foreground">
            Lyfestyle <span className="text-gradient-gold">Oasis</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-sm font-medium text-cream-muted hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/masterclass"
            className="text-sm font-medium text-cream-muted hover:text-primary transition-colors"
          >
            Masterclass
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+18768528938">
            <Button variant="glass" size="sm">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </a>
          <a href="#booking" onClick={(e) => { e.preventDefault(); handleNavClick("#booking"); }}>
            <Button variant="gold" size="sm">
              Book Now
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="container py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-lg font-medium text-cream-muted hover:text-primary transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/masterclass"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-cream-muted hover:text-primary transition-colors py-2"
          >
            Masterclass
          </Link>
          <div className="flex flex-col gap-3 pt-4 border-t border-border">
            <a href="tel:+18768528938" className="w-full">
              <Button variant="glass" className="w-full">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
            <a href="#booking" onClick={(e) => { e.preventDefault(); handleNavClick("#booking"); setIsOpen(false); }} className="w-full">
              <Button variant="gold" className="w-full">
                Book Now
              </Button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
