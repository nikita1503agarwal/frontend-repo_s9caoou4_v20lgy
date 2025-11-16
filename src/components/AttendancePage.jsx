import { useEffect, useMemo, useState } from 'react'

export default function AttendancePage() {
  const [name, setName] = useState('')
  const [now, setNow] = useState(new Date())
  const [loading, setLoading] = useState(false)
  const [records, setRecords] = useState([])

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    fetchRecords()
    return () => clearInterval(timer)
  }, [])

  const timeString = useMemo(() => now.toLocaleTimeString(), [now])

  async function fetchRecords() {
    try {
      const res = await fetch(`${backend}/api/attendance`)
      const data = await res.json()
      setRecords(data)
    } catch (e) {
      console.error(e)
    }
  }

  async function handleAttend(e) {
    e.preventDefault()
    if (!name.trim()) return
    setLoading(true)
    try {
      const res = await fetch(`${backend}/api/attendance`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
      })
      if (!res.ok) throw new Error('Failed to attend')
      setName('')
      await fetchRecords()
    } catch (e) {
      alert(e.message)
    } finally {
      setLoading(false)
    }
  }

  const uniqueNames = Array.from(new Set(records.map(r => r.name))).sort()

  return (
    <main className="min-h-[70vh] bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">Committee Attendance</h1>
              <p className="text-gray-500">Mark your presence and see who has checked in.</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-mono font-semibold text-blue-700">{timeString}</div>
              <p className="text-xs text-gray-500">Local time</p>
            </div>
          </div>

          <form onSubmit={handleAttend} className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <div className="flex gap-2">
                <input
                  list="committee"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Type or choose a name"
                  className="w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
                <datalist id="committee">
                  {uniqueNames.map(n => (
                    <option key={n} value={n} />
                  ))}
                </datalist>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-medium px-5 py-2.5 transition-colors"
            >
              {loading ? 'Saving...' : 'Attend'}
            </button>
          </form>

          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-100">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600">#</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600">Name</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {records.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="px-4 py-6 text-center text-gray-500">No attendance yet</td>
                  </tr>
                ) : (
                  records.map((r, idx) => (
                    <tr key={r.id} className="hover:bg-blue-50/40">
                      <td className="px-4 py-2 text-sm text-gray-600">{idx + 1}</td>
                      <td className="px-4 py-2 text-sm font-medium text-gray-800">{r.name}</td>
                      <td className="px-4 py-2 text-sm text-gray-600">{new Date(r.timestamp).toLocaleString()}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}
