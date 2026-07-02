import { FaWhatsapp } from 'react-icons/fa';
import { clinic, type Specialty } from '../data/content';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { FaqAccordion } from '../components/FaqAccordion';
import { CtaBanner } from '../components/CtaBanner';

export default function Especialidade({ specialty }: { specialty: Specialty }) {
  return (
    <>
      {/* Hero */}
      <header className="hero-gradient relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-96 w-96 rounded-full bg-accent-400/10" />
        <div className="mx-auto grid max-w-6xl items-end gap-8 px-4 pt-14 sm:px-6 lg:grid-cols-2 lg:pt-16">
          <Reveal className="pb-14 lg:pb-20">
            <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-accent-100">
              {specialty.heroEyebrow}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {specialty.heroTitle}
            </h1>
            <p className="mt-5 max-w-xl font-display text-2xl leading-snug text-accent-100">
              {specialty.heroTagline}
            </p>
            <a
              href={clinic.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 font-semibold text-brand-900 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <FaWhatsapp className="text-xl text-[#25d366]" />
              Agende sua avaliação
            </a>
          </Reveal>
          <Reveal delay={150} className="relative hidden justify-center lg:flex">
            <img
              src={specialty.heroImage}
              alt="Dra. Priscila Ferraz Fuzimoto"
              className="max-h-[480px] w-auto object-contain"
            />
          </Reveal>
        </div>
      </header>

      {/* Seções descritivas (ex.: Implantodontia) */}
      {specialty.sections?.map((section, index) =>
        section.image ? (
          <section key={section.title} className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal className={index % 2 ? 'lg:order-2' : ''}>
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full rounded-3xl object-cover shadow-lg"
                />
              </Reveal>
              <Reveal delay={100}>
                <h2 className="font-display text-3xl font-semibold leading-tight text-brand-900 sm:text-4xl">
                  {section.title}
                </h2>
                <div className="mt-5 h-1 w-16 rounded-full bg-accent-400" />
                <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-slate-600">
                  {section.text}
                </p>
              </Reveal>
            </div>
          </section>
        ) : (
          <section
            key={section.title}
            className={index % 2 ? 'mx-auto max-w-6xl px-4 py-16 sm:px-6' : 'bg-slate-50 py-16'}
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <Reveal className="mx-auto max-w-3xl text-center">
                <h2 className="font-display text-3xl font-semibold leading-tight text-brand-900">
                  {section.title}
                </h2>
                <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-accent-400" />
                <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-slate-600">
                  {section.text}
                </p>
              </Reveal>
              {section.imageCards && (
                <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
                  {section.imageCards.map((card, cardIndex) => (
                    <Reveal key={cardIndex} delay={cardIndex * 80}>
                      <img
                        src={card}
                        alt={`Etapa ${cardIndex + 1} do implante dentário`}
                        loading="lazy"
                        className="w-full rounded-2xl shadow-sm"
                      />
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          </section>
        ),
      )}

      {/* Procedimentos */}
      {specialty.procedures.length > 0 && (
        <section className="bg-slate-50 py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading eyebrow="Procedimentos" title={specialty.proceduresTitle ?? ''} />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {specialty.procedures.map((procedure, index) => (
                <Reveal key={procedure.title} delay={(index % 3) * 80}>
                  <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <img
                      src={procedure.image}
                      alt={procedure.title}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-xl font-semibold text-brand-900">
                        {procedure.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                        {procedure.content}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {specialty.faq.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="Dúvidas frequentes"
            title="Principais dúvidas e queixas dos pacientes"
          />
          <FaqAccordion faq={specialty.faq} />
        </section>
      )}

      <CtaBanner
        title={`Agende sua avaliação de ${specialty.heroTitle}`}
        subtitle="Clique aqui para agendar sua avaliação inicial com a Dra. Priscila Ferraz Fuzimoto"
      />
    </>
  );
}
