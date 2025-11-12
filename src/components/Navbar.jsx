import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white bg-blue-600' : 'text-gray-700 hover:text-blue-600'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500" />
          <span className="text-xl font-semibold text-gray-900">Elevate Marketing</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <a href="#services" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600">Services</a>
          <a href="#cases" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600">Case Studies</a>
          <a href="#pricing" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600">Pricing</a>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>
        <div className="md:hidden">
          <NavLink to="/contact" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">
            Get in touch
          </NavLink>
        </div>
      </div>
    </header>
  )
}
