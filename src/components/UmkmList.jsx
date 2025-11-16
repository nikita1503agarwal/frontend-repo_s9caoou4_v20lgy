import { useEffect, useState } from 'react'

function Card({ item }) {
  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">{item.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{item.description}</p>
        </div>
      </div>
      <div className="mt-4 text-sm">
        <div className="flex items-center gap-2 text-gray-700">
          <span className="font-medium">Contact:</span>
          <span className="break-all">{item.contact}</span>
        </div>
        {item.social && (
          <div className="flex items-center gap-2 text-gray-700 mt-1">
            <span className="font-medium">Social:</span>
            <a href={item.social} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline break-all">
              {item.social}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default function UmkmList() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetchList()
  }, [])

  async function fetchList() {
    setLoading(true)
    try {
      const res = await fetch(`${backend}/api/umkm`)
      const data = await res.json()
      setItems(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-[70vh] bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Registered UMKM</h1>
            <p className="text-gray-500">Discover local small businesses.</p>
          </div>
          <button onClick={fetchList} className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 transition-colors">Refresh</button>
        </div>

        {loading ? (
          <p className="mt-8 text-gray-500">Loading...</p>
        ) : (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.length === 0 ? (
              <div className="col-span-full text-center text-gray-500">No UMKM registered yet.</div>
            ) : (
              items.map(item => <Card key={item.id} item={item} />)
            )}
          </div>
        )}
      </div>
    </main>
  )
}
