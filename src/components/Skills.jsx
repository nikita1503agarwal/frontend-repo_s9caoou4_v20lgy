const skills = {
  Technical: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'REST APIs', 'SQL/NoSQL', 'Testing', 'CI/CD'],
  'Design & UX': ['Accessibility', 'Responsive Design', 'Design Systems', 'Prototyping'],
  'Soft Skills': ['Communication', 'Leadership', 'Mentorship', 'Problem Solving'],
}

export default function Skills() {
  return (
    <section id="skills" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Skills</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">{category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium border border-blue-100">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
