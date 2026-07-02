import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { clinic } from '../data/content';
import { SectionHeading } from './SectionHeading';

const inputClass =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState<Status>('idle');

  const canSubmit = Boolean(name && email && phone && message && agree) && status !== 'sending';

  function sendEmail(e: FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus('sending');
    emailjs
      .send(
        'service_h3xfsii',
        'template_bun8b8h',
        { from_name: name, message, email, phone },
        'XBVPKBTGkllKPh6zX',
      )
      .then(() => {
        setStatus('sent');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setAgree(false);
      })
      .catch(() => setStatus('error'));
  }

  return (
    <section id="contato" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Entre em contato"
          title="Agende sua consulta"
          subtitle="Preencha o formulário e nossa equipe retornará o mais breve possível."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <form
            onSubmit={sendEmail}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Digite seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Telefone
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="(44) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Digite sua mensagem"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <label className="mt-4 flex items-start gap-3 text-sm text-slate-600">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-brand-700"
              />
              <span>Concordo com as políticas de privacidade.</span>
            </label>

            <button
              type="submit"
              disabled={!canSubmit}
              className="mt-6 w-full rounded-full bg-brand-700 px-8 py-3.5 font-semibold text-white shadow transition enabled:hover:-translate-y-0.5 enabled:hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
            >
              {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
            </button>

            {status === 'sent' && (
              <p className="mt-4 text-sm font-medium text-green-600" role="status">
                Mensagem enviada com sucesso! Em breve entraremos em contato.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-sm font-medium text-red-600" role="alert">
                Não foi possível enviar a mensagem. Tente novamente ou fale conosco pelo WhatsApp.
              </p>
            )}
          </form>

          <div className="hero-gradient flex flex-col justify-between gap-8 rounded-3xl p-8 text-white shadow-lg lg:col-span-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-lg">
                  <FaPhoneAlt />
                </span>
                <div>
                  <p className="font-semibold">Telefones</p>
                  <p className="mt-1 text-sm text-blue-100">
                    {clinic.phone} (WhatsApp)
                    <br />
                    {clinic.landline}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-lg">
                  <FaClock />
                </span>
                <div>
                  <p className="font-semibold">Horário de atendimento</p>
                  <p className="mt-1 text-sm text-blue-100">
                    {clinic.hours.map((h) => (
                      <span key={h} className="block">
                        {h}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-lg">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <p className="font-semibold">Endereço</p>
                  <p className="mt-1 text-sm text-blue-100">
                    {clinic.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            <a
              href={clinic.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 font-semibold text-brand-900 shadow transition hover:-translate-y-0.5"
            >
              <FaWhatsapp className="text-xl text-[#25d366]" />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
