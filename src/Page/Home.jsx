function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col lg:flex-row bg-blue-900 text-blue-50 overflow-hidden pt-15">
      {/* LEFT – Images */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-5 relative">
        <div className="relative flex justify-center items-center">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.5Qp2V7WQayY9pl6ZcFq_ZgHaHa?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
            className=" z-100 w-48 sm:w-64 md:w-72 lg:w-80 xl:w-96 rounded-2xl border border-blue-950 shadow-xl"
            alt=""
          />

          <img
            src="https://tse4.mm.bing.net/th/id/OIP.5Qp2V7WQayY9pl6ZcFq_ZgHaHa?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
            className="z-75 w-40 sm:w-52 md:w-60 lg:w-72 xl:w-80 rounded-2xl border border-blue-950 absolute top-6 left-6 opacity-70 rotate-3"
            alt=""
          />

          <img
            src="https://tse4.mm.bing.net/th/id/OIP.5Qp2V7WQayY9pl6ZcFq_ZgHaHa?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
            className="z-50 w-40 sm:w-52 md:w-60 lg:w-72 xl:w-80 rounded-2xl border border-blue-950 absolute top-10 left-10 opacity-40 -rotate-3"
            alt=""
          />
        </div>
      </div>

      {/* RIGHT – Content */}
      <div className="w-full lg:w-1/2 flex flex-col px-6 sm:px-10 py-10 space-y-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug">
          Frontend Web Developer | HTML, CSS, React, Tailwind, Bootstrap, React
          Router DOM, Redux, GitHub | Studying Backend Development (Node.js,
          Databases)
        </h1>

        <p className="text-base sm:text-lg opacity-90 leading-relaxed">
          I’m a passionate and disciplined web developer focused on creating
          clean, responsive, high-performance interfaces with React and
          Tailwind. I'm now expanding into Node.js, databases, and full-stack
          app development.
        </p>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {[
            "HTML",
            "CSS",
            "Tailwind",
            "JavaScript",
            "React",
            "React Router",
            "Redux",
            "GitHub",
          ].map((skill) => (
            <div
              key={skill}
              className="px-4 py-2 font-semibold bg-white/20 rounded-lg text-center border border-white/10 backdrop-blur-sm"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-6 mt-4">
          <button className="px-6 py-3 border border-white/40 rounded-lg font-bold hover:bg-white/20 transition">
            View GitHub
          </button>

          <button className="px-6 py-3 border border-white/40 rounded-lg font-bold hover:bg-white/20 transition">
            Get In Touch
          </button>
        </div>

        {/* SOCIALS */}
        <div className="flex justify-start gap-10 pt-5">
          {[{ name: "GitHub" }, { name: "LinkedIn" }, { name: "X" }].map(
            (item) => (
              <div className="flex flex-col items-center" key={item.name}>
                <button className="w-16 h-16 border border-white/40 rounded-full hover:bg-white/20 transition"></button>
                <span className="mt-2 font-bold">{item.name}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
