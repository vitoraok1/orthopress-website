import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import Logo from '../assets/images/logo1.svg';
import { clinic, specialties } from '../data/content';

export function Footer() {
  return (
    <footer className="bg-brand-950 text-blue-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={Logo} alt="Orthopress Odontologia" className="h-12 w-auto" />
          <p className="mt-4 text-sm leading-relaxed text-blue-200">
            {clinic.slogan}. Clínica odontológica em {clinic.city}.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={clinic.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
            >
              <FaFacebookF />
            </a>
            <a
              href={clinic.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
            >
              <FaInstagram />
            </a>
            <a
              href={clinic.social.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-display text-lg font-semibold text-white">Navegação</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="transition hover:text-white">
                Início
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="transition hover:text-white">
                Sobre nós
              </Link>
            </li>
            {specialties.map((s) => (
              <li key={s.slug}>
                <Link to={`/${s.slug}`} className="transition hover:text-white">
                  {s.heroTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-lg font-semibold text-white">Precisa de ajuda?</h4>
          <a
            href={clinic.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-accent-100"
          >
            <FaWhatsapp className="text-lg text-[#25d366]" />
            {clinic.phone}
          </a>
          <p className="mt-1 text-sm">Fixo: {clinic.landline}</p>
          <ul className="mt-4 space-y-1 text-sm text-blue-200">
            {clinic.hours.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-lg font-semibold text-white">Endereço</h4>
          <p className="flex items-start gap-2 text-sm leading-relaxed text-blue-200">
            <FaMapMarkerAlt className="mt-1 shrink-0 text-accent-400" />
            <span>
              {clinic.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </span>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-blue-300">
        © {new Date().getFullYear()} {clinic.name} — Todos os direitos reservados.
      </div>
    </footer>
  );
}
