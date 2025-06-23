// app/page.tsx
export default function HomePage() {
  return (
    <main className="pt-24 font-sans text-[#007fc8] bg-[#f4f1ff] scroll-smooth">
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 scroll-mt-24"
        aria-labelledby="home-heading"
      >
        <div className="text-center max-w-2xl">
          <h1 id="home-heading" className="text-5xl font-bold mb-6">
            Welcome to NOIR.PH
          </h1>
          <p className="text-lg">
            Your lifestyle & esports destination. Gear up for innovation,
            gaming, and community.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section

        id="about"
        className="min-h-screen flex items-center justify-center px-4 bg-[#f4f1ff]  text-[#007fc8] scroll-mt-24"
        aria-labelledby="about-heading"

      >
        <div className="text-center max-w-3xl">
          <h2 id="about-heading" className="text-4xl font-bold mb-6">
            About Us
          </h2>
          <p className="text-lg">
            NOIR.PH is a digital gaming lifestyle brand that merges technology,
            fashion, and esports. Our mission is to create an immersive
            experience for every gamer by providing exclusive content,
            community-driven events, and a premium platform for modern gamers.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-4 scroll-mt-24"
        aria-labelledby="contact-heading"
      >
        <div className="text-center max-w-xl">
          <h2 id="contact-heading" className="text-4xl font-bold mb-6">
            Contact Us
          </h2>
          <p className="text-lg mb-4">
            We love to hear from you. Feel free to reach out!
          </p>
          <a
            href="mailto:contact@noir.ph"
            className="inline-block px-6 py-3 bg-[#007fc8] text-white rounded-full font-semibold hover:bg-[#006bb0] transition"
          >
            Email Us
          </a>
        </div>
      </section>
    </main>
  );
}
