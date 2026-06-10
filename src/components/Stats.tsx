const STATS = [
  { value: "+40", label: "Anos de Experiência" },
  { value: "+5K", label: "Veículos Atendidos" },
  { value: "98%", label: "Clientes Satisfeitos" },
  { value: "6", label: "Especialidades" },
];

export default function Stats() {
  return (
    <section className="bg-dark py-20" aria-label="Números da Classic Mecânica">
      <div className="max-w-[1280px] mx-auto px-4 xl:px-0">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd
                className="font-display font-extrabold text-5xl lg:text-6xl xl:text-7xl text-fire leading-none mb-2"
                aria-label={`${stat.value} ${stat.label}`}
              >
                {stat.value}
              </dd>
              <p className="text-white/50 text-xs uppercase tracking-widest font-display leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
