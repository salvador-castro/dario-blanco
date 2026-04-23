const services = [
  {
    emoji: '✨',
    name: 'Ritual Capilar Boutique',
    price: '$85.000',
    tag: 'Experiencia estrella',
    description: 'Una experiencia sensorial completa de 60 min. Masaje Cráneo-Capilar, tratamiento premium y Modelado Boutique.',
    includes: ['Diagnóstico', 'Lavado sensorial', 'Masaje capilar 5–15 min', 'Tratamiento (nutrición/hidratación)', 'Toalla caliente', 'Climazon', 'Coffe Break', 'Modelado Boutique'],
    highlight: true,
    img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&q=80&fit=crop&crop=center',
  },
  {
    emoji: '✂️',
    name: 'Corte Signature',
    price: '$35.000',
    tag: 'Personalizado',
    description: 'Corte diseñado en base a tu rostro con técnica de Visagismo, textura y estilo de vida.',
    includes: [],
    highlight: false,
    img: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80&fit=crop&crop=top',
  },
  {
    emoji: '💨',
    name: 'Secado / Modelado Boutique',
    price: '$12.000',
    tag: 'Modelado & Styling',
    description: 'Acabado perfecto trabajando forma, textura y movimiento con técnicas profesionales de styling.',
    includes: [],
    highlight: false,
    img: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80&fit=crop&crop=top',
  },
  {
    emoji: '✂️',
    name: 'Experiencia Corte + Modelado Boutique',
    price: '$47.000',
    tag: 'Incluye lavado',
    description: 'Diseñamos tu corte ideal y lo finalizamos con un Modelado Boutique que potencia forma, textura y brillo.',
    includes: [],
    highlight: false,
    img: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80&fit=crop&crop=center',
  },
  {
    emoji: '💎',
    name: 'Kérastase Force Architecte',
    price: '$59.000',
    tag: 'Servicio Premium',
    description: 'Tratamiento reparador profundo para cabello frágil con puntas quebradizas. La fibra recupera resistencia y fuerza.',
    includes: [],
    highlight: false,
    img: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80&fit=crop&crop=center',
  },
  {
    emoji: '🌿',
    name: 'Kérastase Nutritive Masquintense',
    price: '$59.000',
    tag: 'Servicio Premium',
    description: 'Máscara ultraconcentrada para cabello seco. Hasta +89% de hidratación inmediata y nutrición 72H.',
    includes: [],
    highlight: false,
    img: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80&fit=crop&crop=center',
  },
  {
    emoji: '💫',
    name: 'Brushing',
    price: 'Desde $22.000',
    tag: 'Según largo',
    description: 'Brushing profesional con herramientas y productos de calidad premium. Brillo, suavidad y peinado duradero.',
    includes: [],
    highlight: false,
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&fit=crop&crop=center',
  },
  {
    emoji: '🎨',
    name: 'Retoque de Raíz Majirel L\'Oréal',
    price: '$65.000',
    tag: 'Hasta 2 cm',
    description: 'Coloración permanente profesional. 100% cobertura de canas, paleta de colores vibrantes y tacto sedoso.',
    includes: [],
    highlight: false,
    img: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=600&q=80&fit=crop&crop=top',
  },
]

function ServiceCard({ service }) {
  return (
    <div
      className={`service-card rounded-2xl flex flex-col overflow-hidden ${
        service.highlight ? 'border-2' : 'border'
      }`}
      style={{
        backgroundColor: '#111111',
        borderColor: service.highlight ? '#C9A84C' : '#1e1e1e',
        boxShadow: service.highlight ? '0 0 40px rgba(201,168,76,0.1)' : 'none',
      }}
    >
      {/* Card image */}
      <div className="relative h-40 overflow-hidden flex-shrink-0">
        <img
          src={service.img}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(17,17,17,0.95) 100%)' }}
        />
        {service.highlight && (
          <span
            className="absolute top-3 left-3 text-xs tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ backgroundColor: 'rgba(201,168,76,0.85)', color: '#000', fontWeight: 600 }}
          >
            Más popular
          </span>
        )}
      </div>

      {/* Card content */}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs tracking-widest uppercase" style={{ color: '#C9A84C' }}>
              {service.tag}
            </p>
            <h3 className="font-display text-white text-xl mt-1 leading-snug">
              {service.name}
            </h3>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="font-display text-xl font-semibold" style={{ color: '#C9A84C' }}>
              {service.price}
            </p>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>

        {service.includes.length > 0 && (
          <ul className="flex flex-col gap-1 mt-1">
            {service.includes.map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs text-gray-500">
                <span style={{ color: '#C9A84C' }}>·</span>
                {item}
              </li>
            ))}
          </ul>
        )}

        <a
          href="https://wa.me/5491139259413"
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-auto block text-center py-3 px-5 rounded-full text-sm font-medium transition-all duration-200 ${
            service.highlight ? 'btn-gold' : 'btn-outline-gold'
          }`}
        >
          Reservar
        </a>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase mb-3" style={{ color: '#C9A84C' }}>
            Nuestros servicios
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white">
            Tratamientos &amp; Experiencias
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Cada servicio es pensado para realzar tu belleza natural con técnicas de vanguardia y productos premium.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s) => (
            <ServiceCard key={s.name} service={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
