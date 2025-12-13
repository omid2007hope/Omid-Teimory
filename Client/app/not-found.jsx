import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white px-6">
      <div className="max-w-xl text-center space-y-4">
        <p className="text-sm uppercase tracking-[0.15em] text-white/60">404</p>
        <h1 className="text-3xl font-extrabold">Page not found</h1>
        <p className="text-white/70">
          The page you are looking for does not exist. Try returning to the projects page or head back home.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
            Go Home
          </Link>
          <Link
            href="/projects"
            className="px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg font-semibold transition"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
