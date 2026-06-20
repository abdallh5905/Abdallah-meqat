import { MessageSquare, PhoneCall } from "lucide-react";
import { motion } from "motion/react";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 left-6 z-45 flex flex-col gap-3 items-center">
      
      {/* Call Floating button */}
      <motion.a
        href="tel:0565664984"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="w-12 h-12 rounded-full bg-zinc-900 hover:bg-zinc-800 text-gold-300 border border-zinc-800 flex items-center justify-center shadow-2xl relative group transition-colors"
        id="floating-phone-btn"
        title="اتصل بنا"
      >
        <PhoneCall className="w-4.5 h-4.5" />
        
        {/* Tooltip */}
        <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-zinc-950 text-xs text-white font-bold px-3 py-1.5 rounded-lg border border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          طلب اتصال مباشر
        </span>
      </motion.a>

      {/* WhatsApp Floating button */}
      <motion.a
        href="https://wa.me/966565664984?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D9%88%20%D8%A3%D8%B1%D9%8A%D8%AF%2520%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AD%D9%85%D9%84%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D8%A9"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.3 }}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 flex items-center justify-center shadow-2xl relative group transition-colors focus:outline-none"
        id="floating-whatsapp-btn"
      >
        {/* Pulsing visual glow rings */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping -z-10" />

        <MessageSquare className="w-6 h-6 fill-zinc-950 stroke-zinc-950" />

        {/* Tooltip / Speech bubble */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-zinc-950 text-xs text-emerald-400 font-bold px-3.5 py-2 rounded-lg border border-zinc-850 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          راسلنا واتساب الآن
        </span>
      </motion.a>

    </div>
  );
}
