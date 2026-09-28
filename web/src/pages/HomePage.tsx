import Navbar from '../components/sections/Navbar';
import Hero from '../components/sections/Hero';
import Benefits from '../components/sections/Benefits';
import HowItWorks from '../components/sections/HowItWorks';
import PriorityAccess from '../components/sections/PriorityAccess';
import Zones from '../components/sections/Zones';
import AppSection from '../components/sections/AppSection';
import Faq from '../components/sections/Faq';
import Footer from '../components/sections/Footer';
import WaitlistModal from '../components/WaitlistModal';

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <PriorityAccess />
        <Zones />
        <AppSection />
        <Faq />
      </main>
      <Footer />
      <WaitlistModal />
    </div>
  );
}
