"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";

const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-dark/90 backdrop-blur-sm border-b border-navy/30">
      <div className="max-w-[1280px] mx-auto px-4 xl:px-0">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Classic Mecânica — página inicial"
          >
            <Image
              src="/images/logo.png"
              alt="Classic Mecânica"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/75 hover:text-white transition-colors uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:+5554333333333"
            className="hidden md:flex items-center gap-2 bg-navy hover:bg-navy-light text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
          >
            <FaPhone className="text-xs" aria-hidden="true" />
            (54) 3333-3333
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white/75 hover:text-white transition-colors"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? (
              <FaTimes className="text-xl" aria-hidden="true" />
            ) : (
              <FaBars className="text-xl" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="md:hidden bg-surface border-t border-navy/30"
          aria-label="Menu mobile"
        >
          <div className="max-w-[1280px] mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white/75 hover:text-white py-3 text-sm font-medium uppercase tracking-wide transition-colors border-b border-navy/20 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+5554333333333"
              className="flex items-center gap-2 text-fire font-semibold text-sm mt-3 pt-3"
            >
              <FaPhone className="text-xs" aria-hidden="true" />
              (54) 3333-3333
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
