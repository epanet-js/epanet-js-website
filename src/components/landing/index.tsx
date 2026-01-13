//import TrustedBy from "./trusted-by";
import Hero from "./hero";
import BottomCTA from "./bottom-cta";
import FrequentlyAskedQuestions from "./faq";
import Features from "./features";
import UserDilemma from "./user-dilemma";
import Footer from "./footer";
import MiddleCTA from "./middle-cta";
import OpenSource from "./open-source";
import Pricing from "./pricing";
import WhyWeBuilt from "./why-we-built";
//import Testimonials from "./testimonials";
//import TestimonialsAlt from "./testimonials-alt";
import CTAJustOpen from "./cta-just-open";
import HeaderNew from "./header-new";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderNew />
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Top CTA */}
        {/* <TrustedBy /> */}

        <UserDilemma />

        {/* Features Section */}
        <Features />
        {/* Newsletter Section */}
        <MiddleCTA />

        <OpenSource />

        {/* Testimonials Section 
        <TestimonialsAlt />
        <Testimonials />
        */}

        {/* Pricing Section */}
        <Pricing />

        {/* Middle CTA 

        <Newsletter />

        */}

        {/* FAQ Section */}
        <FrequentlyAskedQuestions />

        <CTAJustOpen />

        <WhyWeBuilt />

        {/* CTA Section */}
        <BottomCTA />
      </main>

      <Footer />
    </div>
  );
}
