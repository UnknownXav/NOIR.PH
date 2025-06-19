// app/page.tsx
export default function HomePage() {
  return (
    <main className="pt-20 scroll-smooth">
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to NOIR.PH</h1>
          <p className="text-lg">Your digital gaming lifestyle hub.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-white text-[#007fc8]">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg">NOIR.PH is a digital lifestyle brand focused on innovation and community.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p className="text-lg">Reach us at contact@noir.ph</p>
        </div>
      </section>
    </main>
  )
}
