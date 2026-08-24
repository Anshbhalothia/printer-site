import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Workflow from "@/components/WorkFlow";
import { WhatWeOffer } from "@/components/WhatWeOffer";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar/>
      <Hero />
      <Categories/>
      <Workflow/>
      <WhatWeOffer />
      <WhyChooseUs />
      <Newsletter />
      <Footer />
    </main>
  );
}