// components/Header.tsx
'use client'

export default function Header() {
  return (
    <header className="bg-[#f4f1ff] text-[#007fc8] border-b border-[#007fc8] fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">NOIR.PH</h1>

        <nav>
          <ul className="flex space-x-8 text-base font-bold">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}