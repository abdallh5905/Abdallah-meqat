import { useState } from "react";
import { HelpCircle, ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQ } from "../types";

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqsList: FAQ[] = [
    {
      question: "متى تكون مواعيد الانطلاق والتحرك من الرياض لأداء العمرة ومواضع الركوب؟",
      answer: "تنطلق رحلاتنا الاقتصادية بشكل مريح ومستمر شبه يومي طوال الأسبوع، بينما تنطلق باقات VIP الفاخرة دورياً كل يوم اثنين وخميس. وتكون نقاط ومواعيد الركوب محددة بوضوح في وسط الرياض ومجهّزة للمغادرة بمواعيد دقيقة لتخفيف عناء الانتظار.",
    },
    {
      question: "هل تشمل الباقات إصدار تصاريح العمرة والتعليمات الشرعية؟",
      answer: "نعم، يشرف رفقاء الدرب ومشرفو الرحلة على تذكير المعتمرين بإصدار تصاريح الصلاة والعمرة عبر التطبيقات المعتمدة (نسك بالتحديد) وشرح شروط الدخول وتوجيه الركاب قبل الوصول للميقات بشكل منظم يضمن يسر المناسك.",
    },
    {
      question: "ما هي طريقة سداد وتأكيد رسوم الحملة والمقاعد المحجوزة؟",
      answer: "لتأكيد حجز مقاعدكم نقوم بتلقي الطلب المبدئي عبر نموذج الموقع ومن ثم تحويلكم لواتساب. بعد مراجعة البيانات وصلاحية الأوراق مع مشرف الحملة، يتم تأكيد حجز مقاعدكم إما بالتحويل المصرفي المعتمد أو في مكتب خدمة العملاء المعتمد لراحة بالكم.",
    },
    {
      question: "هل يتطلب حجز مقاعد الباص فقط حجز سكن فندقي مسبق برفقتكم؟",
      answer: "بالطبع لا، تتيح لك باقة 'حجز مقاعد الباص فقط' السفر ذهاباً وإياباً من الرياض إلى مكة المكرمة بمرونة تامة لتقوموا بترتيب وتعبئة أماكن إقامتكم الخاصة بأنفسكم دون قيود.",
    },
    {
      question: "هل تتوفر غرف فندقية مخصصة للأفراد (العزاب) ذكوراً وإناثاً؟",
      answer: "نعم نعمل على تقديم غرف فندقية خاصة ومستقلة تماماً للأسر والعائلات حسب الطلب، بالإضافة إلى توفير خيار الغرف المشتركة المجهزة بأسرة متباعدة ونظيفة للعاملين والأفراد العزاب بأسعار ملائمة ومدروسة.",
    },
  ];

  const handleToggle = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-24 bg-zinc-950/80 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 font-bold tracking-widest text-sm uppercase block mb-3">
            الأسئلة الشائعة
          </span>
          <h2 className="text-3xl font-extrabold text-white mb-4 leading-tight">
            لديك استفسار؟ نحن هنا للإجابة
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
            جمعنا لكم أهم تفاصيل الأسئلة المتكررة التي يطرحها عملاء وزوار الميقات للعمرة لضمان وضوح كامل طوال خطة السفر والعبادة.
          </p>
        </div>

        {/* Accordions List container */}
        <div className="space-y-4" id="faqs-accordion-list">
          {faqsList.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-zinc-900/30 border border-zinc-950 hover:border-zinc-850/80 rounded-2xl transition-all overflow-hidden"
                id={`faq-item-${index}`}
              >
                {/* Header question button */}
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-5 text-right font-bold text-sm sm:text-base text-zinc-100 hover:text-gold-300 transition-colors select-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-gold-300 shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <div>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-zinc-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-zinc-400 shrink-0" />
                    )}
                  </div>
                </button>

                {/* Collapsing answer panel with motion animations */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-zinc-400 text-xs sm:text-sm leading-relaxed border-t border-zinc-900/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
