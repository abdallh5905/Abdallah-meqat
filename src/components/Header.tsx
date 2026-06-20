import { useState } from "react";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "باقاتنا", href: "#packages" },
    { name: "لماذا نحن", href: "#why-us" },
    { name: "أسطولنا", href: "#fleet" },
    { name: "فنادقنا", href: "#hotels" },
    { name: "مقارنة الباقات", href: "#comparison" },
    { name: "الأسئلة الشائعة", href: "#faqs" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0c0c0ea0] backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Toggle Menu Button for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 mr-[-8px] text-zinc-400 hover:text-white hover:bg-zinc-850 rounded-full transition-colors focus:outline-none"
            id="mobile-menu-btn"
            aria-label="القائمة"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Navigation Links - Desktop Only */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-zinc-300 hover:text-gold-300 font-medium text-sm transition-colors duration-200"
              id={`nav-${link.href.replace('#', '')}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Call to action button desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:0565664984"
            className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-sm px-4 py-2.5 rounded-full border border-zinc-700/50 transition-all"
            id="header-call-btn"
          >
            <Phone className="w-4 h-4 text-gold-300" />
            <span>0565664984</span>
          </a>
          <a
            href="#booking-section"
            className="bg-gradient-to-r from-gold-500 to-gold-400 hover:brightness-110 text-zinc-950 font-bold text-sm px-5 py-2.5 rounded-full shadow-lg shadow-gold-500/10 transition-all duration-200"
            id="header-booking-btn"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("booking-section")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            احجز الآن
          </a>
        </div>

        {/* Brand/Logo on the right exactly like screenshot */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center justify-end gap-2 leading-none">
              <span>الميقات للعمرة</span>
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-gold-400 fill-current shrink-0"
                id="logo-star-svg"
              >
                {/* 4 point star from screenshot */}
                <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
              </svg>
            </h1>
            <p className="text-[10px] sm:text-[11px] text-zinc-400 font-medium mt-1">
              حملات عمرة من الرياض
            </p>
          </div>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-zinc-800 bg-[#0c0c0e] overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="block px-3 py-3 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800/40 text-[15px] font-medium transition-all"
                  id={`mobile-nav-${link.href.replace('#', '')}`}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-4 grid grid-cols-2 gap-3">
                <a
                  href="tel:0565664984"
                  className="flex items-center justify-center gap-2 bg-zinc-800/80 hover:bg-zinc-700/80 text-white font-semibold py-3 rounded-xl border border-zinc-700/30 text-sm transition-all"
                  id="mobile-drawer-call-btn"
                >
                  <Phone className="w-4 h-4 text-gold-300" />
                  <span>اتصال مباشر</span>
                </a>
                <a
                  href="https://wa.me/966565664984"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 text-zinc-950 font-bold py-3 rounded-xl shadow-md text-sm transition-all"
                  id="mobile-drawer-whatsapp-btn"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>حجز سريع</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
