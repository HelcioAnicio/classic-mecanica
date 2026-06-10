import { FaWhatsapp, FaPhone } from "react-icons/fa";

const WA_HREF =
  "https://wa.me/5554999999999?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

export default function CTA() {
  return (
    <section
      id="contato"
      className="bg-navy py-24"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-[1280px] mx-auto px-4 xl:px-0 text-center">
        <div className="flex items-center justify-center gap-3 mb-6" aria-hidden="true">
          <span className="block w-10 h-1 bg-fire" />
          <span className="text-fire font-display font-semibold tracking-[0.2em] text-xs uppercase">
            Fale conosco
          </span>
          <span className="block w-10 h-1 bg-fire" />
        </div>

        <h2
          id="cta-heading"
          className="font-display font-extrabold text-4xl sm:text-5xl xl:text-6xl uppercase leading-none text-white mb-4"
          aria-label="Pronto para cuidar do seu veículo?"
        >
          <span aria-hidden="true">
            PRONTO PARA
            <br />
            <span className="text-fire">CUIDAR DO SEU</span>
            <br />
            VEÍCULO?
          </span>
        </h2>

        <p className="text-white/65 text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Entre em contato e receba um orçamento gratuito. Nossa equipe está
          pronta para atender você com a excelência da Classic Mecânica há
          40 anos.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1da851] text-white font-display font-bold text-sm uppercase tracking-wider px-8 py-4 transition-colors duration-200"
            aria-label="Solicitar orçamento pelo WhatsApp"
          >
            <FaWhatsapp className="text-xl" aria-hidden="true" />
            Orçamento pelo WhatsApp
          </a>
          <a
            href="tel:+5554333333333"
            className="flex items-center gap-3 border-2 border-white/40 text-white font-display font-bold text-sm uppercase tracking-wider px-8 py-4 hover:border-white hover:bg-white/10 transition-all duration-200"
            aria-label="Ligar para Classic Mecânica"
          >
            <FaPhone className="text-sm" aria-hidden="true" />
            (54) 3333-3333
          </a>
        </div>
      </div>
    </section>
  );
}
