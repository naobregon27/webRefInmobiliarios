import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Industries from '../components/Industries';
import Features from '../components/Features';
import Rewards from '../components/Rewards';
import HowItWorks from '../components/HowItWorks';
import Screenshots from '../components/Screenshots';
import DownloadCTA from '../components/DownloadCTA';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import LegalBanner from '../components/LegalBanner';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Industries />
      <Features />
      <Rewards />
      <HowItWorks />
      <Screenshots />
      <DownloadCTA />
      <FAQ />
      <Contact />
      <LegalBanner />
      <Footer />
    </div>
  );
}
