import { useState } from "react";
import { Bus, Check, ArrowRightLeft, Users, ShieldAlert, MonitorPlay, WifiOff } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function BusFleet() {
  const [activeTab, setActiveTab] = useState<"economic" | "vip">("economic");

  const fleetDetails = {
    economic: {
      title: "أوتوبيسات الفئة الاقتصادية الحديثة",
      seats: "49 مقعداً مريحاً",
      model: "موديل 2027 الحديث والآمن",
      desc: "باصات مجهزة باحترافية للسفر الطويل تضمن راحة المسافر وتوازن التكلفة.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000",
      specs: [
        "باصات موديل 2027 مجهزة بالكامل",
        "تكييف هواء ذكي بفتحات تهوية لكل مقعد",
        "كراسي مائلة لراحة الظهر أثناء المسافات الطويلة",
        "شاشات عرض وثائقية ودينية مشتركة",
        "حافظات مبردة لمياه الشرب طوال الرحلة",
        "توزيع 4 صفوف بممرات مريحة وواسعة نسبياً",
      ],
      warning: "ملاحظة: الباصات الاقتصادية لا تتوفر على شبكة واي فاي مجانية لخفض التكاليف.",
    },
    vip: {
      title: "أوتوبيسات فئة VIP الفاخرة للغاية",
      seats: "30 مقعداً فاخراً فقط",
      model: "موديل 2027 الممتاز (جسم متباعد وصالون ملكي)",
      desc: "أعلى درجات الفخامة مع مقاعد جلدية واسعة قابلة للفرد وممرات فارهة.",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=1000",
      specs: [
        "توزيع ملكي خاص: 3 صفوف فقط لراحة تامة وحيز كبير",
        "مقاعد جلدية فارهة وعريضة مع مساند مريحة للأقدام",
        "مخارج شحن USB وهواتف ذكية خاصة بكل راكب",
        "نظام تكييف ممتاز ومصفي هواء ذكي متطور",
        "ثلاجة داخلية لتقديم المياه الباردة والعصائر والوجبات الخفيفة",
        "شاشات ترفيهية فردية ومكبرات صوت ممتازة للدروس الدينية",
      ],
      warning: "الباص الأفضل والأوسع للأسر وكبار السن الذين يبحثون عن تجربة سفر متميزة.",
    },
  };

  return (
    <section id="fleet" className="py-24 bg-zinc-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-gold-400 font-bold tracking-widest text-sm uppercase block mb-3">
            أسطولنا
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            باصاتنا الحديثة
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            نسافر بكم عبر أحدث وسائل النقل البري موديل 2027 المهيأة لقطع المسافات الطويلة بين الرياض ومكة المكرمة براحة وهدوء تامين.
          </p>
        </div>

        {/* Tab Toggles from Screenshot 8 */}
        <div className="flex justify-center mb-12">
          <div className="bg-zinc-950 p-1.5 rounded-full border border-zinc-800 flex items-center gap-1 shrink-0">
            <button
              onClick={() => setActiveTab("economic")}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all cursor-pointer ${
                activeTab === "economic"
                  ? "bg-gradient-to-r from-gold-500 to-gold-400 text-zinc-950 shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
              id="tab-btn-economic"
            >
              اقتصادي (49 مقعد)
            </button>
            <button
              onClick={() => setActiveTab("vip")}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all cursor-pointer ${
                activeTab === "vip"
                  ? "bg-gradient-to-r from-gold-500 to-gold-400 text-zinc-950 shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
              id="tab-btn-vip"
            >
              VIP فاخر (30 مقعد)
            </button>
          </div>
        </div>

        {/* Content Section with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: activeTab === "economic" ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeTab === "economic" ? -20 : 20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            id={`fleet-info-tab-${activeTab}`}
          >
            
            {/* Bus Image Column */}
            <div className="lg:col-span-5 h-[300px] sm:h-[400px] rounded-2xl overflow-hidden border border-zinc-800 relative group shadow-2xl">
              <img
                src={fleetDetails[activeTab].image}
                alt={fleetDetails[activeTab].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-black/75 px-4 py-2 rounded-lg border border-gold-400/30">
                <Bus className="w-4 h-4 text-gold-300" />
                <span className="text-zinc-200 text-xs sm:text-sm font-bold">
                  موديل 2027
                </span>
              </div>
            </div>

            {/* Bus Specs Detail Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-gold-400 text-xs sm:text-sm font-bold mb-2 flex items-center gap-1">
                <Users className="w-4 h-4 inline-block shrink-0" />
                <span>سعة الحافلة: {fleetDetails[activeTab].seats}</span>
              </span>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                {fleetDetails[activeTab].title}
              </h3>
              
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                {fleetDetails[activeTab].desc}
              </p>

              {/* Specs Checkmark list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {fleetDetails[activeTab].specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2.5">
                    <div className="mt-1 bg-gold-400/10 p-0.5 rounded-full text-gold-300 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>

              {/* Warning/Note Pill from Screenshot details */}
              <div className="bg-zinc-950/80 border border-zinc-850 p-4 rounded-xl flex items-start gap-3">
                {activeTab === "economic" ? (
                  <WifiOff className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                ) : (
                  <MonitorPlay className="w-5 h-5 text-gold-300 shrink-0 mt-0.5" />
                )}
                <span className="text-zinc-400 text-xs leading-relaxed">
                  {fleetDetails[activeTab].warning}
                </span>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
