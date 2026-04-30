export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero-dario-blanco.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,1) 100%)",
        }}
      />

      {/* Decorative side lines */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 opacity-30">
        <div
          className="w-px h-24"
          style={{
            background: "linear-gradient(to bottom, transparent, #C9A84C)",
          }}
        />
        <span
          className="text-xs tracking-[0.3em] uppercase text-gray-400"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-24"
          style={{
            background: "linear-gradient(to bottom, #C9A84C, transparent)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p
          className="text-xs tracking-[0.4em] uppercase mb-6"
          style={{ color: "#C9A84C" }}
        >
          Villa Urquiza · Buenos Aires
        </p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-normal text-white leading-tight mb-4">
          Salon &amp; Boutique
        </h1>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold italic mb-8 gold-gradient">
          Darío Blanco
        </h2>

        <p className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
          Una experiencia de belleza exclusiva donde cada detalle está pensado
          para vos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5491139259413"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-8 py-4 rounded-full text-base inline-block"
          >
            Reservar turno
          </a>
          <a
            href="#servicios"
            className="btn-outline-gold px-8 py-4 rounded-full text-base inline-block"
          >
            Ver servicios
          </a>
        </div>

        <div className="mt-20 flex justify-center">
          <div className="flex flex-col items-center gap-2 opacity-40">
            <div
              className="w-px h-12"
              style={{
                background: "linear-gradient(to bottom, #C9A84C, transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
