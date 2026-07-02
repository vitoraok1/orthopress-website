import { FaWhatsapp } from 'react-icons/fa';
import { clinic } from '../data/content';

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
}

export function CtaBanner({
  title = 'Pronto para transformar o seu sorriso?',
  subtitle = 'Agende sua avaliação inicial com a Dra. Priscila Ferraz Fuzimoto',
}: CtaBannerProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="hero-gradient relative overflow-hidden rounded-3xl px-6 py-14 text-center shadow-xl sm:px-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-white/5" />
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">{subtitle}</p>
        <a
          href={clinic.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-900 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <FaWhatsapp className="text-xl text-[#25d366]" />
          Agende sua avaliação
        </a>
      </div>
    </section>
  );
}
