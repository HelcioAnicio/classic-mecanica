import DiagonalDivider from "./DiagonalDivider";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Carlos Menezes",
    role: "Cliente há 8 anos",
    text: "Levei meu carro para pintura e fiquei impressionado com o resultado. Acabamento impecável, cor igualada perfeitamente. Serviço de altíssima qualidade!",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Cliente há 12 anos",
    text: "Já uso a Classic Mecânica há mais de uma década. Confiança, profissionalismo e honestidade em cada serviço. Indico para toda a família.",
    rating: 5,
  },
  {
    name: "Pedro Almeida",
    role: "Cliente há 3 anos",
    text: "A chapeação ficou perfeita, nem parece que bateu. Atendimento excelente, preço justo e entregaram no prazo combinado. Super recomendo!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative bg-surface pt-28 pb-32"
      aria-labelledby="depoimentos-heading"
    >
      <div className="max-w-[1280px] mx-auto px-4 xl:px-0">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-10 h-1 bg-fire shrink-0" aria-hidden="true" />
            <span className="text-fire font-display font-semibold tracking-[0.2em] text-xs uppercase">
              O que dizem de nós
            </span>
          </div>
          <h2
            id="depoimentos-heading"
            className="font-display font-extrabold text-4xl sm:text-5xl uppercase leading-none text-white"
          >
            DEPOIMENTOS
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <li key={t.name}>
              <figure className="bg-card border border-navy/40 p-6 flex flex-col gap-4 h-full">
                <FaQuoteLeft
                  className="text-fire/30 text-3xl"
                  aria-hidden="true"
                />
                <blockquote className="flex-1">
                  <p className="text-white/75 text-sm leading-relaxed">{t.text}</p>
                </blockquote>
                <figcaption className="flex items-center justify-between pt-2 border-t border-navy/20">
                  <div>
                    <cite className="not-italic text-white font-semibold text-sm leading-snug block">
                      {t.name}
                    </cite>
                    <span className="text-muted text-xs">{t.role}</span>
                  </div>
                  <div
                    className="flex gap-0.5"
                    aria-label={`${t.rating} de 5 estrelas`}
                    role="img"
                  >
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar key={i} className="text-fire text-xs" aria-hidden="true" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>

      <DiagonalDivider position="top" fill="#0C0D14" />
      <DiagonalDivider position="bottom" fill="#2C335A" />
    </section>
  );
}
