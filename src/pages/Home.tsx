import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import { clinic, images, treatments } from '../data/content';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { ContactSection } from '../components/ContactSection';
import { CtaBanner } from '../components/CtaBanner';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <header className="hero-gradient relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-96 w-96 rounded-full bg-accent-400/10" />
        <div className="mx-auto grid max-w-6xl items-end gap-8 px-4 pt-14 sm:px-6 lg:grid-cols-2 lg:pt-20">
          <Reveal className="pb-14 lg:pb-24">
            <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-accent-100">
              Clínica odontológica em {clinic.city}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Seu sorriso é <span className="text-accent-400">nossa paixão</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-blue-100">
              {clinic.sloganSub} Atendimento reservado, individualizado e de qualidade, com estrutura
              completa para cuidar de você.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={clinic.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 font-semibold text-brand-900 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <FaWhatsapp className="text-xl text-[#25d366]" />
                Agende sua avaliação
              </a>
              <a
                href="#tratamentos"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Nossos tratamentos
                <FaArrowRight className="text-sm" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={150} className="relative hidden justify-center lg:flex">
            <img
              src={images.pri}
              alt="Dra. Priscila Ferraz Fuzimoto"
              className="max-h-[540px] w-auto object-contain"
            />
          </Reveal>
        </div>
      </header>

      {/* Números */}
      <section className="relative z-10 mx-auto -mt-10 max-w-4xl px-4 sm:px-6">
        <div className="grid gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-xl sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-slate-100">
          {clinic.stats.map((stat) => (
            <div key={stat.label} className="px-4 text-center">
              <p className="font-display text-4xl font-semibold text-brand-900">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quem somos */}
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
              Uma estrutura completa para cuidar do seu sorriso
            </h2>
            <div className="mt-5 h-1 w-16 rounded-full bg-accent-400" />
            <p className="mt-6 text-lg leading-relaxed text-slate-600">{clinic.aboutShort}</p>
            <Link
              to="/sobre"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 font-semibold text-white shadow transition hover:-translate-y-0.5 hover:bg-brand-600"
            >
              Saiba mais
              <FaArrowRight className="text-sm" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Tratamentos */}
      <section id="tratamentos" className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Especialidades"
            title="Nossos tratamentos em destaque"
            subtitle="Encontre o sorriso dos seus sonhos. Saiba mais sobre nossos tratamentos especializados!"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {treatments.map((treatment, index) => (
              <Reveal key={treatment.title} delay={(index % 3) * 80}>
                <div className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="hero-gradient mb-5 flex h-14 w-14 items-center justify-center rounded-2xl p-3 shadow">
                    <img src={treatment.icon} alt="" className="h-full w-full object-contain" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-brand-900">
                    {treatment.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {treatment.content}
                  </p>
                  {treatment.link ? (
                    <Link
                      to={treatment.link}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition group-hover:gap-3"
                    >
                      Conhecer tratamento
                      <FaArrowRight className="text-xs" />
                    </Link>
                  ) : (
                    <a
                      href={clinic.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition group-hover:gap-3"
                    >
                      Agendar avaliação
                      <FaArrowRight className="text-xs" />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Convênios */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
              Convênios
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-brand-900 sm:text-4xl">
              Procurando atendimento pelo seu plano em Cianorte?
            </h2>
            <div className="mt-5 h-1 w-16 rounded-full bg-accent-400" />
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Atendemos os principais planos odontológicos da região. Fale conosco pelo WhatsApp e
              confirme a cobertura do seu convênio.
            </p>
            <a
              href={clinic.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-700 px-7 py-3.5 font-semibold text-white shadow transition hover:-translate-y-0.5 hover:bg-brand-600"
            >
              <FaWhatsapp className="text-xl" />
              Consultar meu plano
            </a>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid gap-3 sm:grid-cols-2">
              {clinic.insurances.map((plan) => (
                <div
                  key={plan}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
                >
                  <FaCheckCircle className="shrink-0 text-lg text-accent-300" />
                  <span className="font-medium text-slate-700">{plan}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Depoimentos (widget Elfsight) */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Depoimentos"
            title="O que dizem os nossos pacientes?"
            subtitle="Avaliações reais de quem já transformou o sorriso com a gente."
          />
          <div className="elfsight-app-275d62a2-ae48-4ea2-8091-4bb0e5c739c6" />
        </div>
      </section>

      <ContactSection />

      {/* Localização (widget Elfsight) */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Onde estamos"
            title="Localização"
            subtitle={clinic.address.join(' · ')}
          />
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <div className="elfsight-app-c05b6daa-cfd2-4b73-9758-00ed1deb0453" />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
