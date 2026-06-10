import Image from "next/image";
import { FaInstagram, FaFacebook, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

const SERVICES = [
  "Chapeação",
  "Pintura Automotiva",
  "Faróis e Lanternas",
  "Peças e Acessórios",
  "Instalação Elétrica",
  "Polimento e Vitrificação",
];

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-navy/30" role="contentinfo">
      <div className="max-w-[1280px] mx-auto px-4 xl:px-0 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="Classic Mecânica"
                width={140}
                height={42}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Referência em serviços automotivos de alto padrão em Caxias do Sul.
              Qualidade e confiança desde 1985.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/classicmecanica"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-fire transition-colors"
                aria-label="Instagram da Classic Mecânica"
              >
                <FaInstagram className="text-xl" aria-hidden="true" />
              </a>
              <a
                href="https://facebook.com/classicmecanica"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-fire transition-colors"
                aria-label="Facebook da Classic Mecânica"
              >
                <FaFacebook className="text-xl" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/5554999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-fire transition-colors"
                aria-label="WhatsApp da Classic Mecânica"
              >
                <FaWhatsapp className="text-xl" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Serviços">
            <h2 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-6">
              Serviços
            </h2>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="text-muted text-sm hover:text-white transition-colors leading-snug"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic">
            <h2 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-6">
              Contato
            </h2>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-fire text-sm mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-muted text-sm leading-relaxed">
                  Caxias do Sul, RS — Brasil
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-fire text-xs shrink-0" aria-hidden="true" />
                <a
                  href="tel:+5554333333333"
                  className="text-muted text-sm hover:text-white transition-colors"
                >
                  (54) 3333-3333
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaClock className="text-fire text-sm mt-0.5 shrink-0" aria-hidden="true" />
                <div className="text-muted text-sm leading-relaxed">
                  <p>Seg–Sex: 08h às 18h</p>
                  <p>Sáb: 08h às 12h</p>
                </div>
              </li>
            </ul>
          </address>
        </div>
      </div>

      <div className="border-t border-navy/20">
        <div className="max-w-[1280px] mx-auto px-4 xl:px-0 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} Classic Mecânica. Todos os direitos reservados.
          </p>
          <p className="text-muted text-xs">Caxias do Sul, RS — Desde 1985</p>
        </div>
      </div>
    </footer>
  );
}
