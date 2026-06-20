import { ShieldCheck, Bus, Calendar, Hotel, CheckCircle2, DollarSign } from "lucide-react";
import { motion } from "motion/react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "أسطول حديث",
      description: "باصات موديل 2027 راقية ومريحة، بمقاعد واسعة تجعل الطريق جزءاً ممتعاً من الرحلة.",
      icon: <Bus className="w-5 h-5 text-gold-300" />,
    },
    {
      title: "مواعيد منتظمة",
      description: "رحلات اقتصادية متاحة يومياً تقريباً، ورحلات VIP كل اثنين وخميس – اختر ما يناسب جدولك.",
      icon: <Calendar className="w-5 h-5 text-gold-300" />,
    },
    {
      title: "سكن مضمون",
      description: "فنادق 3 نجوم للباقة الاقتصادية و4-5 نجوم لباقة VIP، محجوزة ومؤكدة تماماً قبل انطلاقك.",
      icon: <Hotel className="w-5 h-5 text-gold-300" />,
    },
    {
      title: "خيارات للجميع",
      description: "غرف خاصة للعائلات بسعة 4-5 أسرة، وأسرة في غرف مشتركة للعزاب بأسعار مدروسة ملائمة.",
      icon: <CheckCircle2 className="w-5 h-5 text-gold-300" />,
    },
    {
      title: "أسعار واضحة",
      description: "باقات شاملة النقل والسكن بدون أي رسوم خفية – كل تفاصيل التكلفة توضح لك قبل تأكيد حجز المقعد.",
      icon: <DollarSign className="w-5 h-5 text-gold-300" />,
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-zinc-950/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-400 font-bold tracking-widest text-sm uppercase block mb-3">
            لماذا نحن
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            رحلتك الإيمانية تستحق الأفضل
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            نحن نحرص على تقديم خدمات متكاملة تضمن لك الأمان والطمأنينة الكاملة طوال السفر لتتفرغ للعبادة.
          </p>
        </div>

        {/* Benefits Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6" id="why-us-grid">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-zinc-900/35 border border-zinc-900 hover:border-zinc-800 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between"
              id={`why-us-item-${index}`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-850/80 border border-zinc-800 flex items-center justify-center mb-5 shrink-0 shadow-sm shadow-black/30">
                  {point.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-3">
                  {point.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
