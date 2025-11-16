const projects = [
  {
    title: 'Project Alpha',
    description: 'A sleek product landing experience with rich interactions and blazing performance.',
    image: '/projects/alpha.svg',
    link: '#'
  },
  {
    title: 'Project Beta',
    description: 'Data-driven dashboard with accessible components and dark mode.',
    image: '/projects/beta.svg',
    link: '#'
  },
  {
    title: 'Project Gamma',
    description: 'Lightweight microsite with delightful microinteractions and SEO best practices.',
    image: '/projects/gamma.svg',
    link: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Selected Projects</h2>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 text-sm font-medium hover:border-blue-300 hover:text-blue-700 transition-colors">Work with me</a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
