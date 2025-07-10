'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const images = [
  '/images/slide1.png',
  '/images/slide2.png',
  '/images/slide3.png',
]

export default function HomePage() {
  const [current, setCurrent] = useState(0)

  // Auto-change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goNext = () => setCurrent((prev) => (prev + 1) % images.length)
  const goPrev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length)

  return (
    <main className="pt-24 font-sans text-[#007fc8] bg-[#f4f1ff] scroll-smooth">
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-4 scroll-mt-24"
        aria-labelledby="home-heading"
      >
        <div className="text-center max-w-2xl mb-10">
          <h1 id="home-heading" className="text-5xl font-bold mb-6">
            Welcome to NOIR.PH
          </h1>
          <p className="text-lg">
            Your lifestyle & esports destination. Gear up for innovation,
            gaming, and community.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative w-full max-w-4xl h-[300px] overflow-hidden rounded-xl shadow-lg">
          <Image
            src={images[current]}
            alt={`Slide ${current + 1}`}
            fill
            className="object-cover transition duration-700"
            priority
          />
          {/* Controls */}
          <button
            onClick={goPrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#007fc8] text-white px-3 py-2 rounded-full hover:bg-[#006bb0]"
          >
            ‹
          </button>
          <button
            onClick={goNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#007fc8] text-white px-3 py-2 rounded-full hover:bg-[#006bb0]"
          >
            ›
          </button>
        </div>
      </section>

      {/* About Section */}
      <section

        id="about"
        className="min-h-screen flex items-center justify-center px-4 bg-[#f4f1ff] text-[#007fc8] scroll-mt-24"
        aria-labelledby="about-heading"

      >
        <div className="text-center max-w-3xl">
          <h2 id="about-heading" className="text-4xl font-bold mb-6">
            About Us
          </h2>
          <p className="text-lg">
            NOIR.PH is a Philippine-based gaming community that unites players and creators through tournaments,
            events, and content across games like MLBB, CODM, Roblox, Valorant, and more.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
  id="contact"
  className="min-h-screen flex items-center justify-center px-4 scroll-mt-24"
  aria-labelledby="contact-heading"
>
  <div className="w-full max-w-2xl text-center">
    <h2 id="contact-heading" className="text-4xl font-bold mb-6">
      Contact Us
    </h2>
    <p className="text-lg mb-6">
      We’d love to hear from you! Reach out via the form below or follow us on social media.
    </p>

    {/* Social Media Links */}
    <div className="flex items-center justify-center gap-8 mb-8 text-[#007fc8] text-2xl">
  {/* TikTok */}
<a
  href="https://www.tiktok.com/@noir.ph"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="TikTok"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-10 h-10 hover:text-black"
  >
    <path d="M9.75 3A6.75 6.75 0 0 0 3 9.75v4.5A6.75 6.75 0 0 0 9.75 21a6.75 6.75 0 0 0 6.75-6.75v-4.5a.75.75 0 0 0-1.5 0v4.5a5.25 5.25 0 0 1-10.5 0v-4.5a5.25 5.25 0 0 1 10.5 0v.375a.75.75 0 0 0 1.5 0V9.75A6.75 6.75 0 0 0 9.75 3z" />
    <path d="M17.25 2.25a.75.75 0 0 0-.75.75v6.875a.75.75 0 0 0 .75.75A4.875 4.875 0 0 0 22.125 5.75a.75.75 0 0 0-.75-.75h-2.25a.75.75 0 0 0-.75.75v1.735a3.375 3.375 0 0 1-1.125-2.485V3a.75.75 0 0 0-.75-.75z" />
  </svg>
</a>

  {/* Facebook */}
  <a href="https://facebook.com/noir.ph07" target="_blank" aria-label="Facebook">
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10 hover:text-blue-800">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99h-2.54v-2.888h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.889h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
    </svg>
  </a>

  {/* Gmail */}
  <a href="mailto:noirph6@gmail.com" aria-label="Email">
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10 hover:text-red-600">
      <path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75a2.25 2.25 0 0 1-2.25-2.25V6.75Zm18.06 0L12 12.28 4.44 6.75h15.12Zm.69 1.32-6.714 5.36a2.25 2.25 0 0 1-2.772 0L3.75 8.07v9.18c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75V8.07Z" />
    </svg>
  </a>
</div>


    {/* Contact Form */}
    <form
  action="https://formspree.io/f/xyzn1234"
  method="POST"
  className="space-y-4 text-left"
>
  <div>
    <label htmlFor="name" className="block font-semibold mb-1">Name</label>
    <input
      id="name"
      name="name"
      type="text"
      required
      className="w-full px-4 py-2 border border-[#007fc8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#007fc8]"
    />
  </div>
  <div>
    <label htmlFor="email" className="block font-semibold mb-1">Email</label>
    <input
      id="email"
      name="email"
      type="email"
      required
      className="w-full px-4 py-2 border border-[#007fc8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#007fc8]"
    />
  </div>
  <div>
    <label htmlFor="message" className="block font-semibold mb-1">Message</label>
    <textarea
      id="message"
      name="message"
      rows={4}
      required
      className="w-full px-4 py-2 border border-[#007fc8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#007fc8]"
    ></textarea>
  </div>
  <button
    type="submit"
    className="mt-4 w-full py-3 bg-[#007fc8] text-white font-bold rounded-md hover:bg-[#006bb0] transition"
  >
    Send Message
  </button>
</form>

  </div>
</section>
    </main>
  )
}
