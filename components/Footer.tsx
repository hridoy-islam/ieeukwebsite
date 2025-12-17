"use client";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const usefulLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Instructors", href: "/instructors" },
    { name: "Latest Posts", href: "/blog" },
    { name: "Testimonials", href: "/testimonials" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/IEEUKLtd/", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/Interna03380092", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/education.iee/", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-iee-dark text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsla(var(--iee-accent),0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsla(var(--iee-accent),0.15),transparent_50%)]"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="mb-6">
              <img
                src="/logo.jpeg"
                alt="IEE Logo"
                className="h-20 w-auto mb-4"
              />
            </div>

            <p className="text-gray-300 leading-relaxed text-sm">
              International Education Exchange is working with reputed colleges
              and universities in the UK in terms of resourcing right people for
              the right place locally and internationally.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-iee-accent transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Birmingham Office */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative">
              Birmingham Office
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-iee-accent rounded-full"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-iee-accent flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  Unit 101F The Argent Centre
                  <br />
                  60 Frederick Street
                  <br />
                  Birmingham B1 3HS
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-iee-accent flex-shrink-0" />
                <a
                  href="tel:+441212120868"
                  className="text-gray-300 hover:text-iee-accent transition-colors text-sm"
                >
                  +44 (0)121 212 0868
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-iee-accent flex-shrink-0" />
                <a
                  href="mailto:info@ieeuk.com"
                  className="text-gray-300 hover:text-iee-accent transition-colors text-sm"
                >
                  info@ieeuk.com
                </a>
              </div>
            </div>
          </div>

          {/* London Office */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative">
              London Office
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-iee-accent rounded-full"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-iee-accent flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  80-82 Nelson Street
                  <br />
                  E1 2DY London
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-iee-accent flex-shrink-0" />
                <div className="text-gray-300 text-sm space-y-1">
                  <div>
                    <a
                      href="tel:+441736523764"
                      className="hover:text-iee-accent transition-colors"
                    >
                      +44 (0)73 6523 3764
                    </a>
                  </div>
                  <div>
                    <a
                      href="tel:+441302089314"
                      className="hover:text-iee-accent transition-colors"
                    >
                      +44 (0)203 089 1314
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-iee-accent flex-shrink-0" />
                <a
                  href="mailto:info@ieeuk.com"
                  className="text-gray-300 hover:text-iee-accent transition-colors text-sm"
                >
                  info@ieeuk.com
                </a>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 relative">
              Useful Links
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-iee-accent rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-iee-accent transition-colors duration-200 flex items-center group text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-iee-accent transition-colors duration-200 flex items-center group text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm flex items-center">
              © {new Date().getFullYear()} All Rights Reserved By IEE{" "}
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-iee-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-400 hover:text-iee-accent transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-policy"
                className="text-gray-400 hover:text-iee-accent transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
