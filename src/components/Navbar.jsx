import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
    }`

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500" />
            <span className="text-lg font-semibold text-gray-800">UMKM Portal</span>
          </Link>
          <nav className="flex items-center gap-1">
            <NavLink to="/attendance" className={navLinkClass}>Attendance</NavLink>
            <NavLink to="/umkm" className={navLinkClass}>UMKM List</NavLink>
            <NavLink to="/register" className={navLinkClass}>Register UMKM</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
