export function Services() {
  const items = [
    { title: 'Paid Media', desc: 'Full-funnel campaigns across Google, Meta, and LinkedIn.' },
    { title: 'SEO', desc: 'Technical, on-page, and authority growth to win organic.' },
    { title: 'Content', desc: 'Editorial and creative that educates, inspires, and converts.' },
    { title: 'CRO', desc: 'Experiment-driven improvements that turn traffic into revenue.' },
  ]
  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">What we do</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">{it.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Cases() {
  const items = [
    { kpi: '3.4x', label: 'ROAS for DTC brand' },
    { kpi: '+218%', label: 'Organic traffic YoY' },
    { kpi: '-38%', label: 'CAC for SaaS client' },
  ]
  return (
    <section id="cases" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Proven results</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.label} className="p-6 rounded-xl border border-gray-100 bg-white text-center">
              <div className="text-4xl font-bold text-blue-600">{it.kpi}</div>
              <div className="text-gray-600 mt-2">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Pricing() {
  const tiers = [
    { name: 'Starter', price: '$2,500/mo', features: ['Ad mgmt', 'Monthly reporting', 'Email support'] },
    { name: 'Growth', price: '$6,000/mo', features: ['SEO + Paid', 'Bi-weekly syncs', 'Slack support'] },
    { name: 'Scale', price: 'Custom', features: ['Full-funnel', 'Attribution', 'Dedicated team'] },
  ]
  return (
    <section id="pricing" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Simple pricing</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="p-6 rounded-xl border border-gray-100 bg-white">
              <h3 className="font-semibold text-gray-900">{t.name}</h3>
              <div className="text-3xl font-bold mt-2">{t.price}</div>
              <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                {t.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>
              <a href="/contact" className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded-md">Get started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
