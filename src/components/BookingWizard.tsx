import { useState, useEffect } from "react";
import { Check, Calendar, Users, Phone, Send, ArrowLeft, ArrowRight, Star, Bus, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BookingState } from "../types";

interface BookingWizardProps {
  selectedPackageId: string;
  onSetSelectedPackageId: (id: string) => void;
}

export default function BookingWizard({ selectedPackageId, onSetSelectedPackageId }: BookingWizardProps) {
  const [step, setStep] = useState<number>(1);
  const [booking, setBooking] = useState<BookingState>({
    packageId: "economic",
    name: "",
    phone: "",
    date: "",
    passengersCount: 1,
    roomType: "shared",
    notes: "",
  });

  // Sync state if selected package is passed down from parent
  useEffect(() => {
    if (selectedPackageId) {
      setBooking((prev) => ({ ...prev, packageId: selectedPackageId }));
    }
  }, [selectedPackageId]);

  const packagesMeta = [
    { id: "economic", name: "الباقة الاقتصادية", desc: "باصات حديثة + فنادق مريحة 3 نجوم" },
    { id: "vip", name: "باقة VIP الفاخرة", desc: "باصات VIP (3 صفوف) + فنادق 5 نجوم" },
    { id: "seats", name: "حجز مقاعد الباص فقط", desc: "ذهاب وعودة أو اتجاه واحد وبدون سكن" },
  ];

  const roomOptions = [
    { id: "shared", label: "غرفة مشتركة (للعزاب)", disabledFor: ["seats"] },
    { id: "double", label: "غرفة خاصة ثنائية (سريران)", disabledFor: ["seats"] },
    { id: "triple", label: "غرفة خاصة ثلاثية (3 أسرة)", disabledFor: ["seats"] },
    { id: "quadruple", label: "غرفة خاصة رباعية (4 أسرة)", disabledFor: ["seats"] },
    { id: "none", label: "بدون سكن فندقي (مقاعد فقط)", disabledFor: ["economic", "vip"] },
  ];

  const handlePackageChange = (id: string) => {
    onSetSelectedPackageId(id);
    setBooking((prev) => ({
      ...prev,
      packageId: id,
      // Reset room type if invalid for the new package type
      roomType: id === "seats" ? "none" : prev.roomType === "none" ? "shared" : prev.roomType,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBooking((prev) => ({ ...prev, [name]: value }));
  };

  const adjustPassengers = (amount: number) => {
    setBooking((prev) => {
      const newVal = prev.passengersCount + amount;
      return { ...prev, passengersCount: newVal < 1 ? 1 : newVal };
    });
  };

  const validateStep = () => {
    if (step === 1) {
      return !!booking.packageId;
    }
    if (step === 2) {
      return !!booking.date && booking.passengersCount >= 1 && !!booking.roomType;
    }
    if (step === 3) {
      return booking.name.trim().length >= 3 && booking.phone.trim().length >= 9;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep() && step < 4) {
      setStep((p) => p + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep((p) => p - 1);
    }
  };

  const generateWhatsAppURL = () => {
    const chosenPkg = packagesMeta.find((p) => p.id === booking.packageId)?.name || booking.packageId;
    const roomText = roomOptions.find((r) => r.id === booking.roomType)?.label || booking.roomType;

    const message = `السلام عليكم ورحمة الله وبركاته،

أريد تقديم طلب حجز رحلة عمرة عبر حملة *الميقات للعمرة* بالتفاصيل التالية:

🕋 *باقة العمرة:* ${chosenPkg}
📅 *تاريخ الانطلاق المفضل:* ${booking.date}
👥 *عدد الحجاج/المعتمرين:* ${booking.passengersCount} أشخاص
🛏️ *خيارات الغرف/الإقامة:* ${roomText}

👤 *اسم صاحب الطلب:* ${booking.name}
📞 *رقم الجوال للمتابعة:* ${booking.phone}
📝 *ملاحظات إضافية:* ${booking.notes || "لا توجد"}

برجاء تأكيد حجز المقاعد وإبقاءنا على إطلاع بالإجراءات. شكراً لكم.`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/966565664984?text=${encodedMessage}`;
  };

  const currentPackageObj = packagesMeta.find((p) => p.id === booking.packageId);

  return (
    <section id="booking-section" className="py-24 bg-zinc-950/20 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="booking-wizard-container">
        
        {/* Stepper Header */}
        <div className="text-center mb-14">
          <span className="text-gold-400 font-bold tracking-widest text-sm uppercase block mb-3">
            احجز الآن
          </span>
          <h2 className="text-3xl font-extrabold text-white leading-tight">
            خطوات حجز رحلة العمرة
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3 leading-relaxed">
            استكمل الخطوات البسيطة أدناه وسيقوم مشرفو حملة الميقات فوراً بتأكيد الحجز معك عبر واتساب.
          </p>
        </div>

        {/* Wizard Multi-Step Progress Indicators */}
        <div className="flex items-center justify-between gap-2 max-w-lg mx-auto mb-12 select-none" id="booking-steps-nav">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex-1 flex items-center justify-center gap-2 relative">
              {/* Connector line (for previous steps) */}
              {s > 1 && (
                <div
                  className={`absolute right-[-50%] top-1/2 -translate-y-1/2 w-full h-[1px] -z-10 ${
                    step >= s ? "bg-gold-500/80" : "bg-zinc-800"
                  }`}
                />
              )}
              
              <div
                onClick={() => {
                  if (s < step) setStep(s);
                }}
                className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs cursor-pointer transition-all ${
                  step === s
                    ? "bg-gradient-to-r from-gold-500 to-gold-400 text-zinc-950 ring-4 ring-gold-500/20 scale-110"
                    : step > s
                    ? "bg-gold-500 text-zinc-950"
                    : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
                }`}
              >
                {step > s ? <Check className="w-4 h-4" strokeWidth={3} /> : s}
              </div>
              
              <span
                className={`text-[10px] sm:text-xs font-semibold hidden sm:inline-block ${
                  step === s ? "text-white" : "text-zinc-400"
                }`}
              >
                {s === 1 && "الباقة"}
                {s === 2 && "التفاصيل"}
                {s === 3 && "الحاج"}
                {s === 4 && "تأكيد الحجز"}
              </span>
            </div>
          ))}
        </div>

        {/* Step Card Wrapper */}
        <div className="bg-zinc-900/50 border border-zinc-850 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl relative overflow-hidden mb-8 min-h-[320px] flex flex-col justify-between" id="booking-wizard-card">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.25 }}
              className="flex-1"
            >
              
              {/* Step 1: Package Selection */}
              {step === 1 && (
                <div className="space-y-6" id="booking-step-1">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-gold-500/10 text-gold-300">🕋</span>
                    <span>1. اختر الباقة المناسبة لك أولاً</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {packagesMeta.map((p) => (
                      <label
                        key={p.id}
                        className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                          booking.packageId === p.id
                            ? "bg-gold-400/5 border-gold-500/50"
                            : "bg-zinc-950/40 border-zinc-900 hover:border-zinc-800"
                        }`}
                        onClick={() => handlePackageChange(p.id)}
                      >
                        <div className="flex items-center gap-3.5">
                          <input
                            type="radio"
                            name="packageId"
                            checked={booking.packageId === p.id}
                            onChange={() => handlePackageChange(p.id)}
                            className="w-4 h-4 text-gold-400 border-zinc-700 bg-zinc-900 focus:ring-gold-500 focus:ring-2 accent-gold-400"
                          />
                          <div className="text-right">
                            <span className="block font-bold text-sm text-white">{p.name}</span>
                            <span className="block text-[11px] sm:text-xs text-zinc-400 mt-1">{p.desc}</span>
                          </div>
                        </div>
                        <div className="text-gold-400">
                          {p.id === "vip" && <Star className="w-4 h-4 fill-current" />}
                          {p.id === "economic" && <Bus className="w-4 h-4" />}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Trip Details */}
              {step === 2 && (
                <div className="space-y-6" id="booking-step-2">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-gold-500/10 text-gold-300">📅</span>
                    <span>2. حدد تفاصيل الحجز وتوع الإقامة</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Date Input */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs sm:text-sm font-semibold text-zinc-300">تاريخ الانطلاق المفضل</label>
                      <input
                        type="date"
                        name="date"
                        value={booking.date}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-gold-500 hover:border-zinc-750 transition-colors"
                      />
                    </div>

                    {/* Passengers quantity (interactive +/- counter) */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs sm:text-sm font-semibold text-zinc-300">عدد المعتمرين الكلي</label>
                      <div className="flex items-center bg-zinc-950 border border-zinc-800 rounded-xl h-[46px] px-2 overflow-hidden justify-between">
                        <button
                          type="button"
                          onClick={() => adjustPassengers(1)}
                          className="w-10 h-10 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white flex items-center justify-center font-bold text-lg select-none transition-colors"
                        >
                          +
                        </button>
                        <span className="text-white font-bold text-sm">
                          {booking.passengersCount} {booking.passengersCount === 1 ? "معتمر" : "معتمرين"}
                        </span>
                        <button
                          type="button"
                          onClick={() => adjustPassengers(-1)}
                          className="w-10 h-10 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white flex items-center justify-center font-bold text-lg select-none transition-colors"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Room choices */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-semibold text-zinc-300">طبيعة الغرفة والسكن المفضل</label>
                    <select
                      name="roomType"
                      value={booking.roomType}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors"
                    >
                      {roomOptions.map((opt) => {
                        const isDisabled = opt.disabledFor ? opt.disabledFor.includes(booking.packageId) : false;
                        if (isDisabled) return null;
                        return (
                          <option key={opt.id} value={opt.id}>
                            {opt.label}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Contact information */}
              {step === 3 && (
                <div className="space-y-6" id="booking-step-3">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-gold-500/10 text-gold-300">👤</span>
                    <span>3. معلومات الاتصال بالمشرف</span>
                  </h3>

                  <div className="space-y-4">
                    {/* Full Name */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs sm:text-sm font-semibold text-zinc-300">الاسم الكامل (ثنائي أو أكثر)</label>
                      <input
                        type="text"
                        name="name"
                        value={booking.name}
                        onChange={handleInputChange}
                        placeholder="مثال: يوسف محمد الهاشمي"
                        minLength={3}
                        required
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3.5 px-4 text-white text-sm focus:outline-none focus:border-gold-500 hover:border-zinc-750 transition-colors placeholder:text-zinc-600"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs sm:text-sm font-semibold text-zinc-300">رقم الهاتف (الواتساب والمكالمات)</label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          value={booking.phone}
                          onChange={handleInputChange}
                          placeholder="0565664984"
                          minLength={9}
                          required
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3.5 pl-4 pr-16 text-white text-sm focus:outline-none focus:border-gold-500 hover:border-zinc-750 transition-colors text-left font-mono"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 font-semibold border-l border-zinc-800 pl-3 text-xs flex items-center gap-1">
                          <span>KSA</span>
                          <span>+966</span>
                        </div>
                      </div>
                    </div>

                    {/* Extra Notes */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs sm:text-sm font-semibold text-zinc-300">ملاحظات إضافية (اختياري)</label>
                      <textarea
                        name="notes"
                        value={booking.notes}
                        onChange={handleInputChange}
                        placeholder="مثل: عائلة برفقتي كبار سن، أريد حجز مقاعد أمامية بالباص، إلخ."
                        rows={2}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 text-white text-sm focus:outline-none focus:border-gold-500 hover:border-zinc-750 transition-colors placeholder:text-zinc-600"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Summary details & submit through WhatsApp */}
              {step === 4 && (
                <div className="space-y-6" id="booking-step-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-gold-500/10 text-gold-300">✨</span>
                    <span>4. مراجعة وتأكيد تفاصيل رحلتك</span>
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    من فضلك تحقق من البيانات المدخلة قبل إرسال طلب الحجز لمشرفي حملة الميقات لبدء إعداد مقاعدكم وغرفكم فوراً.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-zinc-950/60 p-5 rounded-xl border border-zinc-850 text-xs sm:text-sm" id="booking-receipt">
                    <div className="space-y-2">
                      <span className="block text-zinc-500 font-semibold">باقة السفر:</span>
                      <span className="block font-bold text-gold-300">{currentPackageObj?.name}</span>
                    </div>
                    <div className="space-y-2">
                      <span className="block text-zinc-500 font-semibold">تاريخ الانطلاق المفضل:</span>
                      <span className="block font-bold text-white font-mono">{booking.date}</span>
                    </div>
                    <div className="space-y-2">
                      <span className="block text-zinc-500 font-semibold">عدد الحجاج الكلي:</span>
                      <span className="block font-bold text-white">{booking.passengersCount} {booking.passengersCount === 1 ? "معتمر فردي" : "معتمرين ومرافقين"}</span>
                    </div>
                    <div className="space-y-2">
                      <span className="block text-zinc-500 font-semibold">نوع الإقامة والغرف:</span>
                      <span className="block font-bold text-white">
                        {roomOptions.find((r) => r.id === booking.roomType)?.label || booking.roomType}
                      </span>
                    </div>
                    <div className="col-span-1 sm:col-span-2 border-t border-zinc-850/60 pt-3 mt-1 text-right">
                      <span className="block text-zinc-500 font-semibold mb-1">صاحب الحجز:</span>
                      <span className="block font-semibold text-zinc-100">{booking.name} ({booking.phone})</span>
                    </div>
                  </div>

                  <div className="bg-zinc-950 p-4 border-l-2 border-gold-500 rounded-r-xl flex items-start gap-2.5">
                    <AlertCircle className="w-4.5 h-4.5 text-gold-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-400 text-xs leading-relaxed">
                      عند النقر أدناه سيتم توليد رسالة الحجز المنظمة وسننقلك لتطبيق واتساب لإرسالها للرقم <span className="text-white font-semibold font-mono">0565664984</span> ليقوم المشرف بالرد عليك فوراً بالأسعار والتعليمات.
                    </span>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>

          {/* Stepper Navigation Buttons */}
          <div className="flex items-center justify-between border-t border-zinc-850/60 pt-6 mt-8" id="booking-nav-buttons">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              disabled={step === 1}
              className={`flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm border transition-all ${
                step === 1
                  ? "opacity-0 pointer-events-none"
                  : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white"
              }`}
              id="booking-prev-step-btn"
            >
              <ArrowRight className="w-4 h-4" />
              <span>السابق</span>
            </button>

            {/* Next or Finish/WhatsApp send */}
            {step < 4 ? (
              <button
                onClick={handleNext}
                disabled={!validateStep()}
                className={`flex items-center gap-1.5 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer ${
                  validateStep()
                    ? "bg-gold-500 hover:brightness-110 text-zinc-950 shadow-gold-500/10"
                    : "bg-zinc-850 text-zinc-500 border border-zinc-800/40 cursor-not-allowed"
                }`}
                id="booking-next-step-btn"
              >
                <span>التالي</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            ) : (
              <div className="flex gap-2 w-full sm:w-auto">
                <a
                  href={generateWhatsAppURL()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-gold-500 over to-gold-400 hover:brightness-115 text-zinc-950 shadow-lg shadow-gold-500/20 active:scale-95 transition-all cursor-pointer"
                  id="booking-submit-whatsapp"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>إرسال الطلب عبر واتساب</span>
                </a>
              </div>
            )}
          </div>

        </div>

        {/* Quick direct contact card */}
        <div className="text-center">
          <p className="text-zinc-500 text-xs font-semibold mb-2">هل تفضل التحدث الهاتفي مباشرة؟</p>
          <a
            href="tel:0565664984"
            className="inline-flex items-center gap-2 text-zinc-300 hover:text-gold-300 transition-colors font-bold text-sm sm:text-base border-b border-dashed border-zinc-700 hover:border-gold-400 pb-1 font-mono"
            id="wizard-quick-call"
          >
            <Phone className="w-4 h-4 text-gold-300 shrink-0" />
            <span>0565664984 (اتصل بمشرف الرحلة مباشرة)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
