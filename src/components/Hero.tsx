import Image from 'next/image';
import DiagonalDivider from './DiagonalDivider';
import { FaWhatsapp, FaChevronDown } from 'react-icons/fa';

const WA_HREF =
  'https://wa.me/5554999999999?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.';

export default function Hero() {
  return (
    <section
      id='inicio'
      className='relative min-h-screen flex items-center overflow-hidden'
      aria-label='Seção principal'>
      {/* Imagem de fundo via next/image — nunca CSS background-image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/background.jpg'
          alt=''
          fill
          priority
          quality={85}
          className='object-cover object-top'
          sizes='100vw'
        />
        {/* Overlay sólido escuro — sem gradiente para evitar artefatos visuais */}
        <div
          className='absolute inset-0 bg-dark/80'
          aria-hidden='true'
        />
        {/* Vinheta sutil nas bordas */}
        <div
          className='absolute inset-0'
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 40%, rgba(12,13,20,0.7) 100%)',
          }}
          aria-hidden='true'
        />
      </div>

      {/* Conteúdo — z-10 garante que fica acima da imagem */}
      <div className='relative z-10 w-full max-w-[1280px] mx-auto px-4 xl:px-0 pt-24 pb-32'>
        <div className='max-w-2xl'>
          <div className='flex items-center gap-3 mb-6'>
            <span
              className='block w-12 h-1 bg-fire shrink-0'
              aria-hidden='true'
            />
            <span className='text-fire font-display font-semibold tracking-[0.2em] text-xs uppercase'>
              Oficina · Caxias do Sul · Desde 1985
            </span>
          </div>

          <h1
            className='font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl uppercase leading-none tracking-tight text-white mb-6'
            aria-label='Força e Precisão em Cada Serviço'>
            <span aria-hidden='true'>
              FORÇA E PRECISÃO
              <br />
              EM <span className='text-fire'>CADA </span>
              {/* <br /> */}
              SERVIÇO.
            </span>
          </h1>

          <p className='text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-md'>
            Mecânica, funilaria, pintura e estética automotiva com a experiência
            de quase 40 anos. Seu carro tratado com a potência que ele merece.
          </p>

          <div className='flex flex-wrap gap-4'>
            <a
              href={WA_HREF}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 bg-fire hover:bg-fire-dark text-white font-display font-bold text-sm uppercase tracking-wider px-6 py-4 transition-colors duration-200'
              aria-label='Solicitar orçamento pelo WhatsApp'>
              <FaWhatsapp
                className='text-lg'
                aria-hidden='true'
              />
              Fazer Orçamento
            </a>
            <a
              href='#servicos'
              className='border-2 border-white/40 text-white font-display font-bold text-sm uppercase tracking-wider px-6 py-4 hover:border-white hover:bg-white/10 transition-all duration-200'>
              Ver Serviços
            </a>
          </div>
        </div>
      </div>

      <div
        className='absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30'
        aria-hidden='true'>
        <span className='text-xs uppercase tracking-widest font-display'>
          Rolar
        </span>
        <FaChevronDown className='animate-bounce text-sm' />
      </div>

      <DiagonalDivider
        position='bottom'
        fill='#13152A'
      />
    </section>
  );
}
