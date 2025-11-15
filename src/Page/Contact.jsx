import { Github, Linkedin, X, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    emailjs
      .send(
        "service_omid", // your service ID
        "template_omid", // your template ID
        {
          user_name: form.name,
          user_email: form.email,
          user_subject: form.subject,
          user_message: form.message,
        },
        "jM0uvw5dlLea-N5IA" // your public key
      )
      .then(
        () => {
          alert("Message sent successfully.");
          setForm({ name: "", email: "", subject: "", message: "" });
        },
        () => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div className="w-full min-h-screen bg-[#0f172a] text-white px-6 py-20 flex justify-center">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl font-extrabold">Get in Touch</h1>
        <p className="text-white/70 text-lg mt-2 mb-12 max-w-2xl">
          Have a question or want to work together? Fill out the form below and
          I’ll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
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
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none text-white placeholder-white/50"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none text-white placeholder-white/50"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full h-40 px-4 py-3 bg-white/5 border border-white/10 rounded-xl outline-none text-white placeholder-white/50 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition text-lg"
            >
              Send Message
            </button>
          </form>

          <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 h-fit space-y-6">
            <h2 className="text-xl font-bold">Contact Information</h2>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-sm">Email</p>
                <p className="font-semibold">omidhope2007@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-sm">Location</p>
                <p className="font-semibold">Vienna, Austria</p>
              </div>
            </div>

            <hr className="border-white/10" />

            <div>
              <p className="text-white/60 text-sm mb-3">Find me on</p>

              <div className="flex gap-4">
                <a
                  href="https://github.com/omid2007hope"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center justify-center"
                >
                  <Github />
                </a>

                <a
                  href="https://www.linkedin.com/in/omid-teimory-48233638b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center justify-center"
                >
                  <Linkedin />
                </a>

                <a
                  href="https://x.com/Omid2007hope"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center justify-center"
                >
                  <X />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col items-center space-y-4">
          <div className="flex gap-10 text-white/70">
            <a href="/" className="hover:text-white transition">
              Home
            </a>
            <a href="/projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="/about" className="hover:text-white transition">
              About
            </a>
            <a href="/contact" className="hover:text-white transition">
              Contact
            </a>
          </div>

          <div className="flex gap-6 pt-4">
            <a
              href="https://github.com/omid2007hope"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition"
            >
              <Github />
            </a>

            <a
              href="https://www.linkedin.com/in/omid-teimory-48233638b"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition"
            >
              <Linkedin />
            </a>

            <a
              href="https://x.com/Omid2007hope"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition"
            >
              <X />
            </a>
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
