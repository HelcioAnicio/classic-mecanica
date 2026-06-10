import Image from "next/image";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
    alt: "Carro esportivo clássico — trabalho de pintura na Classic Mecânica",
  },
  {
    src: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    alt: "Automóvel de alta performance — serviço especializado",
  },
  {
    src: "https://images.unsplash.com/photo-1583121274602-3e2820c69888",
    alt: "Veículo em acabamento — chapeação e pintura",
  },
  {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
    alt: "Carro de luxo polido — polimento e vitrificação",
  },
  {
    src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
    alt: "Supercarro — resultado de pintura profissional",
  },
  {
    src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
    alt: "Automóvel em detalhe — qualidade Classic Mecânica",
  },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="bg-dark py-20 overflow-hidden"
      aria-labelledby="galeria-heading"
    >
      <div className="max-w-[1280px] mx-auto px-4 xl:px-0 mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-10 h-1 bg-fire shrink-0" aria-hidden="true" />
          <span className="text-fire font-display font-semibold tracking-[0.2em] text-xs uppercase">
            Nosso trabalho
          </span>
        </div>
        <div className="flex items-end justify-between">
          <h2
            id="galeria-heading"
            className="font-display font-extrabold text-4xl sm:text-5xl uppercase leading-none text-white"
          >
            GALERIA
          </h2>
          <p
            className="text-muted text-xs uppercase tracking-widest hidden sm:block"
            aria-label="Role horizontalmente para ver mais imagens"
          >
            ← Role para ver →
          </p>
        </div>
      </div>

      <div
        className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{
          paddingLeft: "max(1rem, calc((100vw - 1280px) / 2))",
          paddingRight: "1rem",
        }}
        aria-label="Galeria de trabalhos realizados"
        role="region"
        tabIndex={0}
      >
        <ul className="flex gap-4 pb-2">
          {IMAGES.map((img) => (
            <li
              key={img.src}
              className="flex-shrink-0 snap-start relative w-72 sm:w-80 h-52 sm:h-60 overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                quality={75}
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="320px"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
