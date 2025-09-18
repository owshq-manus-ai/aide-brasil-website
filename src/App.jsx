import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import FinalCTA from '@/components/FinalCTA';
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
          <About />
          <Products />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
