import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-[#FAF7F2] py-20">
      <div className="absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-[#e6b800]/20 blur-3xl" />
      <section className="relative mx-auto max-w-7xl px-6">
        <h1 className="font-playfair text-4xl text-[#1A1A1A] sm:text-5xl">Visit Our Boutique</h1>
        <p className="mt-4 max-w-2xl text-[#1A1A1A]/70">Plan a private consultation with our design experts and discover handcrafted jewellery curated for your story.</p>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <form className="rounded-2xl border border-[#e6b800]/25 bg-white/70 p-8 shadow-[0_24px_60px_rgba(26,26,26,0.10)] backdrop-blur lg:col-span-2">
            <h2 className="font-playfair text-2xl text-[#1A1A1A]">Book an Appointment</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input className="rounded-xl border border-[#1A1A1A]/10 bg-white px-4 py-3 outline-none focus:border-[#c49a00]" placeholder="Full Name" />
              <input className="rounded-xl border border-[#1A1A1A]/10 bg-white px-4 py-3 outline-none focus:border-[#c49a00]" placeholder="Phone Number" />
              <input className="rounded-xl border border-[#1A1A1A]/10 bg-white px-4 py-3 outline-none focus:border-[#c49a00] sm:col-span-2" placeholder="Email Address" />
              <textarea className="min-h-32 rounded-xl border border-[#1A1A1A]/10 bg-white px-4 py-3 outline-none focus:border-[#c49a00] sm:col-span-2" placeholder="Tell us what you are looking for" />
            </div>
            <button className="mt-6 rounded-full bg-gradient-to-r from-[#e6b800] via-[#f2ca2a] to-[#c49a00] px-8 py-3 font-medium tracking-wide text-[#1A1A1A] shadow-[0_10px_24px_rgba(230,184,0,0.35)] transition hover:scale-[1.02]">Send Enquiry</button>
          </form>

          <div className="space-y-4">
            {[{icon:MapPin,title:'Boutique',value:'12 Heritage Avenue, New Delhi'},{icon:Phone,title:'Phone',value:'+91 98 7654 3210'},{icon:Mail,title:'Email',value:'care@luxejewels.com'}].map((item)=> (
              <div key={item.title} className="rounded-2xl bg-white p-5 shadow-sm">
                <item.icon className="text-[#c49a00]" size={20} />
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#1A1A1A]/50">{item.title}</p>
                <p className="mt-1 text-[#1A1A1A]">{item.value}</p>
              </div>
            ))}
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-medium text-white transition hover:scale-[1.02]">
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
