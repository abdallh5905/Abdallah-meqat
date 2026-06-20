import { Star, Check, X, ShieldEllipsis, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

export default function ComparisonTable() {
  const compRows = [
    {
      feature: "حافلة السفر (الباص)",
      eco: [true, "4 صفوف – 49 مقعداً حديثاً"],
      vip: [true, "3 صفوف فاخرة – 30 مقعداً متباعداً ملكياً"],
    },
    {
      feature: "الفندق المشمل",
      eco: [true, "3 نجوم (العزيزية أو الششة)"],
      vip: [true, "4 أو 5 نجوم (مثل VOCO مكة)"],
    },
    {
      feature: "الوجهة",
      eco: [true, "مكة فقط، أو مكة والمدينة المنورة"],
      vip: [true, "مكة المكرمة فقط لتوفير الراحة"],
    },
    {
      feature: "المدة الزمنية",
      eco: [true, "3 أو 5 أيام بمرونة كاملة"],
      vip: [true, "3 أيام دقيقة تناسب عطلة نصف الأسبوع"],
    },
    {
      feature: "مواعيد المغادرة",
      eco: [true, "انطلاق شبه يومي طوال الأسبوع"],
      vip: [true, "كل اثنين وخميس أسبوعياً بشكل دوري"],
    },
    {
      feature: "السكن والغرف",
      eco: [true, "غرف خاصة للعائلات أو مشتركة للعزاب"],
      vip: [true, "غرف ثنائية/ثلاثية خاصة بالكامل للعائلات"],
    },
    {
      feature: "واي فاي مجاني بالباص",
      eco: [false, "غير متوفر بالباص الاقتصادي"],
      vip: [true, "شامل مجاناً طوال خط السير"],
    },
  ];

  return (
    <section id="comparison" className="py-24 bg-[#0a0a0c] border-y border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header from Screenshot 11 */}
        <div className="text-center mb-16">
          <span className="text-gold-400 font-bold tracking-widest text-sm uppercase block mb-3">
            مقارنة سريعة
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            الاقتصادية أم VIP؟
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            قارن بين الفروقات الأساسية للوصول للباقة التي تلائم كلفة سفركم ومتطلبات عائلاتكم وجمعكم الكريم.
          </p>
        </div>

        {/* Table Canvas exactly like Screenshot 11 */}
        <div className="overflow-hidden border border-zinc-800 rounded-2xl bg-zinc-900/10 backdrop-blur-sm" id="comparison-table-wrapper">
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-zinc-950 border-b border-zinc-800 text-xs sm:text-sm text-zinc-300">
                  <th className="py-5 px-6 font-bold text-zinc-100 select-none">وجه المقارنة</th>
                  <th className="py-5 px-6 font-bold bg-zinc-900/60 text-zinc-200">الباك الاقتصادية</th>
                  <th className="py-5 px-6 font-bold text-gold-300 select-none">باقة VIP الفاخرة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-850/60 text-xs sm:text-sm">
                {compRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-zinc-900/30 transition-colors">
                    
                    {/* Feature head */}
                    <td className="py-4.5 px-6 font-semibold text-zinc-300">{row.feature}</td>
                    
                    {/* Economic values */}
                    <td className="py-4.5 px-6 text-zinc-400 bg-zinc-900/20 sm:bg-zinc-900/30">
                      <div className="flex items-center gap-2">
                        {row.eco[0] ? (
                          <div className="w-4 h-4 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-red-950/40 border border-red-900/30 flex items-center justify-center text-red-400 shrink-0">
                            <X className="w-2.5 h-2.5" />
                          </div>
                        )}
                        <span className="leading-relaxed font-medium">{row.eco[1]}</span>
                      </div>
                    </td>

                    {/* VIP values */}
                    <td className="py-4.5 px-6 text-zinc-200 font-medium">
                      <div className="flex items-center gap-2">
                        <div className="w-4.5 h-4.5 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-300 shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-white font-semibold leading-relaxed">{row.vip[1]}</span>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Small note under the table matching screenshot 11 details exactly */}
        <div className="mt-6 flex items-start gap-2.5 bg-zinc-950/60 border border-zinc-850 p-4 rounded-xl">
          <AlertCircle className="w-4.5 h-4.5 text-zinc-400 shrink-0 mt-0.5" />
          <p className="text-zinc-400 text-xs leading-relaxed">
            المدد والمواعيد الموضحة تشمل يومي الذهاب والعودة • الباصات لا توفر واي فاي مجاني في الباقات الاقتصادية • باقة مقاعد الباصات لا تشمل السكن الفندقي • الرسوم تدرج بوضوح لك قبل المغادرة.
          </p>
        </div>

      </div>
    </section>
  );
}
