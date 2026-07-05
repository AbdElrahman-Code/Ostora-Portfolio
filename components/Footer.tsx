import { Linkedin, Mail, Phone, MessageCircle } from "lucide-react";
import VisitorBadge from "./VisitorBadge";

export default function Footer() {
  return (
    <footer className="border-t border-token">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display font-semibold">Abdelrahman Yousry Abdelaziz</p>
          <p className="text-muted text-xs mt-1">Full Stack Developer & AI Engineer</p>
        </div>

        <VisitorBadge />

        <div className="flex items-center gap-4">
          <a
            href="mailto:abdelrahman1703485@miuegypt.edu.eg"
            aria-label="Email"
            className="text-muted hover:text-signal-cyan transition-colors"
          >
            <Mail size={18} />
          </a>
          <a
            href="tel:+201098769888"
            aria-label="Call"
            className="text-muted hover:text-signal-cyan transition-colors"
          >
            <Phone size={18} />
          </a>
          <a
            href="https://wa.me/201098769888"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-muted hover:text-signal-cyan transition-colors"
          >
            <MessageCircle size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/abdelrahman-yousry-230768312/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-signal-cyan transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
      <div className="text-center text-muted text-xs pb-8 font-mono">
        © {new Date().getFullYear()} Abdelrahman Yousry — built with Next.js, Tailwind & framer-motion.
      </div>
    </footer>
  );
}