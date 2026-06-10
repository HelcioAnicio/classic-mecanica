import DiagonalDivider from "./DiagonalDivider";
import { FaWrench, FaPaintBrush, FaLightbulb, FaCogs, FaBolt, FaStar } from "react-icons/fa";
import type { IconType } from "react-icons";

type Service = {
  icon: IconType;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: FaWrench,
    title: "Chapeação",
    description:
      "Reparos estruturais e estéticos com precisão milimétrica. Devolvemos a forma original do seu veículo.",
  },
  {
    icon: FaPaintBrush,
    title: "Pintura Automotiva",
    description:
      "Acabamento perfeito com tintas premium e tintometria digital. Igualamos qualquer cor.",
  },
  {
    icon: FaLightbulb,
    title: "Faróis e Lanternas",
    description:
      "Recuperação e instalação de sistemas de iluminação. Visibilidade e segurança garantidas.",
  },
  {
    icon: FaCogs,
    title: "Peças e Acessórios",
    description:
      "Peças originais e de alta procedência. Sourcing especializado para todas as marcas.",
  },
  {
    icon: FaBolt,
    title: "Instalação Elétrica",
    description:
      "Diagnóstico e instalação de sistemas elétricos automotivos com equipamentos modernos.",
  },
  {
    icon: FaStar,
    title: "Polimento e Vitrificação",
    description:
      "Proteção e brilho duradouro. Tratamentos profissionais que preservam o valor do veículo.",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative bg-surface pt-24 pb-32"
      aria-labelledby="servicos-heading"
    >
      <div className="max-w-[1280px] mx-auto px-4 xl:px-0">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-10 h-1 bg-fire shrink-0" aria-hidden="true" />
            <span className="text-fire font-display font-semibold tracking-[0.2em] text-xs uppercase">
              O que fazemos
            </span>
          </div>
          <h2
            id="servicos-heading"
            className="font-display font-extrabold text-4xl sm:text-5xl xl:text-6xl uppercase leading-none text-white"
            aria-label="Nossos Serviços"
          >
            <span aria-hidden="true">
              NOSSOS
              <br />
              <span className="text-fire">SERVIÇOS</span>
            </span>
          </h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <li key={service.title}>
                <article className="bg-card border border-navy/40 p-6 hover:border-fire/50 hover:bg-navy transition-all duration-300 group h-full">
                  <div
                    className="w-12 h-12 bg-fire/10 flex items-center justify-center mb-4 group-hover:bg-fire/20 transition-colors"
                    aria-hidden="true"
                  >
                    <Icon className="text-fire text-xl" />
                  </div>
                  <h3 className="font-display font-bold text-lg uppercase tracking-wide text-white mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>

      <DiagonalDivider position="top" fill="#0C0D14" />
      <DiagonalDivider position="bottom" fill="#0C0D14" />
    </section>
  );
}
