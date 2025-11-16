import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AttendancePage from './components/AttendancePage'
import UmkmList from './components/UmkmList'
import UmkmRegister from './components/UmkmRegister'
import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <main className="min-h-[70vh] bg-gradient-to-br from-blue-50 to-indigo-50">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 tracking-tight">Community UMKM & Attendance Portal</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">A simple, modern, and friendly website to manage committee attendance and showcase registered UMKM.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/attendance" className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">Go to Attendance</Link>
            <Link to="/umkm" className="px-6 py-3 rounded-lg bg-white border border-gray-200 hover:border-blue-300 hover:text-blue-700 text-gray-700 font-medium transition-colors">View UMKM List</Link>
            <Link to="/register" className="px-6 py-3 rounded-lg bg-white border border-gray-200 hover:border-blue-300 hover:text-blue-700 text-gray-700 font-medium transition-colors">Register UMKM</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attendance" element={<AttendancePage />} />
        <Route path="/umkm" element={<UmkmList />} />
        <Route path="/register" element={<UmkmRegister />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
