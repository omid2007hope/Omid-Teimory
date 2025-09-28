import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  AtSymbolIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

export default function ContactSection() {
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const subject = data.get("subject") || "Contact from portfolio";
    const message = data.get("message");

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:omidhope2007@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
    e.currentTarget.reset();
  }

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 py-10 scroll-mt-64 mt-60"
    >
      <div className="rounded-2xl bg-white shadow ring-1 ring-blue-900/10 overflow-hidden">
        {/* Header stripe */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-6 py-4">
          <h2 className="text-xl md:text-2xl font-bold">Contact</h2>
        </div>

        <div className="p-6 md:p-8 grid gap-8 md:grid-cols-5">
          {/* Left: contact info cards */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 ring-1 ring-blue-900/10">
              <EnvelopeIcon className="w-5 h-5 mt-0.5" />
              <div>
                <p className="text-sm text-blue-900 font-semibold">Email</p>
                <a
                  href="mailto:omidhope2007@gmail.com"
                  className="text-blue-800 underline break-all"
                >
                  omidhope2007@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 ring-1 ring-blue-900/10">
              <PhoneIcon className="w-5 h-5 mt-0.5" />
              <div>
                <p className="text-sm text-blue-900 font-semibold">
                  Phone / WhatsApp
                </p>
                <a
                  href="tel:+4368181580180"
                  className="text-blue-800 underline"
                >
                  +43 681 815 801 80
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 ring-1 ring-blue-900/10">
              <AtSymbolIcon className="w-5 h-5 mt-0.5" />
              <div>
                <p className="text-sm text-blue-900 font-semibold">
                  X (Twitter)
                </p>
                <a
                  href="https://x.com/Omid2007hope"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-800 underline"
                >
                  @Omid2007hope
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 ring-1 ring-blue-900/10">
              <LinkIcon className="w-5 h-5 mt-0.5" />
              <div>
                <p className="text-sm text-blue-900 font-semibold">GitHub</p>
                <a
                  href="https://github.com/omid2007hope"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-800 underline break-all"
                >
                  github.com/omid2007hope
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 ring-1 ring-blue-900/10">
              <MapPinIcon className="w-5 h-5 mt-0.5" />
              <div>
                <p className="text-sm text-blue-900 font-semibold">Location</p>
                <p className="text-blue-950/90">Vienna, Austria</p>
              </div>
            </div>
          </div>

          {/* Right: message form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-blue-900"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="mt-1 w-full rounded-lg border-0 ring-1 ring-blue-900/15 focus:ring-2 focus:ring-blue-700 bg-white px-3 py-2 outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-blue-900"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-lg border-0 ring-1 ring-blue-900/15 focus:ring-2 focus:ring-blue-700 bg-white px-3 py-2 outline-none"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-blue-900"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  className="mt-1 w-full rounded-lg border-0 ring-1 ring-blue-900/15 focus:ring-2 focus:ring-blue-700 bg-white px-3 py-2 outline-none"
                  placeholder="Project, job opportunity, collaboration…"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-blue-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="mt-1 w-full rounded-lg border-0 ring-1 ring-blue-900/15 focus:ring-2 focus:ring-blue-700 bg-white px-3 py-2 outline-none"
                  placeholder="Write your message here…"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="rounded-lg bg-blue-900 text-white px-5 py-2.5 font-semibold hover:bg-blue-800 transition"
                >
                  Send Message
                </button>
                <a
                  href="mailto:omidhope2007@gmail.com"
                  className="rounded-lg bg-white text-blue-900 px-5 py-2.5 font-semibold ring-1 ring-blue-900/10 hover:ring-blue-900/20 transition"
                >
                  Email Directly
                </a>
              </div>

              <p className="text-xs text-blue-900/70">
                I answer fast. For urgent matters, call or WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
