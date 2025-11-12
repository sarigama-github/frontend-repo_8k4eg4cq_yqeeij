export default function Hero() {
  return (
    <section className="pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mb-4">
            <span>Performance Marketing SaaS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Scale your pipeline with data-driven marketing
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            We turn clicks into customers through paid media, SEO, and conversion optimization designed to maximize ROI.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#pricing" className="px-5 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700">View pricing</a>
            <a href="/contact" className="px-5 py-3 border border-gray-200 text-gray-900 rounded-md font-medium hover:border-gray-300">Talk to sales</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-blue-600/10 to-indigo-500/10 border border-blue-200/30" />
          <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-xl bg-blue-600/10 blur-2xl" />
        </div>
      </div>
    </section>
  )
}
