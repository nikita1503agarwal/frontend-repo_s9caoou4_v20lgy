import { useState } from 'react'

export default function UmkmRegister() {
  const [form, setForm] = useState({ name: '', contact: '', description: '', social: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  function updateField(k, v) {
    setForm(prev => ({ ...prev, [k]: v }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    try {
      const res = await fetch(`${backend}/api/umkm`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          contact: form.contact,
          description: form.description,
          social: form.social || null,
        })
      })
      if (!res.ok) throw new Error('Failed to register UMKM')
      setForm({ name: '', contact: '', description: '', social: '' })
      setSuccess(true)
    } catch (e) {
      alert(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-[70vh] bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h1 className="text-2xl font-semibold text-gray-800">UMKM Registration</h1>
          <p className="text-gray-500">Fill in the details below to register your business.</p>

          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">UMKM Name</label>
              <input value={form.name} onChange={e => updateField('name', e.target.value)} required className="mt-1 w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500" placeholder="e.g., Warung Sederhana" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">UMKM Contact</label>
              <input value={form.contact} onChange={e => updateField('contact', e.target.value)} required className="mt-1 w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500" placeholder="Phone, WhatsApp, or Email" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Short Description</label>
              <textarea value={form.description} onChange={e => updateField('description', e.target.value)} required rows="4" className="mt-1 w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500" placeholder="Tell us about your business..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Social Media (optional)</label>
              <input value={form.social} onChange={e => updateField('social', e.target.value)} className="mt-1 w-full rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500" placeholder="https://instagram.com/yourbusiness" />
            </div>

            <div className="flex items-center justify-between gap-4 mt-2">
              <button type="submit" disabled={loading} className="rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-medium px-5 py-2.5 transition-colors">{loading ? 'Submitting...' : 'Register UMKM'}</button>
              {success && <span className="text-sm text-green-600">Registered! Check the UMKM list.</span>}
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
