"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#0f172a]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/images/Logo.svg"
              alt="Omid Teimory logo"
              width={56}
              height={56}
              className="w-14 h-14 rounded-md border border-white/20"
              priority
            />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-bold text-white">Omid Teimory</span>
              <span className="text-sm text-white/70 hover:text-white transition">
                See my resume
              </span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition ${
                isActive(item.href) ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <span className="px-3 py-1 text-xs font-semibold bg-green-600/20 border border-green-500/30 text-green-100 rounded-full">
            Open to work
          </span>
          <Link
            href="/contact"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition text-white shadow shadow-blue-900/40"
          >
            Get In Touch
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden text-white p-3 -mr-2"
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-md border-t border-white/10 px-6 py-5 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block text-base font-semibold transition ${
                isActive(item.href) ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="px-3 py-2 bg-green-600/20 border border-green-500/30 text-green-100 rounded-lg text-sm font-semibold">
            Open to work
          </div>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block w-full text-center px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition text-white"
          >
            Get In Touch
          </Link>
        </div>
      )}
    </header>
  );
}
