import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const saved = localStorage.getItem('theme');
    const isDark = saved ? saved === 'dark' : prefersDark;
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-sm font-medium">
      <li><a href="#home" className="hover:opacity-80 transition-opacity" onClick={() => setOpen(false)}>Beranda</a></li>
      <li><a href="#features" className="hover:opacity-80 transition-opacity" onClick={() => setOpen(false)}>Fitur</a></li>
      <li><a href="#pricing" className="hover:opacity-80 transition-opacity" onClick={() => setOpen(false)}>Harga</a></li>
      <li><a href="#about" className="hover:opacity-80 transition-opacity" onClick={() => setOpen(false)}>Tentang</a></li>
      <li><a href="#contact" className="hover:opacity-80 transition-opacity" onClick={() => setOpen(false)}>Kontak</a></li>
    </ul>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md" style={{ backgroundColor: '#007BFF' }}>
              <Rocket className="h-4 w-4 text-white" />
            </span>
            <span className="text-neutral-900 dark:text-white">FluentBiz</span>
          </a>

          <nav className="hidden md:block text-neutral-700 dark:text-neutral-300">
            <NavLinks />
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              className="rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/10 transition"
              onClick={() => setDark((d) => !d)}
              title={dark ? 'Mode terang' : 'Mode gelap'}
            >
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <a
              href="#pricing"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-md text-white font-medium shadow hover:shadow-md transition"
              style={{ backgroundColor: '#007BFF' }}
            >
              Coba Gratis
            </a>
            <button
              className="md:hidden rounded-md p-2 hover:bg-black/5 dark:hover:bg-white/10"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden py-3 text-neutral-800 dark:text-neutral-200">
            <NavLinks />
          </div>
        )}
      </div>
    </header>
  );
}
