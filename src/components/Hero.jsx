import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 md:pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white dark:from-neutral-900/60 dark:via-neutral-900/70 dark:to-neutral-900 pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 border border-blue-200/60 dark:border-blue-400/20">
              <span>ERP • CRM • POS Terintegrasi</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight text-neutral-900 dark:text-white">
              Satu Platform untuk Kelola Bisnis Anda — ERP, CRM & POS Dalam Genggaman
            </h1>
            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 max-w-xl">
              Otomatiskan operasional, percepat penjualan, dan tingkatkan loyalitas pelanggan dengan satu solusi modern yang elegan dan mudah digunakan.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md text-white font-semibold shadow-lg hover:shadow-xl transition"
                style={{ backgroundColor: '#007BFF' }}
              >
                Coba Gratis Sekarang
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition text-neutral-800 dark:text-neutral-200">Lihat Fitur</a>
            </div>
          </motion.div>

          <div className="relative h-[360px] sm:h-[480px] lg:h-[540px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="absolute inset-4 rounded-xl bg-white/70 dark:bg-neutral-900/70 backdrop-blur border border-white/40 dark:border-white/10 shadow-xl"
            >
              <DashboardDemo />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SparkBar({ value, label, color = '#007BFF' }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 w-full rounded bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
        <motion.div initial={{ width: 0 }} animate={{ width: `${value}%` }} transition={{ duration: 0.8 }} className="h-full" style={{ backgroundColor: color }} />
      </div>
    </div>
  );
}

function DashboardDemo() {
  return (
    <div className="p-4 sm:p-6 grid md:grid-cols-2 gap-6 h-full">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-neutral-900 dark:text-white">Ringkasan Penjualan</h3>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">Realtime</span>
        </div>
        <AnimatedLineChart />
        <div className="grid grid-cols-3 gap-3">
          <Metric label="GMV" value="Rp 125jt" />
          <Metric label="Order" value="1.240" />
          <Metric label="Konversi" value="4.2%" />
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold text-neutral-900 dark:text-white">Kinerja Channel</h3>
        <SparkBar label="Toko" value={76} />
        <SparkBar label="Marketplace" value={58} color="#22c55e" />
        <SparkBar label="Online" value={64} color="#f59e0b" />
        <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-3">
          <span className="text-sm text-neutral-600 dark:text-neutral-300">Tooltip: Arahkan kursor ke grafik</span>
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 p-3">
      <div className="text-xs text-neutral-500 dark:text-neutral-400">{label}</div>
      <div className="text-lg font-semibold text-neutral-900 dark:text-white">{value}</div>
    </div>
  );
}

function AnimatedLineChart() {
  const points = [10, 30, 22, 45, 42, 60, 55, 68, 63, 85];
  return (
    <div className="relative">
      <svg viewBox="0 0 100 40" className="w-full h-28">
        <polyline
          fill="none"
          stroke="#007BFF"
          strokeWidth="2"
          points={points.map((p, i) => `${i * 10},${40 - p * 0.35}`).join(' ')}
        />
      </svg>
      <motion.div
        className="absolute left-0 top-0 h-28 w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
}
