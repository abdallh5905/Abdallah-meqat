import { MapPin, Calendar, Bus, Users, Building, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function FeatureGrid() {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-gold-300" />,
      title: "انطلاق شبه يومي",
      description: "رحلات منتظمة ومستمرة من الرياض إلى مكة المكرمة والمدينة المنورة لتناسب أي جدول.",
    },
    {
      icon: <Bus className="w-8 h-8 text-gold-300" />,
      title: "باصات موديل 2027",
      description: "أسطول من الباصات الحديثة والمريحة المزودة بأحدث وسائل الراحة للمسافات الطويلة.",
    },
    {
      icon: <Users className="w-8 h-8 text-gold-300" />,
      title: "للأفراد والعائلات",
      description: "ترتيبات خاصة لجميع الحجاج مع إمكانية توفير غرف عائلية مستقلة أو أسرة مشتركة.",
    },
    {
      icon: <Building className="w-8 h-8 text-gold-300" />,
      title: "شامل السكن",
      description: "إقامات فندقية متميزة تتراوح بين 3 نجوم اقتصادية وفنادق 5 نجوم فاخرة قريبة من الحرم.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-zinc-950 relative overflow-hidden">
      
      {/* Visual Stars background decor */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[radial-gradient(#d4a529_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Route visualization card from Screenshot 2 */}
        <div className="max-w-3xl mx-auto bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 mb-16 backdrop-blur-sm" id="route-visualizer-card">
          <div className="relative flex flex-row items-center justify-between gap-4">
            
            {/* Riyadh (Start Point on the right) */}
            <div className="flex flex-col items-center shrink-0 z-10">
              <div className="w-12 h-12 rounded-full bg-zinc-850 border border-zinc-750 flex items-center justify-center text-gold-300 shadow-md shadow-black/40">
                <MapPin className="w-5 h-5 shrink-0" />
              </div>
              <span className="text-zinc-200 font-bold text-sm sm:text-base mt-2 select-none">الرياض</span>
              <span className="text-zinc-500 text-[10px] sm:text-xs">نقطة الانطلاق</span>
            </div>

            {/* Travel Path & Animated Bus (going right to left in RTL) */}
            <div className="relative flex-1 h-14 flex items-center justify-center">
              {/* Dashed Golden Line */}
              <div className="absolute left-4 right-4 h-[2px] border-t-2 border-dashed border-gold-500/40" />

              {/* Moving Bus Container */}
              <motion.div
                initial={{ x: "60%" }}
                animate={{ x: "-60%" }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 8,
                  ease: "easeInOut",
                }}
                className="absolute z-10 bg-zinc-850 border border-gold-400/30 rounded-lg py-1.5 px-3 flex items-center gap-2 shadow-lg shadow-black/80"
              >
                <div className="shrink-0 bg-gold-400/10 p-1 rounded">
                  <Bus className="w-4 h-4 text-gold-300" />
                </div>
                <span className="text-[10px] text-gold-300 font-bold whitespace-nowrap hidden sm:inline-block">باصات 2027</span>
              </motion.div>
            </div>

            {/* Mecca (Endpoint on the left) */}
            <div className="flex flex-col items-center shrink-0 z-10">
              <div className="w-12 h-12 rounded-full bg-zinc-850 border border-zinc-750 flex items-center justify-center text-gold-300 shadow-md shadow-black/40">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-gold-400 fill-current"
                  id="mecca-kaaba-svg"
                >
                  {/* Kaaba Silhouette / Cube icon */}
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5V9l-10 5L2 9v8z" />
                </svg>
              </div>
              <span className="text-zinc-200 font-bold text-sm sm:text-base mt-2 select-none">مكة المكرمة</span>
              <span className="text-zinc-400 text-[10px] sm:text-xs font-medium text-gold-400/80">بيت الله الحرام</span>
            </div>

          </div>
        </div>

        {/* Features 4-card Grid from Screenshot 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="features-cards-grid">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/60 transition-all duration-300 rounded-2xl p-6 flex flex-col items-start hover:shadow-lg hover:shadow-black/20"
              id={`feature-card-${index}`}
            >
              <div className="p-3 bg-zinc-850/60 rounded-xl border border-zinc-800 border-dashed mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
