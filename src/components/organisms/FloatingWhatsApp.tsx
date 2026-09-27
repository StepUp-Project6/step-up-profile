import { useLocation } from "react-router-dom";
import whatsappIcon from "@/assets/others/whatsapp.png";

const WHATSAPP_NUMBER = "6282262191159";
const WHATSAPP_MESSAGE = "Halo Step Up Project, saya ingin bertanya.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const FloatingWhatsApp = () => {
  const { pathname } = useLocation();

  if (pathname === "/hubungi-kami") return null;

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      title="Chat WhatsApp"
      className="fixed right-6 bottom-10 md:bottom-12 z-50 h-14 w-14 rounded-full bg-white shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        draggable={false}
        className="h-full w-full rounded-full object-contain"
      />
    </a>
  );
};

export default FloatingWhatsApp;
