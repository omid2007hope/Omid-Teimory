import Link from "next/link";
import { Github, Linkedin, X } from "lucide-react";

export default function Footer({ showLinks = true }) {
  return (
    <footer className="mt-20 border-t border-white/10 pt-8 flex flex-col items-center space-y-4">
      {showLinks && (
        <div className="flex gap-10 text-white/70">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/projects" className="hover:text-white transition">
            Projects
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>
      )}

      <div className="flex gap-6 pt-4">
        <a
          href="https://github.com/omid2007hope"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition"
          aria-label="GitHub profile"
        >
          <Github />
        </a>

        <a
          href="https://www.linkedin.com/in/omid-teimory-48233638b"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition"
          aria-label="LinkedIn profile"
        >
          <Linkedin />
        </a>

        <a
          href="https://x.com/Omid2007hope"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 transition"
          aria-label="X profile"
        >
          <X />
        </a>
      </div>

      <p className="text-white/40 text-sm">© 2025 Omid Teimory. All Rights Reserved.</p>
    </footer>
  );
}
