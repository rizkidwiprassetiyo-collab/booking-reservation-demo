import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  WalletCards,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const whatsappNumber = "6285692943604";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.62, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const services = [
  {
    name: "Basic Service",
    duration: "30 menit",
    price: "Rp75.000",
    description: "Layanan cepat untuk kebutuhan sederhana dengan hasil rapi dan waktu pengerjaan singkat.",
  },
  {
    name: "Standard Service",
    duration: "60 menit",
    price: "Rp125.000",
    description: "Pilihan paling seimbang untuk pelanggan umum yang butuh hasil lebih lengkap.",
    popular: true,
  },
  {
    name: "Premium Service",
    duration: "90 menit",
    price: "Rp225.000",
    description: "Layanan lebih detail untuk kebutuhan khusus dengan prioritas hasil maksimal.",
  },
];

const timeSlots = ["09.00", "10.00", "11.00", "13.00", "14.00", "15.00", "16.00", "19.00"];

const benefits = [
  "Pelanggan bisa memilih layanan dan jam booking sebelum chat.",
  "Admin menerima pesan WhatsApp yang sudah berisi detail reservasi.",
  "Cocok untuk bisnis appointment yang ingin terlihat lebih rapi.",
  "Bisa dikembangkan menjadi booking system dengan database dan dashboard admin.",
];

const businessTypes = [
  "Barbershop",
  "Klinik kecil",
  "Salon",
  "Bengkel",
  "Studio foto",
  "Tempat kursus",
  "Rental",
  "Konsultasi jasa",
];

const testimonials = [
  {
    name: "Fajar Nugroho",
    role: "Pelanggan",
    text: "Lebih mudah pilih jadwal tanpa harus chat bolak-balik. Tinggal pilih layanan dan jam yang tersedia.",
  },
  {
    name: "Nadia Putri",
    role: "Owner Bisnis Jasa",
    text: "Sistem booking seperti ini membuat bisnis terlihat lebih profesional dan rapi di mata pelanggan.",
  },
  {
    name: "Reno Saputra",
    role: "Pelanggan",
    text: "Informasi harga, durasi, dan jadwalnya jelas. Proses reservasi jadi lebih cepat.",
  },
];

const faq = [
  {
    q: "Apakah booking ini langsung menyimpan data?",
    a: "Demo ini belum menyimpan data ke database. Untuk versi client, booking bisa disimpan ke database dan dilihat dari dashboard admin.",
  },
  {
    q: "Apakah bisa dipakai untuk bisnis selain barbershop?",
    a: "Bisa. Struktur ini cocok untuk salon, klinik kecil, bengkel, kursus, rental, studio foto, atau jasa appointment lain.",
  },
  {
    q: "Apakah bisa ditambah notifikasi otomatis?",
    a: "Bisa. Versi lanjutan dapat ditambah notifikasi WhatsApp, email, status booking, dan kalender admin.",
  },
];

