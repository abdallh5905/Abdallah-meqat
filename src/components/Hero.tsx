import { MessageSquare, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(12, 12, 14, 0.75), rgba(12, 12, 14, 0.95)), url('https://images.unsplash.com/photo-1591604122444-3c60f1ca816a?auto=format&fit=crop&q=80&w=1600')`,
      }}
    >
      {/* Decorative Gold Radial Light */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gold-500/10 blur-[130px] rounded-full pointer-events-none z-0" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        
        {/* Outlined Pill Badge from Screenshot 1 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold-400/30 bg-gold-400/5 text-gold-300 text-sm font-medium mb-8 select-none"
          id="hero-badge"
        >
          <span className="text-xs">✨</span>
          <span>انطلاق شبه يومي من الرياض</span>
        </motion.div>

        {/* Hero Headline from Screenshot 1 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight sm:leading-tight md:leading-tight mb-6 max-w-3xl"
          id="hero-heading"
        >
          حملات عمرة <span className="text-transparent bg-clip-text bg-gradient-to-l from-gold-300 via-gold-400 to-amber-200">من الرياض</span>
          <br />
          براحة تليق برحلتك
        </motion.h2>

        {/* Paragraph text from Screenshot 1 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-zinc-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
          id="hero-subheading"
        >
          رحلات عمرة منظمة من الرياض إلى مكة المكرمة والمدينة المنورة، بباصات حديثة موديل 2027 وفنادق مختارة بعناية – باقات تناسب الأفراد والعائلات، شاملة النقل والسكن.
        </motion.p>

        {/* Action Buttons from Screenshot 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          {/* Main Filled Gold Button */}
          <a
            href="https://wa.me/966565664984?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D9%88%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D9%85%D8%B9%D8%B1%D9%81%D8%A9%20%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D8%B1%D8%AD%D9%84%D8%A7%D8%AA%2520%D8%A7%D9%84%D8%B9%D9%85%D8%B1%D8%A9"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-gold-500 via-gold-400 to-amber-300 text-zinc-950 font-bold px-8 py-4.5 rounded-full shadow-lg shadow-gold-500/20 hover:brightness-110 active:scale-95 transition-all text-base sm:text-lg"
            id="hero-whatsapp-btn"
          >
            <MessageSquare className="w-5 h-5 shrink-0" />
            <span>احجز الآن عبر واتساب</span>
          </a>

          {/* Outline Explore Button */}
          <button
            onClick={() => handleScrollTo("packages")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/40 text-zinc-300 font-semibold px-8 py-4.5 rounded-full transition-all text-base"
            id="hero-explore-btn"
          >
            <span>استكشف الباقات</span>
            <ChevronDown className="w-4 h-4 text-zinc-400 animate-bounce" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
