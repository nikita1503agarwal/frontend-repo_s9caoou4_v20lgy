export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">About Me</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">I'm a developer with a background in computer science and a passion for building delightful, performant products. I focus on clean architecture, accessibility, and thoughtful interactions.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-sm font-semibold text-gray-700">Education</p>
                <p className="mt-1 text-sm text-gray-600">B.S. in Computer Science</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-100 shadow-sm">
                <p className="text-sm font-semibold text-gray-700">Career Goals</p>
                <p className="mt-1 text-sm text-gray-600">Build impactful products at scale, mentor teams, and keep learning.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <ul className="space-y-3 text-gray-600">
              <li>• Strong foundation in web fundamentals and UX principles</li>
              <li>• Experience delivering end‑to‑end features from concept to production</li>
              <li>• Pragmatic, collaborative, and user‑centric mindset</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
