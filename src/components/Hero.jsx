export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-blue-700/80 font-semibold">Hello, I'm</p>
            <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">Your Name</h1>
            <p className="mt-3 text-lg text-gray-600 max-w-xl">Product-focused developer crafting clean, fast, and accessible experiences. I love turning ideas into polished products.</p>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">View Projects</a>
              <a href="#contact" className="px-5 py-3 rounded-lg bg-white border border-gray-200 text-gray-700 font-medium hover:border-blue-300 hover:text-blue-700 transition-colors">Contact Me</a>
            </div>
          </div>
          <div className="relative mx-auto lg:mx-0">
            <div className="relative h-48 w-48 sm:h-60 sm:w-60 lg:h-72 lg:w-72 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-white">
              <img src="/profile.svg" alt="Profile" className="h-full w-full object-cover" />
            </div>
            <div className="pointer-events-none absolute -z-10 inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-200/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
