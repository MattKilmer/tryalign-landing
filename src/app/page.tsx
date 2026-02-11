import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SampleAgreement from "@/components/SampleAgreement";
import Safety from "@/components/Safety";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <SampleAgreement />
        <Safety />
        <Download />
      </main>
      <Footer />
    </>
  );
}
