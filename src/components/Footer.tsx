import { Phone, MessageSquare, MapPin, Landmark, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14" id="footer-links-grid">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col items-start text-right">
            <div className="flex items-center gap-2.5 mb-5 select-none text-white">
              <span className="text-xl font-bold leading-none">الميقات للعمرة</span>
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-gold-400 fill-current shrink-0"
              >
                <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
              </svg>
            </div>
            <p className="text-sm leading-relaxed text-zinc-500 mb-6">
              حملات عمرة منظمة برياً من مدينة الرياض إلى مكة المكرمة والمدينة المنورة، كأكثر الخيارات راحة وتكاملاً وموثوقية لرحلتكم الإيمانية المباركة.
            </p>
            {/* Quick Contact buttons in Footer */}
            <div className="flex gap-2">
              <a
                href="tel:0565664984"
                className="p-3.5 bg-zinc-900 hover:bg-zinc-800 text-gold-300 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors"
                id="footer-circle-call"
                aria-label="اتصال"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/966565664984"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 bg-zinc-900 hover:bg-zinc-800 text-gold-300 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors"
                id="footer-circle-whatsapp"
                aria-label="واتساب"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="text-right">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">روابط سريعة</h3>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleScrollTo("hero")} className="hover:text-gold-300 transition-colors cursor-pointer">الرئيسية</button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("packages")} className="hover:text-gold-300 transition-colors cursor-pointer">باقاتنا وعروضنا</button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("why-us")} className="hover:text-gold-300 transition-colors cursor-pointer">لماذا نحن</button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("fleet")} className="hover:text-gold-300 transition-colors cursor-pointer">أسطول باصاتنا</button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("hotels")} className="hover:text-gold-300 transition-colors cursor-pointer">فنادق مكة</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div className="text-right">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">تواصل معنا</h3>
            <ul className="space-y-4 text-xs sm:text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <a href="tel:0565664984" className="hover:text-gold-300 transition-colors font-mono font-semibold">0565664984</a>
              </li>
              <li className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <a href="https://wa.me/966565664984" className="hover:text-gold-300 transition-colors font-mono font-semibold">0565664984</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours & Support */}
          <div className="text-right">
            <h3 className="text-white font-bold text-sm tracking-wider mb-5">خدمة وحجز 24 ساعة</h3>
            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed mb-4">
              فريق خدمة العملاء متواجد طوال أيام الأسبوع على مدار الساعة للإجابة على تساؤلاتكم وحجوزات الحملة من الرياض.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>متاح الآن للحجز والاستفسار مباشر</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-600 gap-4" id="footer-attribution-panel">
          <p>© {currentYear} الميقات للعمرة. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-1.5">
            <span>رحلة عمرة مباركة وسكينة تامة</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
