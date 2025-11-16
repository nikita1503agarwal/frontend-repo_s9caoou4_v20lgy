export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-100 bg-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} UMKM Portal. Built for community and accessibility.</p>
      </div>
    </footer>
  )
}
