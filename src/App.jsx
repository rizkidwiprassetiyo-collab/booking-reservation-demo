import React, { useMemo, useState } from "react";
import { ArrowRight, CalendarCheck, CheckCircle2, Clock, MapPin, MessageCircle, Scissors, ShieldCheck, Sparkles, Star, UserCheck, Users, WalletCards } from "lucide-react";
import { motion } from "framer-motion";

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
  "Pelanggan bisa memilih layanan dan jam booking",
  "Order langsung diarahkan ke WhatsApp",
  "Cocok untuk barbershop, klinik, bengkel, salon, studio, kursus, dan rental",
  "Bisa dikembangkan menjadi booking system dengan database dan admin panel",
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

export default function BookingReservationDemo() {
  const [selectedService, setSelectedService] = useState(services[1]);
  const [selectedDate, setSelectedDate] = useState("Hari ini");
  const [selectedTime, setSelectedTime] = useState("10.00");

  const whatsappLink = useMemo(() => {
    const message = `Halo, saya ingin booking ${selectedService.name} pada ${selectedDate} jam ${selectedTime}. Apakah masih tersedia?`;
    return `https://wa.me/6285692943604?text=${encodeURIComponent(message)}`;
  }, [selectedService, selectedDate, selectedTime]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.26),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-6 md:px-10 lg:px-12">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
                <CalendarCheck size={22} />
              </div>
              <div>
                <p className="font-semibold">BookingPro</p>
                <p className="text-xs text-slate-400">Demo Booking & Reservasi Online</p>
              </div>
            </div>
            <a href="#booking" className="hidden rounded-full border border-white/15 px-5 py-2 text-sm font-medium transition hover:bg-white hover:text-slate-950 md:inline-flex">
              Reservasi
            </a>
          </nav>

          <div className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.02fr_0.98fr]">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                <ShieldCheck size={16} />
                Booking online untuk bisnis jasa
              </div>
              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl md:leading-[1.05]">
                  Bikin pelanggan bisa pilih layanan, tanggal, dan jam reservasi lebih cepat.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                  Demo booking system untuk barbershop, klinik kecil, salon, bengkel, studio foto, rental, tempat kursus, atau bisnis appointment lain yang ingin proses reservasinya lebih rapi.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="#booking" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                  Pilih Jadwal
                  <ArrowRight size={17} />
                </a>
                <a href={whatsappLink} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Booking WhatsApp
                </a>
              </div>
              <div className="grid gap-3 pt-4 sm:grid-cols-3">
                {["Pilih layanan", "Pilih jam", "Kirim WhatsApp"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 size={17} className="text-cyan-300" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl shadow-slate-950/40 backdrop-blur">
              <div className="rounded-[1.5rem] bg-white p-5 text-slate-950">
                <div className="rounded-[1.25rem] bg-gradient-to-br from-cyan-100 via-white to-amber-100 p-5">
                  <div className="rounded-2xl border border-white/80 bg-white/85 p-5 shadow-xl backdrop-blur">
                    <p className="text-sm font-medium text-cyan-700">Preview Reservasi</p>
                    <h3 className="mt-3 text-2xl font-semibold">BookingPro Studio</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">Pilih layanan, tanggal, slot waktu, lalu kirim detail reservasi ke WhatsApp bisnis.</p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl bg-white p-4 shadow-sm">
                        <Scissors className="mb-2 text-cyan-600" size={19} />
                        3 layanan tersedia
                      </div>
                      <div className="rounded-2xl bg-white p-4 shadow-sm">
                        <Clock className="mb-2 text-cyan-600" size={19} />
                        8 slot waktu
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 p-4">
                    <Users className="mb-3 text-slate-700" size={20} />
                    <p className="text-sm font-semibold">Untuk bisnis appointment</p>
                    <p className="mt-1 text-xs text-slate-500">Salon, klinik, bengkel, kursus, rental</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-4">
                    <MessageCircle className="mb-3 text-slate-700" size={20} />
                    <p className="text-sm font-semibold">WhatsApp-ready</p>
                    <p className="mt-1 text-xs text-slate-500">Pesan otomatis terisi</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:px-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Manfaat</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Reservasi jadi lebih jelas sebelum pelanggan menghubungi.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((item) => (
            <div key={item} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <CheckCircle2 className="mb-4 text-cyan-600" size={20} />
              <p className="text-sm leading-7 text-slate-600">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="booking" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Booking</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Pilih layanan dan jadwal reservasi</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Demo ini belum menyimpan data ke database. Untuk versi client, sistem bisa dikembangkan menjadi booking dengan database, notifikasi, admin panel, dan riwayat reservasi.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5">
              <div>
                <h3 className="mb-4 text-xl font-semibold">1. Pilih layanan</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  {services.map((service) => (
                    <button
                      key={service.name}
                      onClick={() => setSelectedService(service)}
                      className={`rounded-3xl border p-5 text-left transition ${selectedService.name === service.name ? "border-cyan-400 bg-cyan-50 shadow-lg" : "border-slate-200 bg-white hover:bg-slate-50"}`}
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
                    </button>
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
                        className={`rounded-2xl border px-5 py-4 text-left text-sm font-medium transition ${selectedDate === date ? "border-cyan-400 bg-cyan-50" : "border-slate-200 bg-white hover:bg-slate-50"}`}
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
                        className={`rounded-2xl border px-4 py-3 text-sm font-medium transition ${selectedTime === time ? "border-cyan-400 bg-cyan-50" : "border-slate-200 bg-white hover:bg-slate-50"}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <aside className="h-fit rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Ringkasan Booking</p>
              <h3 className="mt-4 text-2xl font-semibold">{selectedService.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{selectedService.description}</p>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center justify-between rounded-2xl bg-white/[0.06] p-4">
                  <span className="text-slate-400">Harga</span>
                  <span className="font-semibold">{selectedService.price}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/[0.06] p-4">
                  <span className="text-slate-400">Durasi</span>
                  <span className="font-semibold">{selectedService.duration}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/[0.06] p-4">
                  <span className="text-slate-400">Tanggal</span>
                  <span className="font-semibold">{selectedDate}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/[0.06] p-4">
                  <span className="text-slate-400">Jam</span>
                  <span className="font-semibold">{selectedTime}</span>
                </div>
              </div>
              <a href={whatsappLink} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                Kirim Booking ke WhatsApp
                <MessageCircle size={17} />
              </a>
              <p className="mt-4 text-xs leading-6 text-slate-400">Tombol ini mengirim detail booking ke WhatsApp. Untuk versi lanjutan, data bisa disimpan ke database.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[0.86fr_1.14fr] lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Untuk Bisnis</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Cocok untuk banyak jenis bisnis berbasis jadwal.</h2>
            <p className="mt-5 text-sm leading-7 text-slate-400">Demo ini bisa disesuaikan menjadi sistem booking untuk berbagai layanan appointment.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Barbershop", "Klinik kecil", "Salon", "Bengkel", "Studio foto", "Tempat kursus", "Rental", "Konsultasi jasa"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-300">
                <UserCheck size={17} className="text-cyan-300" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Testimoni</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Reservasi yang terasa lebih profesional</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="mb-4 flex gap-1 text-cyan-500">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={17} fill="currentColor" />)}
                </div>
                <p className="text-sm leading-7 text-slate-600">“{item.text}”</p>
                <div className="mt-5 border-t border-slate-200 pt-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-cyan-400 p-8 text-slate-950 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em]">Demo Booking</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Buat proses reservasi lebih rapi dan mudah dipahami pelanggan.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-800">Untuk versi client, fitur ini bisa ditambah login admin, kalender, status booking, notifikasi, dan database.</p>
            </div>
            <a href={whatsappLink} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Booking Sekarang
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8 text-sm text-slate-500 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 md:flex-row md:items-center">
          <p>© 2026 BookingPro. Demo booking & reservasi by NoTech.</p>
          <div className="flex items-center gap-2">
            <WalletCards size={16} />
            Pilih layanan, tanggal, jam, dan kirim ke WhatsApp.
          </div>
        </div>
      </footer>
    </main>
  );
}
