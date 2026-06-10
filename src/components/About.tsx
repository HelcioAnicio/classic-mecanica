import Image from "next/image";
import DiagonalDivider from "./DiagonalDivider";
import { FaCheckCircle } from "react-icons/fa";

const HIGHLIGHTS = [
  "Equipe técnica especializada e certificada",
  "Equipamentos de diagnóstico de última geração",
  "Garantia em todos os serviços realizados",
  "Atendimento transparente em cada etapa",
  "Peças originais e de procedência garantida",
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative bg-navy pt-28 pb-32 overflow-hidden"
      aria-labelledby="sobre-heading"
    >
      <div className="max-w-[1280px] mx-auto px-4 xl:px-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-10 h-1 bg-fire shrink-0" aria-hidden="true" />
              <span className="text-fire font-display font-semibold tracking-[0.2em] text-xs uppercase">
                Nossa história
              </span>
            </div>

            <h2
              id="sobre-heading"
              className="font-display font-extrabold text-4xl sm:text-5xl xl:text-6xl uppercase leading-none text-white mb-6"
              aria-label="40 Anos de Excelência"
            >
              <span aria-hidden="true">
                40 ANOS DE
                <br />
                <span className="text-fire">EXCELÊNCIA</span>
              </span>
            </h2>

            <p className="text-white/70 text-base leading-relaxed mb-4">
              Desde 1985, a Classic Mecânica é referência em serviços automotivos
              de alto padrão em Caxias do Sul e região. Combinamos décadas de
              experiência com tecnologia moderna para entregar resultados que
              superam as expectativas.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              Nosso compromisso é simples: tratar cada veículo como se fosse o
              nosso próprio, com precisão, cuidado e total transparência.
            </p>

            <ul className="flex flex-col gap-3" aria-label="Diferenciais">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <FaCheckCircle
                    className="text-fire text-base mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-80 lg:h-[520px]">
            <Image
              src="/images/team.jpg"
              alt="Mecânico especializado trabalhando em veículo na Classic Mecânica"
              fill
              quality={80}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute -left-3 top-8 bottom-8 w-1 bg-fire"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <DiagonalDivider position="top" fill="#0C0D14" />
      <DiagonalDivider position="bottom" fill="#0C0D14" />
    </section>
  );
}
