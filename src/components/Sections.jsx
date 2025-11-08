import { motion } from 'framer-motion';
import { CheckCircle, Users, Workflow, ShoppingCart } from 'lucide-react';
import { useState, useEffect } from 'react';

export function FeaturesSection() {
  const card = {
    initial: { opacity: 0, y: 24 },
    in: { opacity: 1, y: 0 },
  };
  return (
    <section id="features" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">Fitur Utama</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">Tiga modul inti yang saling terhubung untuk kelola bisnis secara menyeluruh.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div initial={card.initial} whileInView={card.in} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="group rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
            <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#EBF5FF' }}>
              <Workflow className="h-6 w-6" color="#007BFF" />
            </div>
            <h3 className="font-semibold text-neutral-900 dark:text-white">ERP</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Otomasi persediaan, pembelian, produksi, dan akuntansi dalam satu alur data.</p>
          </motion.div>
          <motion.div initial={card.initial} whileInView={card.in} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.1 }} className="group rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
            <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#ECFDF5' }}>
              <Users className="h-6 w-6" color="#22c55e" />
            </div>
            <h3 className="font-semibold text-neutral-900 dark:text-white">CRM</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Kelola prospek, pipeline penjualan, dan hubungan pelanggan secara proaktif.</p>
          </motion.div>
          <motion.div initial={card.initial} whileInView={card.in} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.2 }} className="group rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
            <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#FEF9C3' }}>
              <ShoppingCart className="h-6 w-6" color="#f59e0b" />
            </div>
            <h3 className="font-semibold text-neutral-900 dark:text-white">POS</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Kasir digital cepat dengan inventori real-time dan dukungan multi-cabang.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function FeatureDetails() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
        <ModuleERP />
        <ModuleCRM />
        <ModulePOS />
      </div>
    </section>
  );
}

function Card({ children }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-6">
      {children}
    </div>
  );
}

function ModuleERP() {
  return (
    <Card>
      <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">ERP — Alur Data</h3>
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="grid grid-cols-3 gap-3 text-center text-xs">
          {['Pembelian', 'Gudang', 'Produksi', 'Penjualan', 'Akuntansi', 'Laporan'].map((n, i) => (
            <motion.div key={n} className="rounded-md p-2 border border-neutral-200 dark:border-neutral-800" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
              {n}
            </motion.div>
          ))}
        </div>
        <motion.div className="mt-4 h-1 w-full rounded bg-blue-100 dark:bg-blue-950/50" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ transformOrigin: 'left', backgroundColor: '#007BFF33' }} />
      </motion.div>
    </Card>
  );
}

function ModuleCRM() {
  const bubbles = ['Lead', 'Prospect', 'Deal', 'Loyal'];
  return (
    <Card>
      <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">CRM — Kontak</h3>
      <div className="relative h-40">
        {bubbles.map((b, i) => (
          <motion.div key={b} className="absolute rounded-full px-3 py-1 text-xs bg-green-100/70 dark:bg-green-900/40 border border-green-200/60 dark:border-green-700/50" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} style={{ left: `${10 + i * 20}%`, top: `${10 + (i % 2) * 30}%` }}>
            {b}
          </motion.div>
        ))}
      </div>
      <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">Lacak interaksi, segmentasi, dan automasi follow-up secara visual.</p>
    </Card>
  );
}

function ModulePOS() {
  return (
    <Card>
      <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">POS — Simulasi Transaksi</h3>
      <motion.div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-4" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="flex items-center justify-between text-sm">
          <span>Item</span>
          <span>Qty</span>
          <span>Total</span>
        </div>
        {[['Kopi', 2, 30000], ['Roti', 1, 15000], ['Snack', 3, 27000]].map((row, i) => (
          <motion.div key={i} className="flex items-center justify-between text-sm py-2 border-b border-neutral-100 dark:border-neutral-800" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
            <span>{row[0]}</span>
            <span>{row[1]}</span>
            <span>Rp {row[2].toLocaleString('id-ID')}</span>
          </motion.div>
        ))}
        <div className="flex items-center justify-between pt-3 font-semibold">
          <span>Total</span>
          <span>Rp 72.000</span>
        </div>
      </motion.div>
    </Card>
  );
}

