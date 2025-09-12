import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CommunityIntro from '@/components/CommunityIntro';
import AskGenDemo from '@/components/AskGenDemo';
import AskGenOnyx from '@/components/AskGenOnyx';
import MarketNumbers from '@/components/MarketNumbers';
import Journey from '@/components/Journey';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import ScrollToAnchor from '@/components/ScrollToAnchor';

function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <main>
          <Hero />
          <CommunityIntro />
          <AskGenDemo />
          <AskGenOnyx />
          <MarketNumbers />
          <Journey />
          <Pricing />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
