export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 mb-3" />
          <p className="text-gray-600">Growth-focused marketing for modern brands.</p>
        </div>
        <div>
          <h4 className="text-gray-900 font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-blue-600">About</a></li>
            <li><a href="#" className="hover:text-blue-600">Careers</a></li>
            <li><a href="#" className="hover:text-blue-600">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-gray-900 font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Paid Media</li>
            <li>SEO</li>
            <li>Content</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div>
          <h4 className="text-gray-900 font-semibold mb-3">Contact</h4>
          <p className="text-gray-600">hello@elevatemarketing.com</p>
          <p className="text-gray-600">+1 (555) 123-4567</p>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm py-6 border-t border-gray-100">© {new Date().getFullYear()} Elevate Marketing. All rights reserved.</div>
    </footer>
  )
}