export function PricingSection() {
  const plans = [
      { name: 'Starter', priceM: 9, priceY: 90, features: ['Pengguna tunggal', 'Dasbor dasar', 'Email support'] },
      { name: 'Pro', priceM: 19, priceY: 190, features: ['Tim hingga 10', 'Automasi', 'Integrasi API'] },
      { name: 'Enterprise', priceM: 49, priceY: 490, features: ['Tak terbatas', 'SSO/SAML', 'Prioritas SLA'] },
  ];
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">Harga Fleksibel</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">Bayar bulanan atau hemat 2 bulan dengan paket tahunan.</p>
        </div>
        <PriceToggle plans={plans} />
      </div>
    </section>
  );
}

function PriceToggle({ plans }) {
  const [yearly, setYearly] = useState(true);
  return (
    <div>
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="text-sm text-neutral-600 dark:text-neutral-300">Bulanan</span>
        <button onClick={() => setYearly(!yearly)} className="relative inline-flex h-7 w-14 items-center rounded-full transition bg-neutral-200 dark:bg-neutral-800">
          <span className={`inline-block h-6 w-6 transform rounded-full bg-white dark:bg-neutral-700 shadow transition ${yearly ? 'translate-x-7' : 'translate-x-1'}`} />
        </button>
        <span className="text-sm text-neutral-600 dark:text-neutral-300">Tahunan</span>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <motion.div key={p.name} className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-6 hover:shadow-xl transition transform hover:scale-[1.02]" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
            <h3 className="font-semibold text-neutral-900 dark:text-white">{p.name}</h3>
            <div className="mt-3 text-3xl font-extrabold text-neutral-900 dark:text-white">
              ${yearly ? p.priceY : p.priceM}
              <span className="text-sm font-normal text-neutral-500 dark:text-neutral-400">/{yearly ? 'th' : 'bln'}</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" />{f}</li>
              ))}
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center px-4 py-2 rounded-md text-white font-medium shadow hover:shadow-lg transition focus:outline-none" style={{ backgroundColor: '#007BFF' }}>
              Mulai Gratis
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function AboutContact() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <About />
        <ContactForm />
      </div>
    </section>
  );
}

function About() {
  const stats = [
    { label: 'Pengguna', value: 12000 },
    { label: 'Tim', value: 45 },
    { label: 'Negara', value: 8 },
  ];
  return (
    <div id="about" className="space-y-6">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Tentang Kami</h2>
      <p className="text-neutral-600 dark:text-neutral-300">Kami membangun platform terpadu untuk mempercepat pertumbuhan bisnis melalui teknologi yang modern, aman, dan mudah digunakan.</p>
      <div className="grid grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <CountUp key={s.label} end={s.value} label={s.label} delay={i * 0.1} />
        ))}
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {['Raka', 'Dina', 'Tyo'].map((n, i) => (
          <motion.div key={n} className="rounded-xl p-4 border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-200 to-blue-400 dark:from-blue-500/30 dark:to-blue-700/30 mb-3" />
            <div className="font-semibold text-neutral-900 dark:text-white">{n}</div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">Product</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function CountUp({ end, label }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const duration = 800;
    const start = performance.now();
    let raf;
    const loop = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setValue(Math.floor(p * end));
      if (p < 1) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [end]);
  return (
    <div className="text-center rounded-lg border border-neutral-200 dark:border-neutral-800 p-4">
      <div className="text-2xl font-extrabold text-neutral-900 dark:text-white">{value.toLocaleString('id-ID')}</div>
      <div className="text-xs text-neutral-500 dark:text-neutral-400">{label}</div>
    </div>
  );
}

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  return (
    <div id="contact" className="space-y-6">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">Kontak</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          setTimeout(() => { setLoading(false); setSent(true); }, 800);
        }}
        className="space-y-4"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <input className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2" placeholder="Nama" required />
          <input type="email" className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2" placeholder="Email" required />
        </div>
        <input className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2" placeholder="Perusahaan" />
        <textarea className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2" placeholder="Pesan" rows={4} />
        <div className="flex items-center gap-3">
          <button type="submit" disabled={loading} className="inline-flex items-center justify-center px-5 py-2 rounded-md text-white font-medium shadow transition disabled:opacity-60" style={{ backgroundColor: '#007BFF' }}>
            {loading ? 'Mengirim…' : 'Kirim Pesan'}
          </button>
          {sent && <span className="text-sm text-green-600">Terkirim! Kami akan menghubungi Anda.</span>}
        </div>
      </form>
      <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
        <iframe title="Map" src="https://www.openstreetmap.org/export/embed.html?bbox=106.78%2C-6.25%2C107.0%2C-6.1&layer=mapnik" className="w-full h-56" />
      </div>
    </div>
  );
}
