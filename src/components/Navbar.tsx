import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaChevronDown, FaTimes, FaWhatsapp } from 'react-icons/fa';
import Logo from '../assets/images/logo1.svg';
import { clinic, specialties } from '../data/content';

const baseLink =
  'rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const specialtyActive = specialties.some((s) => pathname === `/${s.slug}`);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `${baseLink} ${isActive ? 'bg-white/15 text-white' : 'text-blue-100'}`;

  return (
    <nav className="sticky top-0 z-40 bg-brand-900/95 shadow-lg backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" aria-label="Orthopress Odontologia — Início" onClick={() => setMobileOpen(false)}>
          <img src={Logo} alt="Orthopress Odontologia" className="h-12 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          <NavLink to="/" end className={linkClass}>
            Início
          </NavLink>
          <NavLink to="/sobre" className={linkClass}>
            Sobre
          </NavLink>

          <div className="group relative">
            <button
              type="button"
              className={`${baseLink} flex items-center gap-2 ${
                specialtyActive ? 'bg-white/15 text-white' : 'text-blue-100'
              }`}
            >
              Especialidades
              <FaChevronDown className="text-[10px] transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-full w-56 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-2xl bg-white py-2 shadow-xl ring-1 ring-slate-200">
                {specialties.map((s) => (
                  <NavLink
                    key={s.slug}
                    to={`/${s.slug}`}
                    className={({ isActive }) =>
                      `block px-5 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-brand-700'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-brand-700'
                      }`
                    }
                  >
                    {s.heroTitle}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <a
            href={clinic.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-900 shadow transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <FaWhatsapp className="text-[#25d366]" />
            Agende sua avaliação
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          className="rounded-lg p-2 text-2xl text-white lg:hidden"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-brand-900 px-4 pb-6 pt-2 lg:hidden">
          <NavLink
            to="/"
            end
            onClick={() => setMobileOpen(false)}
            className="block rounded-lg px-4 py-3 font-medium text-blue-100 hover:bg-white/10"
          >
            Início
          </NavLink>
          <NavLink
            to="/sobre"
            onClick={() => setMobileOpen(false)}
            className="block rounded-lg px-4 py-3 font-medium text-blue-100 hover:bg-white/10"
          >
            Sobre
          </NavLink>
          <p className="px-4 pb-1 pt-4 text-xs font-semibold uppercase tracking-widest text-blue-300">
            Especialidades
          </p>
          {specialties.map((s) => (
            <NavLink
              key={s.slug}
              to={`/${s.slug}`}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-4 py-3 font-medium text-blue-100 hover:bg-white/10"
            >
              {s.heroTitle}
            </NavLink>
          ))}
          <a
            href={clinic.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-brand-900"
          >
            <FaWhatsapp className="text-[#25d366]" />
            Agende sua avaliação
          </a>
        </div>
      )}
    </nav>
  );
}
