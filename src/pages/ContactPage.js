import React from "react";
import ContactHeader from "../components/contactPageComps/ContactHeader";
import ContactContent from "../components/contactPageComps/ContactContent";
import ContactPrice from "../components/contactPageComps/ContactPrice";
import Footer from "../layout/Footer";

export default function ContactPage() {
  return (
    <div>
      <ContactHeader />
      <ContactContent />
      <ContactPrice />
      <Footer />
    </div>
  );
}
