export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 bg-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-4 sm:flex sm:items-center sm:justify-between">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-700 transition-colors" aria-label="Twitter">Twitter</a>
          <a href="#" className="hover:text-gray-700 transition-colors" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" className="hover:text-gray-700 transition-colors" aria-label="GitHub">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
