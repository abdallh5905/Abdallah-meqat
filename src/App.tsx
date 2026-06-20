import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import Packages from "./components/Packages";
import WhyChooseUs from "./components/WhyChooseUs";
import BusFleet from "./components/BusFleet";
import Hotels from "./components/Hotels";
import ComparisonTable from "./components/ComparisonTable";
import BookingWizard from "./components/BookingWizard";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  const [selectedPackageId, setSelectedPackageId] = useState<string>("economic");

  // Handler to smoothly scroll to the booking section and preset the chosen package
  const handleSelectPackage = (packageId: string) => {
    setSelectedPackageId(packageId);
    const bookingSection = document.getElementById("booking-section");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans select-none overflow-x-hidden antialiased bg-[#0c0c0e]">
      {/* Brand Header & Mobile menu drawer */}
      <Header />

      <main className="flex-1">
        {/* Hero Section with key badging and primary WhatsApp CTA */}
        <Hero />

        {/* Riyadh-to-Mecca Route Transition Map Card and Core Feature Blocks */}
        <FeatureGrid />

        {/* Package Offers: VIP Premium vs Economic with direct hook to state */}
        <Packages onSelectPackage={handleSelectPackage} />

        {/* Why Choose Us details */}
        <WhyChooseUs />

        {/* Fleet Selector: 2027 Economic vs VIP bus specs & layouts */}
        <BusFleet />

        {/* Selected Hotel Partners Toggles (3-star vs VOCO/Millennium 5-star) */}
        <Hotels />

        {/* Feature-by-feature Comparison Table */}
        <ComparisonTable />

        {/* Interactive Multi-step Booking Form wizard, compiling into custom WhatsApp messages */}
        <BookingWizard
          selectedPackageId={selectedPackageId}
          onSetSelectedPackageId={setSelectedPackageId}
        />

        {/* Comprehensive FAQ Accordions list */}
        <FAQs />
      </main>

      {/* Footer Navigation & contact information details */}
      <Footer />

      {/* Floating high-conversion direct call & green WhatsApp triggers */}
      <FloatingWhatsApp />
    </div>
  );
}
