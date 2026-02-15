import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Screenshots from './components/Screenshots';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <Features />
      <HowItWorks />
      <Screenshots />
      <DownloadCTA />
      <Footer />
    </div>
  );
}

export default App;
