function Project() {
  const projects = [
    {
      title: "E-commerce Platform",
      desc: "A full-featured online store built with React and Redux for a seamless shopping experience.",
      img: "https://dummyimage.com/600x400/000/fff",
      tech: ["React", "TypeScript", "SCSS"],
    },
    {
      title: "Data Visualization Dashboard",
      desc: "An interactive dashboard displaying complex data sets with D3.js and React.",
      img: "https://dummyimage.com/600x400/000/fff",
      tech: ["React", "D3.js", "Styled-Components"],
    },
    {
      title: "Personal Blog",
      desc: "A personal blog platform created with Next.js and Markdown for fast content creation.",
      img: "https://dummyimage.com/600x400/000/fff",
      tech: ["Next.js", "Tailwind CSS", "MDX"],
    },
    {
      title: "Task Management App",
      desc: "A collaborative tool to organize and track team progress using Vue.js.",
      img: "https://dummyimage.com/600x400/000/fff",
      tech: ["Vue", "Vuex", "Firebase"],
    },
    {
      title: "Weather Forecast App",
      desc: "A simple weather application using a public API to fetch real-time data.",
      img: "https://dummyimage.com/600x400/000/fff",
      tech: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Recipe Finder Website",
      desc: "A web app to search recipes using available ingredients via an external API.",
      img: "https://dummyimage.com/600x400/000/fff",
      tech: ["React", "Context API", "Spoonacular API"],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#0f172a] text-white px-6 py-20 flex justify-center pt-25">
      <div className="w-full max-w-6xl">
        {/* HEADER */}
        <h1 className="text-3xl sm:text-4xl font-extrabold">
          Selected Projects
        </h1>
        <p className="text-white/70 text-lg mt-2 mb-10">
          A collection of my recent work, from personal projects to client
          applications.
        </p>

        {/* FILTER BUTTONS */}
        <div className="flex gap-4 mb-10">
          {["All", "React", "Vue", "Next.js"].map((filter) => (
            <button
              key={filter}
              className="px-5 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition font-medium"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition"
            >
              <div className="w-full h-48 rounded-xl overflow-hidden mb  5">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-xl font-bold mt-3">{project.title}</h2>
              <p className="text-white/60 mt-2 text-sm leading-relaxed">
                {project.desc}
              </p>

              {/* TECH BADGES */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs bg-white/10 border border-white/10 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4 mt-5">
                <button className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold">
                  Live Demo
                </button>
                <button className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-sm font-semibold">
                  Source
                </button>
              </div>
            </div>
          ))}
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

export default Project;
