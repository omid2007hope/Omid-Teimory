function Contact() {
  return (
    <div className="w-full min-h-screen bg-[#0f172a] text-white px-6 py-20 flex justify-center">
      <div className="w-full max-w-6xl">
        {/* HEADER */}
        <h1 className="text-4xl font-extrabold">Get in Touch</h1>
        <p className="text-white/70 text-lg mt-2 mb-12 max-w-2xl">
          Have a question or want to work together? Fill out the form below and
          I’ll get back to you as soon as possible.
        </p>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT – FORM */}
          <div className="lg:col-span-2 space-y-6">
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none text-white placeholder-white/50"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none text-white placeholder-white/50"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block mb-2 text-sm font-semibold">
                Subject
              </label>
              <input
                type="text"
                placeholder="What is this about?"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none text-white placeholder-white/50"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm font-semibold">
                Message
              </label>
              <textarea
                placeholder="Write your message here..."
                className="w-full h-40 px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none text-white placeholder-white/50 resize-none"
              ></textarea>
            </div>

            {/* SEND BUTTON */}
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition text-lg">
              Send Message
            </button>
          </div>

          {/* RIGHT – CONTACT BOX */}
          <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 h-fit space-y-6">
            <h2 className="text-xl font-bold">Contact Information</h2>

            {/* EMAIL */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center"></div>
              <div>
                <p className="text-white/60 text-sm">Email</p>
                <p className="font-semibold">omidhope2007@gmail.com</p>
              </div>
            </div>

            {/* LOCATION */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center"></div>
              <div>
                <p className="text-white/60 text-sm">Location</p>
                <p className="font-semibold">Vienna, Austria</p>
              </div>
            </div>

            <hr className="border-white/10" />

            {/* SOCIALS */}
            <div>
              <p className="text-white/60 text-sm mb-3">Find me on</p>

              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"></button>
                <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"></button>
                <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"></button>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col items-center space-y-4">
          <div className="flex gap-10 text-white/70">
            <a href="#" className="hover:text-white transition">
              Home
            </a>
            <a href="#" className="hover:text-white transition">
              Projects
            </a>
            <a href="#" className="hover:text-white transition">
              About
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>

          <div className="flex gap-6 pt-4">
            <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full" />
            <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full" />
            <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full" />
          </div>

          <p className="text-white/40 text-sm">
            © 2024 Omid Teimory. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
