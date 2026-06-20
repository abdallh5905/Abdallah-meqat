import { useState } from "react";
import { Star, MapPin, Search, ChevronLeft, ShieldAlert, Footprints, Coffee } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Hotel } from "../types";

export default function Hotels() {
  const [selectedClass, setSelectedClass] = useState<"3star" | "5star">("5star");

  const hotelsList: Hotel[] = [
    // 5 Star Hotels
    {
      name: "فندق فوكو مكة (VOCO Makkah)",
      hotelClass: "5star",
      description: "إقامة فاخرة فئة خمس نجوم توفر غرفاً فسيحة غاية في الرقي، بوفيهات ممتازة وخدمات متواصلة على مدار الساعة.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
      features: ["بوفيه إفطار فاخر متكامل", "حافلات نقل للحرم على مدار الساعة", "غرف مكيفة متميزة مجهزة بالكامل", "إنترنت واي فاي سريع مجاني"],
    },
    {
      name: "فندق ميلينيوم مكة (Millennium Makkah)",
      hotelClass: "5star",
      description: "إطلالات رائعة وأجواء إيمانية هادئة مع مستوى خدمة ممتاز وضيافة عربية أصيلة تليق بضيوف الرحمن.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
      features: ["قريب جداً من ساحات الحرم الأولى", "قنوات تلفزيونية إسلامية ومحاضرات", "مطاعم شرقية وغربية متنوعة", "خدمات غرف سريعة وتنظيف مستمر"],
    },
    {
      name: "هوليداي إن مكة العزيزية",
      hotelClass: "5star",
      description: "فندق فخم وفسيح للغاية بمرافق معاصرة ومثالي للعائلات ومجموعات العمرة والزيارة الكبيرة.",
      stars: 5,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
      features: ["خدمة استقبال وترحيب ممتازة", "حافلات ترحيل ترددية مجانية سريعة", "مسبح وغرف نوم عائلية واسعة", "منطقة مخصصة للأطفال ومطاعم فخمة"],
    },
    
    // 3 Star Hotels
    {
      name: "فنادق 3 نجوم الاقتصادية المتميزة",
      hotelClass: "3star",
      description: "غرف نظيفة جداً ومرتبة مهيأة لتوفير الراحة والسكينة للمعتمرين بميزانية معقولة واقتصادية.",
      stars: 3,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800",
      features: ["أسرة نظيفة ومريحة مفردة أو زوجية", "تكييف هواء فردي بكل الغرف", "قريب من محطة حافلات الحرم الترددية", "اتصال إنترنت مجاني باللوبي والغرف"],
    },
    {
      name: "فنادق الششة والعزيزية المريحة",
      hotelClass: "3star",
      description: "تتميز بالهدوء والنظافة وتقديم أفضل قيمة ممكنة مقابل السعر مع إشراف ومتابعة يومية من حملتنا.",
      stars: 3,
      image: "https://images.unsplash.com/photo-1555854817-2b2260177dba?auto=format&fit=crop&q=80&w=800",
      features: ["خدمات استقبال ودية ومحترمة", "مصاعد واسعة ملائمة لجميع الأعمار", "حافلات متوفرة للذهاب والعودة للحرم", "غرف خاصة للعائلات والرفقاء"],
    }
  ];

  const filteredHotels = hotelsList.filter(h => h.hotelClass === selectedClass);

  return (
    <section id="hotels" className="py-24 bg-zinc-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header from Screenshot 9 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-400 font-bold tracking-widest text-sm uppercase block mb-3">
            إقامتك
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            فنادقنا المختارة بعناية
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            من 3 نجوم اقتصادية إلى 5 نجوم فاخرة للغاية – اختر السكن الفندقي الذي يناسب راحتك وميزانيتك وصحتك لرحلة عمرة يسيرة ومريحة.
          </p>
        </div>

        {/* Selected Hotel Level Tabs matching Screenshot Layout */}
        <div className="flex justify-center mb-12">
          <div className="bg-zinc-900 border border-zinc-800 p-1.5 rounded-xl flex items-center gap-2 max-w-md w-full">
            <button
              onClick={() => setSelectedClass("5star")}
              className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                selectedClass === "5star"
                  ? "bg-gold-500 text-zinc-950 shadow-md shadow-gold-500/10"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/40"
              }`}
              id="hotels-tab-5star"
            >
              <span>فنادق 5 نجوم (VIP)</span>
              <div className="flex text-amber-950">
                <Star className="w-3.5 h-3.5 fill-current shrink-0" />
              </div>
            </button>
            <button
              onClick={() => setSelectedClass("3star")}
              className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                selectedClass === "3star"
                  ? "bg-gold-500 text-zinc-950 shadow-md shadow-gold-500/10"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/40"
              }`}
              id="hotels-tab-3star"
            >
              <span>فنادق 3 نجوم (الاقتصادية)</span>
              <div className="flex text-amber-950">
                <Star className="w-3.5 h-3.5 fill-current shrink-0" />
              </div>
            </button>
          </div>
        </div>

        {/* Hotels Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch" id="hotels-cards-container">
          <AnimatePresence mode="popLayout">
            {filteredHotels.map((hotel, index) => (
              <motion.div
                key={hotel.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl overflow-hidden flex flex-col justify-between group shadow-lg"
                id={`hotel-card-${index}`}
              >
                
                {/* Hotel Image with Overlay */}
                <div className="h-56 relative overflow-hidden shrink-0">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-85" />
                  
                  {/* Rating Stars Badge container */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gold-300/20 shadow-md">
                    <div className="flex gap-0.5">
                      {Array.from({ length: hotel.stars }).map((_, sIdx) => (
                        <Star key={sIdx} className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gold-400 fill-current shrink-0" />
                      ))}
                    </div>
                    <span className="text-zinc-300 text-[10px] sm:text-xs font-bold leading-none select-none">
                      {hotel.stars} نجوم
                    </span>
                  </div>
                </div>

                {/* Hotel details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                      {hotel.name}
                    </h3>
                    
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                      {hotel.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-3 mb-6">
                      {hotel.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-zinc-300 text-xs sm:text-sm">
                          <CheckLeftArrowIcon className="w-4 h-4 text-gold-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking Link redirect helper */}
                  <div className="border-t border-zinc-800/60 pt-4 mt-2">
                    <span className="text-[11px] sm:text-xs text-gold-400/80 font-bold flex items-center gap-1.5">
                      <Footprints className="w-3.5 h-3.5" />
                      <span>متوفر في الباقة {selectedClass === "5star" ? "الفاخرة VIP" : "الاقتصادية"}</span>
                    </span>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

// Subordinate Icon helper inside the file
function CheckLeftArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
