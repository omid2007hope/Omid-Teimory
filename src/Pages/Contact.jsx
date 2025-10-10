// === src/pages/Contact.jsx ===
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
        <div className="absolute -z-10 -top-28 right-0 w-[520px] h-[520px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.18),_transparent_70%)]" />
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          Contact
        </motion.h1>
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5 text-slate-500" />
                <a
                  href="mailto:omidhope2007@gmail.com"
                  className="text-blue-700 hover:underline"
                >
                  omidhope2007@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-slate-500" />
                <a href="tel:+4368181580180" className="text-slate-700">
                  +43 681 815 801 80
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 p-6 bg-white"
          >
            <h3 className="text-xl font-bold mb-4">Send a message</h3>
            <form
              action="mailto:omidhope2007@gmail.com"
              method="post"
              className="grid gap-3"
            >
              <input
                className="rounded-lg border border-slate-300 bg-white px-3 py-2"
                placeholder="Name"
              />
              <input
                type="email"
                className="rounded-lg border border-slate-300 bg-white px-3 py-2"
                placeholder="Email"
              />
              <textarea
                rows={6}
                className="rounded-lg border border-slate-300 bg-white px-3 py-2"
                placeholder="Message"
              />
              <button className="justify-self-start rounded-xl bg-slate-900 text-white px-5 py-2.5 font-semibold hover:bg-slate-800">
                Send
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
