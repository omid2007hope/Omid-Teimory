function Home() {
  return (
    <div className="w-full min-h-screen bg-[#0f172a] text-white flex flex-col lg:flex-row px-6 lg:px-20 py-20">
      {/* LEFT – PHOTO STACK */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-16 lg:mb-0">
        <div className="relative">
          {/* Back Layers */}
          <div className="absolute w-64 sm:w-72 md:w-80 lg:w-96 h-80 sm:h-96 bg-blue-700 rounded-2xl -top-4 -left-4 opacity-70"></div>
          <div className="absolute w-64 sm:w-72 md:w-80 lg:w-96 h-80 sm:h-96 bg-slate-700 rounded-2xl -top-8 -left-8 opacity-50"></div>

          {/* Main Photo */}
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.5Qp2V7WQayY9pl6ZcFq_ZgHaHa?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt=""
            className="relative w-64 sm:w-72 md:w-80 lg:w-96 rounded-2xl border border-white/10 shadow-xl"
          />
        </div>
      </div>

      {/* RIGHT – TEXT CONTENT */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8">
        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
          Frontend Developer Crafting Intuitive Web Experiences.
        </h1>

        {/* DESCRIPTION */}
        <p className="text-white/70 text-lg leading-relaxed max-w-xl">
          A passionate frontend developer with a focus on building responsive,
          modern, user-friendly web applications. Specializing in React,
          Tailwind, and clean UI engineering. Currently mastering backend
          development with Node.js and databases to build complete full-stack
          solutions.
        </p>

        {/* SKILLS */}
        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "JavaScript",
            "Tailwind CSS",
            "HTML",
            "CSS",
            "Redux",
            "React Router",
            "GitHub",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white/10 rounded-lg border border-white/10 text-sm font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 pt-4">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
            View GitHub
          </button>

          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg font-semibold transition">
            Get In Touch
          </button>
        </div>

        {/* SOCIALS */}
        <div className="flex gap-10 pt-10">
          {[{ name: "GitHub" }, { name: "LinkedIn" }, { name: "X" }].map(
            (item) => (
              <div
                key={item.name}
                className="flex flex-col items-center space-y-2"
              >
                <button className="w-16 h-16 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition" />
                <span className="text-sm font-semibold">{item.name}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
