import { Check, Bus, Star, Ticket, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { Package } from "../types";

interface PackagesProps {
  onSelectPackage: (packageId: string) => void;
}

export default function Packages({ onSelectPackage }: PackagesProps) {
  const packagesList: Package[] = [
    {
      id: "economic",
      type: "economic",
      name: "الباقة الاقتصادية",
      badge: "متاحة يومياً تقريباً",
      busDetails: "باص حديث موديل 2027 – 4 صفوف، 49 مقعداً",
      hotelDetails: "فندق 3 نجوم متميز وقريب من الحرم",
      duration: "مدد مرنة: 3 أو 5 أيام أو أكثر",
      departureDays: "مكة فقط، أو مكة والمدينة المنورة",
      roomsDescription: "غرف عائلية خاصة أو مشتركة للعزاب",
      features: [
        "باص حديث موديل 2027 – 4 صفوف، 49 مقعداً",
        "سكن فندقي 3 نجوم (مكة فقط أو مكة والمدينة)",
        "مدد مرنة تلائم الجميع: 3 أو 5 أيام أو أكثر",
        "توفير غرف عائلية خاصة أو غرف مشتركة للعزاب",
        "انطلاق شبه يومي طوال العام من مدينة الرياض",
      ],
    },
    {
      id: "vip",
      type: "vip",
      name: "باقة VIP الفاخرة",
      badge: "الأكثر تميزاً 🔥",
      busDetails: "باص فاخر – 3 صفوف، 30 مقعداً فقط ومقاعد متباعدة",
      hotelDetails: "فندق 4 أو 5 نجوم (مثال: فنادق فخمة قريبة)",
      duration: "3 أيام في مكة المكرمة",
      departureDays: "كل اثنين وخميس أسبوعياً",
      roomsDescription: "مناسب للعائلات وللأفراد الباحثين عن التميز",
      features: [
        "باص VIP فاخر ومريح – 3 صفوف، 30 مقعداً متباعداً فقط",
        "إقامة راقية في فنادق 4 أو 5 نجوم رائدة قريبة من الحرم",
        "رحلات مجدولة ومنتظمة تنطلق كل اثنين وخميس أسبوعياً",
        "خدمات استثنائية طوال الرحلة مع إقامة لمدة 3 أيام بمكة",
        "غرف فندقية خاصة راقية تلبي تطلعات الأسر والأفراد",
      ],
    },
    {
      id: "seats",
      type: "seats",
      name: "حجز مقاعد الباص فقط",
      badge: "مرونة كاملة",
      busDetails: "ذهاب وعودة أو اتجاه واحد حسب اختيارك",
      hotelDetails: "بدون فندق (مناسب لمن دبّر سكنه بنفسه)",
      duration: "الرياض ⇆ مكة المكرمة",
      departureDays: "مواعيد منتظمة وشبه يومية طوال العام",
      roomsDescription: "باصات حديثة وراقية موديل 2027",
      features: [
        "حجز مقعد باص فقط (ذهاب وعودة أو اتجاه واحد)",
        "مواعيد انطلاق منتظمة وموثوقة من الرياض لمكة",
        "مثالي جداً للمعتمرين الذين يرغبون بتأمين إقامتهم بأنفسهم",
        "السفر على متن أسطول باصات حديث ومريح موديل 2027",
        "دعم وإرشاد من مشرفي الرحلة طوال خط السير",
      ],
    },
  ];

  return (
    <section id="packages" className="py-24 bg-[#0a0a0c] relative">
      
      {/* Decorative Gold Glow behind the center VIP card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header from Screenshot 3 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-400 font-bold tracking-widest text-sm uppercase block mb-3">
            باقاتنا
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            اختر الرحلة التي تناسبك
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
            باقات مدروسة بعناية تجمع بين الراحة والسعر المناسب – جميعها تشمل النقل ذهاباً وإياباً والسكن الفندقي (باستثناء باقة المقاعد).
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch" id="packages-cards-container">
          {packagesList.map((pkg, index) => {
            const isVip = pkg.type === "vip";
            const isEconomic = pkg.type === "economic";

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col h-full rounded-3xl border transition-all duration-300 relative overflow-hidden p-8 ${
                  isVip
                    ? "bg-gradient-to-b from-zinc-900 to-black border-gold-400/40 shadow-xl shadow-gold-500/5 md:-translate-y-4"
                    : "bg-zinc-900/30 border-zinc-800/80 hover:border-zinc-700 shadow-md"
                }`}
                id={`package-card-${pkg.id}`}
              >
                
                {/* Outstanding Label for VIP or beautiful Badge */}
                <div className="flex justify-between items-start mb-6">
                  <span
                    className={`text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-full ${
                      isVip
                        ? "bg-gold-400 text-black shadow-md shadow-gold-500/35"
                        : "bg-zinc-850 text-zinc-300 border border-zinc-800"
                    }`}
                  >
                    {pkg.badge}
                  </span>
                  
                  {/* Icon */}
                  <div className={`p-3 rounded-2xl ${isVip ? "bg-gold-500/10 text-gold-300" : "bg-zinc-800/60 text-zinc-400"}`}>
                    {pkg.type === "economic" && <Bus className="w-5 h-5 shrink-0" />}
                    {pkg.type === "vip" && <Star className="w-5 h-5 shrink-0 fill-current" />}
                    {pkg.type === "seats" && <Ticket className="w-5 h-5 shrink-0" />}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-black text-white mb-4">
                  {pkg.name}
                </h3>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 border-b border-zinc-800/50 pb-5">
                  رحلة عمرة من الرياض تلبي متطلباتكم بامتياز مع راحة تامة طوال المسير.
                </p>

                {/* Bullet Points */}
                <div className="space-y-4 flex-1 mb-8" id={`pkg-${pkg.id}-bullets`}>
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <div className={`mt-1 flex items-center justify-center p-0.5 rounded-full ${isVip ? "bg-gold-400/10 text-gold-300" : "bg-zinc-850 text-zinc-400"}`}>
                        <Check className="w-3.5 h-3.5 shrink-0" />
                      </div>
                      <span className="text-zinc-300 text-sm leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Button of Package */}
                <button
                  onClick={() => onSelectPackage(pkg.id)}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                    isVip
                      ? "bg-gradient-to-r from-gold-500 to-gold-400 hover:brightness-110 text-zinc-950 shadow-lg shadow-gold-500/10"
                      : "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-750/50"
                  }`}
                  id={`package-cta-btn-${pkg.id}`}
                >
                  <span>{isVip ? "تفاصيل باقة VIP" : isEconomic ? "تفاصيل الباقة الاقتصادية" : "تفاصيل حجز الباصات"}</span>
                  <ArrowLeft className="w-4 h-4 text-current transition-transform group-hover:-translate-x-1" />
                </button>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
