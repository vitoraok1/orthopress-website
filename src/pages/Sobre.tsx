import { FaGraduationCap } from 'react-icons/fa';
import { clinic, doctor, galleryImages, images, missionCards } from '../data/content';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { CtaBanner } from '../components/CtaBanner';

export default function Sobre() {
  return (
    <>
      {/* Hero */}
      <header className="hero-gradient relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-accent-400/10" />
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:py-28">
          <Reveal>
            <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-accent-100">
              Sobre nós
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Sua jornada em busca do <span className="text-accent-400">sorriso perfeito</span>{' '}
              começa aqui!
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">
              {clinic.aboutShort}
            </p>
          </Reveal>
        </div>
      </header>

      {/* Quem somos + números */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={images.fachada}
              alt="Fachada da clínica Orthopress em Cianorte"
              className="w-full"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
              Quem somos
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-brand-900 sm:text-4xl">
              Atendimento reservado, individualizado e de qualidade
            </h2>
            <div className="mt-5 h-1 w-16 rounded-full bg-accent-400" />
            <p className="mt-6 text-lg leading-relaxed text-slate-600">{clinic.aboutShort}</p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {clinic.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
                >
                  <p className="font-display text-2xl font-semibold text-brand-900 sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Responsável técnica */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Responsável técnica" title={doctor.name} subtitle={doctor.role} />
          <div className="grid items-start gap-12 lg:grid-cols-5">
            <Reveal className="lg:col-span-2">
              <img
                src={doctor.photo}
                alt={doctor.name}
                className="mx-auto max-h-[560px] w-auto object-contain"
              />
              <p className="mt-4 text-center text-sm font-medium text-slate-500">
                {doctor.subtitle}
              </p>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-3">
              <h3 className="font-display text-2xl font-semibold text-brand-900">
                Formação e especializações
              </h3>
              <ul className="mt-6 space-y-4">
                {doctor.credentials.map((credential) => (
                  <li
                    key={credential.title}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <span className="hero-gradient flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white">
                      <FaGraduationCap />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-800">{credential.title}</p>
                      <p className="mt-0.5 text-sm text-slate-500">{credential.place}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Nossa história */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="hero-gradient relative overflow-hidden rounded-3xl px-6 py-14 sm:px-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-100">
            Nossa história
          </p>
          <blockquote className="max-w-3xl">
            <p className="font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
              “{doctor.story[0]}”
            </p>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-blue-100">
              {doctor.story.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <footer className="mt-8 font-semibold text-white">— {doctor.name}</footer>
          </blockquote>
        </div>
      </section>

      {/* Galeria */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Nossa estrutura"
            title="Galeria"
            subtitle="Conheça os ambientes da clínica."
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <Reveal key={index} delay={(index % 4) * 60}>
                <img
                  src={image}
                  alt={`Ambiente da clínica Orthopress ${index + 1}`}
                  loading="lazy"
                  className="aspect-square w-full rounded-2xl object-cover shadow-sm transition hover:scale-[1.02] hover:shadow-md"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading eyebrow="Nossos princípios" title="Missão, Visão e Valores" />
        <div className="grid gap-6 md:grid-cols-3">
          {missionCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 100}>
              <div className="flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="hero-gradient mb-5 flex h-16 w-16 items-center justify-center rounded-2xl p-3.5 shadow">
                  <img src={card.icon} alt="" className="h-full w-full object-contain" />
                </div>
                <h3 className="font-display text-xl font-semibold text-brand-900">{card.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{card.content}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
