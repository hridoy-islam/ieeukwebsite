"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStudentDropdownOpen, setIsStudentDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    {
      name: "International Student",
      href: "#",
      submenu: [
        {
          name: "Study In Uk",
          href: "/study-in-uk",
        },
        {
          name: "Our Services",
          href: "/our-services",
        },
        {
          name: "Our Courses",
          href: "/our-courses",
        },
        { name: "Universities and Colleges", href: "/universities-colleges" },
        { name: "Global Branches", href: "/global-branches" },
      ],
    },
    { name: "Courses", href: "/courses" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="relative z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/logo.jpeg" alt="IEE Logo" className="h-20 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className="px-4 py-2 text-foreground font-medium hover:text-iee-accent transition-colors duration-200 flex items-center"
              >
                {link.name}
                {link.submenu && <ChevronDown className="w-4 h-4 ml-1" />}
              </Link>

              {/* Dropdown Menu */}
              {link.submenu && (
                <div className="absolute left-0 mt-0 w-60 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  {link.submenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-foreground hover:bg-iee-accent/10 hover:text-iee-accent transition-all duration-200 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <Button className="btn-iee-secondary font-bold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all">
            <Link href="/getstarted">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        <div
          className={`absolute top-0 right-0 h-full w-80 bg-white transform transition-transform duration-300 shadow-2xl overflow-y-auto ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <img src="logo.jpeg" alt="IEE Logo" className="h-8 w-auto" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="space-y-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <button
                    onClick={() =>
                      link.submenu &&
                      setIsStudentDropdownOpen(!isStudentDropdownOpen)
                    }
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-foreground hover:bg-iee-accent/10 transition-all duration-200 font-medium"
                  >
                    <Link href={link.href}>{link.name}</Link>
                    {link.submenu && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isStudentDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Submenu */}
                  {link.submenu && isStudentDropdownOpen && (
                    <div className="mt-2 ml-4 space-y-2 border-l-2 border-iee-accent/20 pl-4">
                      {link.submenu.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block py-2 text-sm text-foreground/70 hover:text-iee-accent transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-8">
              <Button className="w-full btn-iee-secondary font-bold py-3 rounded-full">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
