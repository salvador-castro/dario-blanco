const features = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: 'Experiencia Boutique',
    desc: 'Cada visita es una experiencia sensorial diseñada para relajarte y transformar tu look.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    ),
    title: 'Productos Premium',
    desc: 'Trabajamos exclusivamente con Kérastase y L\'Oréal Professionnel, lo mejor del mercado.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Atención Personalizada',
    desc: 'Diagnóstico y estilo a medida según tu rostro, textura y estilo de vida.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'Villa Urquiza',
    desc: 'Un espacio exclusivo en el corazón de Villa Urquiza, Buenos Aires.',
  },
]

export default function About() {
  return (
    <section id="nosotros" className="py-24 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: image + text */}
          <div>
            {/* Image */}
            <div className="relative mb-10 rounded-2xl overflow-hidden" style={{ height: '340px' }}>
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80&fit=crop"
                alt="Salon interior"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 60%)' }}
              />
              {/* floating badge */}
              <div
                className="absolute bottom-5 left-5 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)', color: '#C9A84C', backdropFilter: 'blur(10px)' }}
              >
                Villa Urquiza · CABA
              </div>
            </div>

            <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#C9A84C' }}>
              Quiénes somos
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6">
              Un espacio pensado para tu
              <span className="gold-gradient italic"> bienestar capilar</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Salon &amp; Boutique Darío Blanco es mucho más que una peluquería. Es un espacio
              exclusivo donde la técnica, el cuidado y los mejores productos se combinan para
              ofrecerte una experiencia única.
            </p>
            <p className="text-gray-400 leading-relaxed mb-10">
              Con la técnica de Visagismo como base de cada corte y tratamientos de marcas
              líderes como Kérastase y L'Oréal Professionnel, cada resultado es una obra de arte
              diseñada para vos.
            </p>

            <a
              href="https://wa.me/5491139259413"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block px-8 py-4 rounded-full text-sm"
            >
              Contactarnos
            </a>
          </div>

          {/* Right: feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-6"
                style={{ backgroundColor: '#111111', border: '1px solid #1e1e1e' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(201,168,76,0.1)', color: '#C9A84C' }}
                >
                  {f.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
