import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending...' })
    try {
      const res = await fetch(`${backend}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error((await res.json()).detail || 'Failed to send')
      setStatus({ type: 'success', message: 'Thanks! We will get back to you shortly.' })
      setForm({ name: '', email: '', company: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900">Contact sales</h1>
          <p className="text-gray-600 mt-2">Tell us about your goals and we’ll reach out within 1 business day.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Company</label>
              <input name="company" value={form.company} onChange={handleChange} className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows="5" required className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <button disabled={status.type==='loading'} className="px-5 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 disabled:opacity-60">
              {status.type==='loading' ? 'Sending...' : 'Send message'}
            </button>
            {status.type !== 'idle' && (
              <p className={`${status.type==='success' ? 'text-green-600' : status.type==='error' ? 'text-red-600' : 'text-gray-600'} text-sm`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
