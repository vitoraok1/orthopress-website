import { FaWhatsapp } from 'react-icons/fa';
import { clinic } from '../data/content';

export function WhatsappButton() {
  return (
    <a
      href={clinic.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-3xl text-white shadow-lg transition-transform hover:scale-110"
    >
      <FaWhatsapp />
    </a>
  );
}
