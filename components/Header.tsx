'use client'

export default function Header() {
  return (
    <header
      className="bg-[#f4f1ff] text-[#007fc8] border-b border-[#007fc8] fixed top-0 w-full z-50 shadow-sm"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-extrabold tracking-wide">NOIR.PH</h1>

        <nav>
          <ul className="flex space-x-8 text-base font-bold">
            <li>
              <a
                href="#home"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007fc8]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007fc8]"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007fc8]"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
