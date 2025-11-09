import Hero from './components/Hero';
import About from './components/About';
import Media from './components/Media';
import InteractiveGallery from './components/InteractiveGallery';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-white antialiased">
      <Hero />
      <About />
      <Media />
      <InteractiveGallery />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;