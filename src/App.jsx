import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { FeaturesSection, FeatureDetails, PricingSection, AboutContact } from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 font-inter">
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <FeatureDetails />
        <PricingSection />
        <AboutContact />
      </main>
      <footer className="border-t border-black/5 dark:border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} FluentBiz. Semua hak dilindungi.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#features" className="hover:opacity-80">Fitur</a>
            <a href="#pricing" className="hover:opacity-80">Harga</a>
            <a href="#about" className="hover:opacity-80">Tentang</a>
            <a href="#contact" className="hover:opacity-80">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