function buildWhatsappLink(service, date, time) {
  const message = `Halo, saya ingin booking ${service.name} pada ${date} jam ${time}. Apakah masih tersedia?`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function BookingReservationPremiumDemo() {
  const [selectedService, setSelectedService] = useState(services[1]);
  const [selectedDate, setSelectedDate] = useState("Hari ini");
  const [selectedTime, setSelectedTime] = useState("10.00");

  const whatsappLink = useMemo(() => buildWhatsappLink(selectedService, selectedDate, selectedTime), [selectedService, selectedDate, selectedTime]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#04101a] text-white selection:bg-cyan-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.20),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_28%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.045] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:52px_52px]" />

      <section className="relative z-10 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-7 md:px-10 lg:px-12">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.45 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 shadow-[0_0_42px_rgba(34,211,238,0.30)]"
              >
                <CalendarCheck size={23} />
              </motion.div>
              <div>
                <p className="font-semibold tracking-wide">BookingPro</p>
                <p className="text-xs text-slate-400">Demo Booking & Reservasi Online</p>
              </div>
            </div>
            <a
              href="#booking"
              className="hidden rounded-full border border-white/15 bg-white/[0.04] px-5 py-2 text-sm font-semibold text-slate-200 backdrop-blur transition hover:border-cyan-200/60 hover:bg-white hover:text-slate-950 md:inline-flex"
            >
              Reservasi
            </a>
          </nav>

          <div className="grid items-center gap-12 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
            <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-7">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_34px_rgba(34,211,238,0.08)] backdrop-blur">
                <ShieldCheck size={16} />
                Booking online untuk bisnis jasa
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.04]">
                  Bikin pelanggan bisa pilih layanan, tanggal, dan jam reservasi lebih cepat.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                  Demo booking system untuk barbershop, klinik kecil, salon, bengkel, studio foto, rental, tempat kursus, atau bisnis appointment lain yang ingin proses reservasinya lebih rapi.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#booking"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.25)] transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Pilih Jadwal
                  <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                </a>
                <a
                  href={whatsappLink}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Booking WhatsApp
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="grid gap-3 pt-4 sm:grid-cols-3">
                {["Pilih layanan", "Pilih jam", "Kirim WhatsApp"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 size={17} className="text-cyan-300" />
                    {item}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28, rotateX: 8 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[2.75rem] bg-cyan-400/10 blur-3xl" />
              <div className="relative rounded-[2.25rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-slate-950/35 backdrop-blur-xl">
                <div className="rounded-[1.75rem] bg-white p-5 text-slate-950">
                  <div className="rounded-[1.4rem] bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_32%),linear-gradient(135deg,#ecfeff,#ffffff,#fef3c7)] p-5">
                    <div className="rounded-3xl border border-white/80 bg-white/85 p-5 shadow-2xl shadow-cyan-950/10 backdrop-blur">
                      <p className="text-sm font-semibold text-cyan-700">Preview Reservasi</p>
                      <h3 className="mt-3 text-2xl font-semibold">BookingPro Studio</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        Pilih layanan, tanggal, slot waktu, lalu kirim detail reservasi ke WhatsApp bisnis.
                      </p>
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-2xl bg-white p-4 shadow-lg shadow-slate-200/60">
                          <Scissors className="mb-3 text-cyan-600" size={20} />
                          <p className="text-sm font-medium">3 layanan tersedia</p>
                        </div>
                        <div className="rounded-2xl bg-white p-4 shadow-lg shadow-slate-200/60">
                          <Clock className="mb-3 text-cyan-600" size={20} />
                          <p className="text-sm font-medium">8 slot waktu</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <Users className="mb-3 text-slate-700" size={20} />
                      <p className="text-sm font-semibold">Untuk appointment</p>
                      <p className="mt-1 text-xs text-slate-500">Salon, klinik, bengkel, kursus</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <MessageCircle className="mb-3 text-slate-700" size={20} />
                      <p className="text-sm font-semibold">WhatsApp-ready</p>
                      <p className="mt-1 text-xs text-slate-500">Pesan otomatis terisi</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Fokus", "Bisnis Appointment", "Dibuat untuk bisnis yang menerima pelanggan berdasarkan jadwal, layanan, atau reservasi tertentu."],
            ["Tujuan", "Chat Lebih Efisien", "Calon pelanggan sudah memilih layanan dan waktu sebelum masuk ke WhatsApp admin."],
            ["Brand", "Demo by NoTech", "Contoh booking ini dibuat sebagai bagian dari portofolio NoTech Digital Studio."],
          ].map(([label, title, description]) => (
            <motion.div whileHover={{ y: -6 }} key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-xl shadow-slate-950/20 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{label}</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.03]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.78fr_1.22fr] lg:px-12"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Manfaat</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Reservasi jadi lebih jelas sebelum pelanggan menghubungi.</h2>
            <p className="mt-5 text-sm leading-7 text-slate-400">Demo ini membantu calon client memahami fungsi sistem booking tanpa harus melihat sistem yang terlalu kompleks.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((item) => (
              <motion.div whileHover={{ y: -6 }} key={item} className="rounded-[2rem] border border-white/10 bg-slate-950/55 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur">
                <CheckCircle2 className="mb-5 text-cyan-300" size={21} />
                <p className="text-sm leading-7 text-slate-300">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="booking" className="relative z-10 bg-white py-20 text-slate-950">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Booking</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Pilih layanan dan jadwal reservasi</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Demo ini belum menyimpan data ke database. Untuk versi client, sistem bisa dikembangkan menjadi booking dengan database, notifikasi, admin panel, dan riwayat reservasi.</p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="space-y-6">
              <div>
                <h3 className="mb-4 text-xl font-semibold">1. Pilih layanan</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  {services.map((service) => (
                    <motion.button
                      variants={fadeUp}
                      whileHover={{ y: -6 }}
                      key={service.name}
                      onClick={() => setSelectedService(service)}
                      className={`rounded-[2rem] border p-5 text-left transition ${selectedService.name === service.name ? "border-cyan-400 bg-cyan-50 shadow-2xl shadow-cyan-950/10" : "border-slate-200 bg-slate-50 hover:bg-white"}`}
                    >
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <p className="font-semibold">{service.name}</p>
                        {service.popular && <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800">Populer</span>}
                      </div>
                      <p className="text-sm leading-6 text-slate-600">{service.description}</p>
                      <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 text-sm">
                        <span className="font-semibold">{service.price}</span>
                        <span className="text-slate-500">{service.duration}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-semibold">2. Pilih hari</h3>
                  <div className="grid gap-3">
                    {["Hari ini", "Besok", "Lusa"].map((date) => (
                      <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`rounded-2xl border px-5 py-4 text-left text-sm font-medium transition ${selectedDate === date ? "border-cyan-400 bg-cyan-50" : "border-slate-200 bg-slate-50 hover:bg-white"}`}
                      >
                        {date}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-semibold">3. Pilih jam</h3>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`rounded-2xl border px-4 py-3 text-sm font-medium transition ${selectedTime === time ? "border-cyan-400 bg-cyan-50" : "border-slate-200 bg-slate-50 hover:bg-white"}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.aside variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="h-fit rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Ringkasan Booking</p>
              <h3 className="mt-4 text-2xl font-semibold">{selectedService.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{selectedService.description}</p>
              <div className="mt-6 space-y-3 text-sm">
                {[
                  ["Harga", selectedService.price],
                  ["Durasi", selectedService.duration],
                  ["Tanggal", selectedDate],
                  ["Jam", selectedTime],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between rounded-2xl bg-white/[0.06] p-4">
                    <span className="text-slate-400">{label}</span>
                    <span className="font-semibold">{value}</span>
                  </div>
                ))}
              </div>
              <a href={whatsappLink} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                Kirim Booking ke WhatsApp
                <MessageCircle size={17} />
              </a>
              <p className="mt-4 text-xs leading-6 text-slate-400">Tombol ini mengirim detail booking ke WhatsApp. Untuk versi lanjutan, data bisa disimpan ke database.</p>
            </motion.aside>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Target Client</p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Cocok untuk banyak jenis bisnis berbasis jadwal.</h2>
          <p className="mt-5 text-sm leading-7 text-slate-400">Demo ini bisa disesuaikan menjadi sistem booking untuk berbagai layanan appointment.</p>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2">
          {businessTypes.map((item) => (
            <motion.div whileHover={{ x: 6 }} key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-sm text-slate-300 backdrop-blur">
              <CheckCircle2 size={17} className="text-cyan-300" />
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 bg-white py-20 text-slate-950">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Testimoni</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Reservasi yang terasa lebih profesional</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <motion.div variants={fadeUp} whileHover={{ y: -8 }} key={item.name} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-2xl hover:shadow-cyan-950/10">
                <div className="mb-4 flex gap-1 text-cyan-500">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={17} fill="currentColor" />)}
                </div>
                <p className="text-sm leading-7 text-slate-600">“{item.text}”</p>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="font-semibold">{item.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Pertanyaan umum calon client</h2>
        </motion.div>
        <div className="space-y-4">
          {faq.map((item) => (
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} key={item.q} className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur">
              <h3 className="font-semibold text-white">{item.q}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="overflow-hidden rounded-[2.25rem] border border-cyan-200/30 bg-cyan-400 p-8 text-slate-950 shadow-[0_0_80px_rgba(34,211,238,0.22)] md:p-10 lg:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.48fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm text-cyan-100">
                <Zap size={16} />
                Booking siap diarahkan ke WhatsApp
              </div>
              <h2 className="text-3xl font-semibold md:text-4xl">Butuh sistem booking yang lebih rapi untuk bisnis appointment?</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-800 md:text-base">
                Sistem seperti ini bisa dikembangkan menjadi booking dengan database, kalender, dashboard admin, dan notifikasi.
              </p>
            </div>
            <a href={whatsappLink} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Booking Sekarang
              <ArrowRight size={17} />
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-sm text-slate-500 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 md:flex-row md:items-center">
          <p>© 2026 BookingPro. Demo Booking & Reservasi Online.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <Sparkles size={16} />
            Demo by NoTech Digital Studio
          </div>
        </div>
      </footer>
    </main>
  );
}
