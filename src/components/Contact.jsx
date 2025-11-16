import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    // Simulate a fast, non-blocking submission
    setStatus({ state: 'loading', message: 'Sending...' })
    await new Promise((r) => setTimeout(r, 800))
    setStatus({ state: 'success', message: 'Thanks! I will get back to you shortly.' })
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="bg-gradient-to-t from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Get in touch</h2>
        <div className="mt-8 grid lg:grid-cols-2 gap-10">
          <form onSubmit={onSubmit} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" rows="5" required className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mt-6 flex items-center gap-3">
              <button type="submit" disabled={status.state==='loading'} className="inline-flex items-center px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors disabled:opacity-60">
                {status.state==='loading' ? 'Sending...' : 'Send message'}
              </button>
              {status.message && (
                <p className={`text-sm ${status.state==='success' ? 'text-green-600' : 'text-gray-500'}`}>{status.message}</p>
              )}
            </div>
          </form>

          <div className="space-y-4 text-gray-600">
            <p>Prefer email? Reach me directly:</p>
            <a href="mailto:you@example.com" className="inline-flex items-center text-blue-700 hover:underline">you@example.com</a>
            <div className="pt-4 flex gap-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">LinkedIn</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">GitHub</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
