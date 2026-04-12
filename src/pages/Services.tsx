import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="w-full pt-32 bg-surface">
      {/* Editorial Hero Section */}
      <section className="relative h-screen flex items-end overflow-hidden -mt-32">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCASU0X9ND4QPiOMAkQceydphxfYvGJQb9K7ecc2dwWh1yI-PLoM0ikjFfc2j9o9otViTI1vQH2GDk-b0hLuRiChjOO7c_QBeHdowrygVb9VxbIrSeeaGwC6DNf05A55Sc8nBd0lxPAPW1B0yJ7ceDI0EQCthIrkv91jKwmHrKEopvnjO5eMefL7-aKRZj0QF4rC42CHRnuipQnYn02gwd9imaePPCxDyf-OYvQ3MKSPwZ5-Uqp3X2Ad0FvZg4di0zSkFYnqBGP27g1"
            alt="Cinematic side profile of a sleek white luxury yacht gliding through deep blue Mediterranean waters at dusk"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001325]/80 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-24">
          <div className="max-w-4xl">
            <span className="block text-surface uppercase tracking-[0.4em] text-sm mb-6 opacity-80 font-label">
              Soluciones Marítimas Refinadas
            </span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-9xl text-surface leading-[0.9] tracking-tighter italic">
              Más allá del <br /> Horizonte
            </h1>
          </div>
        </div>
      </section>

      {/* Short Intro Section */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <h2 className="font-headline text-4xl md:text-5xl leading-tight text-primary">
              El Arte de la <br />Navegación Curada
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg md:text-xl text-primary/70 font-light leading-relaxed mb-8">
              En BLM1980 YACHT, definimos el yate como algo más que un transporte. Es un diálogo entre la ingeniería de precisión y la libertad ilimitada del mar. Nuestros servicios a medida están diseñados para aquellos que exigen discreción absoluta, experiencia inigualable y un estilo de vida sin fronteras.
            </p>
            <div className="w-24 h-[1px] bg-tertiary-container/30"></div>
          </div>
        </div>
      </section>

      {/* Expansive Blocks (Services) */}
      <section className="pb-20 md:pb-32 bg-surface">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 space-y-24 md:space-y-48">
          
          {/* Yacht Charter - Asymmetric Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-12">
            <div className="md:col-span-7 relative group">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX1EpCXtsT25o7cPCH5PWSkrUfNtp9b5Xc3jag3uyYMk3t6ilWaTz3tyB2H_JBu4-GrweFbI8F1JuFrdCbScQkhDSEtgxMiu5KR9xA069fodDHz_Rk6MhkmA3p41beIDtAFNIT08IbZWY8W4uyBlmSmyXfbx5ohFH9Er79fgqDsJwb-3f6jUy-BPDaQwRdlv1zSOZpfCrOpozBK6cHZz1sJkP5galjwZ0wiJbwE22j9Ph6RUzL1BbKgsj9flks5icqx662iHnLQhGy"
                  alt="Sun-drenched luxury yacht deck"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-12 -right-6 md:-right-12 bg-surface-container-low p-8 md:p-16 max-w-lg shadow-xl">
                <span className="text-on-tertiary-container font-semibold tracking-widest text-xs uppercase mb-4 block font-label">Viajes a Medida</span>
                <h3 className="font-headline text-3xl md:text-4xl text-primary mb-6">Chárter de Yates</h3>
                <p className="text-primary/70 mb-8 leading-relaxed">Acceda a una flota seleccionada de las embarcaciones más prestigiosas del mundo. Desde las aguas cristalinas de las Cícladas hasta los fiordos ocultos del Norte, nuestros chárteres se orquestan según sus especificaciones exactas.</p>

                <Link to="/contacto" className="inline-block border-b border-primary pb-1 text-sm font-bold uppercase tracking-wider hover:text-on-tertiary-container hover:border-on-tertiary-container transition-colors font-label">Explorar Flota</Link>
              </div>
            </div>
            <div className="md:col-span-4 md:col-start-9 hidden md:block">
              <div className="font-headline text-8xl text-primary/5 select-none rotate-90 origin-left translate-x-24">CHÁRTER</div>
            </div>
          </div>

          {/* Sales - Tonal Shift Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-12 pt-24 md:pt-0">
            <div className="md:col-span-5 md:order-2">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuEMK2wnFn7jJKDI4Ul-uOb02kAn9TeTfzhB3ZiAPzXtWxLn9LMnywKmdtdo7Sss6Ch0gr9v1Va_usOdoAp1O0MOsfFgWYKLS_AymleFhalqlgIXkhayB4iOwKpK-uUSE84-MWemtw49ErZlnsfyeW8EDe0OCAFymWwwlVh8B6lefxvyjTk5OXWBGkl2fNKpCXxBsZe99Yzm7Z2eTgnFTnphj6XxNnGmP5rvLbwE9yVgsHkcoIN0_ODTIAt6V5SQ9Ojat_p4IuehHh"
                  alt="Minimalist architectural detail of a superyacht stern"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="md:col-span-6 md:order-1 md:pr-12">
              <span className="text-on-tertiary-container font-semibold tracking-widest text-xs uppercase mb-4 block font-label">Adquisición Estratégica</span>
              <h3 className="font-headline text-4xl md:text-5xl text-primary mb-8 leading-tight">Venta y Corretaje <br />de Yates</h3>
              <p className="text-lg md:text-xl text-primary/70 mb-10 font-light leading-relaxed">
                Una red global de vendedores privados y astilleros garantiza que nuestros clientes reciban acceso prioritario a oportunidades fuera del mercado. Navegamos por las complejidades del derecho marítimo y la valoración técnica en su nombre.
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-4 text-primary/80"><span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span> Debida Diligencia Técnica</li>
                <li className="flex items-center gap-4 text-primary/80"><span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span> Acceso Global Fuera del Mercado</li>
                <li className="flex items-center gap-4 text-primary/80"><span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span> Negociación de Contratos</li>
              </ul>
              <Link to="/contacto" className="ghost-border inline-block px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-primary hover:text-surface transition-all duration-500 font-label">Ver Listados</Link>
            </div>
          </div>

          {/* Consultancy & Management - Editorial Style */}
          <div className="bg-surface-container-low p-8 md:p-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-on-tertiary-container font-semibold tracking-widest text-xs uppercase mb-4 block font-label">Excelencia Operativa</span>
              <h3 className="font-headline text-4xl md:text-5xl text-primary mb-8 leading-tight">Consultoría y Gestión</h3>
              <p className="text-primary/70 leading-relaxed text-lg mb-8">
                La propiedad debe ser sin esfuerzo. Nuestro equipo de gestión se encarga de la selección de la tripulación, los calendarios de mantenimiento y los informes financieros con precisión clínica, garantizando que su activo esté siempre impecable y listo para zarpar.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-outline-variant/30 pt-8">
                <div>
                  <h4 className="font-bold text-primary text-xs uppercase tracking-widest mb-2 font-label">Tripulación</h4>
                  <p className="text-sm text-primary/60">Personal experto para cada departamento.</p>
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xs uppercase tracking-widest mb-2 font-label">Técnico</h4>
                  <p className="text-sm text-primary/60">Mantenimiento predictivo y reformas.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                className="w-full aspect-video md:aspect-square object-cover shadow-2xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOzju8kieqkn7tuhtRIqdjsQUQ0vWs-dBu9129eJqfPRGggNRM34pNnr1j3Yj8vaOeEqnVxP9oNpSkcOQMDfVAQzkq--NTsD7ggu-QkGXc4LJDAysDAevVqT9ihTVygI_6_dxFuPnHd6rHMwgRCVzWtb7qBeKQ1dSgBgwQtEyL-4SCvIE79_QLxs-BaPS43Nh7NJjePADDb6w9rkVoTG1rcOK9kOSLVF569ZVfpjyp0cZiMHJk9ZvvyKvZYO-Va0y1p5ubDIs5O4NP"
                alt="Captain in bridge"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-8 -left-8 w-32 h-32 border-t border-l border-primary/20 hidden md:block"></div>
            </div>
          </div>

        </div>
      </section>

      {/* Charter Pricing Section */}
      <section className="py-24 md:py-32 bg-surface border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-on-tertiary-container font-semibold tracking-widest text-xs uppercase mb-4 block font-label">
                Tarifas de Chárter
              </span>
              <h2 className="font-headline text-4xl md:text-5xl text-primary">Opciones de Navegación</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-outline-variant/30">
            {/* Day Charter */}
            <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-outline-variant/30 hover:bg-surface-container-low transition-colors">
              <h3 className="font-headline text-3xl text-primary mb-2">Day Charter</h3>
              <p className="text-sm text-primary/60 uppercase tracking-widest font-label mb-12">(Salida de día)</p>
              
              <div className="mb-12">
                <span className="text-sm text-primary/60 uppercase tracking-widest font-label block mb-2">Desde</span>
                <div className="font-headline text-5xl text-primary">99 €</div>
              </div>

              <p className="text-primary/70 font-light leading-relaxed mb-12">
                Una escapada perfecta para disfrutar del mar Mediterráneo durante el día. Ideal para grupos pequeños, celebraciones o simplemente un día de desconexión total con servicio premium a bordo.
              </p>

              <Link to="/contacto" className="inline-block border-b border-primary pb-1 text-sm font-bold uppercase tracking-wider hover:text-on-tertiary-container hover:border-on-tertiary-container transition-colors font-label">
                Solicitar Disponibilidad
              </Link>
            </div>

            {/* Week Charter */}
            <div className="p-12 md:p-16 hover:bg-surface-container-low transition-colors relative">
              <h3 className="font-headline text-3xl text-primary mb-2">Week Charter</h3>
              <p className="text-sm text-primary/60 uppercase tracking-widest font-label mb-12">(Semana completa)</p>
              
              <div className="mb-12">
                <span className="text-sm text-primary/60 uppercase tracking-widest font-label block mb-2">Desde</span>
                <div className="font-headline text-5xl text-primary">6.999 €</div>
              </div>

              <p className="text-primary/70 font-light leading-relaxed mb-12">
                La experiencia definitiva de lujo marítimo. Despierte cada día en una cala diferente, con un itinerario completamente personalizado y una tripulación dedicada a superar sus expectativas.
              </p>

              <Link to="/contacto" className="inline-block border-b border-primary pb-1 text-sm font-bold uppercase tracking-wider hover:text-on-tertiary-container hover:border-on-tertiary-container transition-colors font-label">
                Planificar Travesía
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process/Methodology Section */}
      <section className="py-20 md:py-32 bg-primary-container text-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-headline text-4xl md:text-5xl mb-6">El Protocolo del Curador</h2>
            <p className="text-surface/60 uppercase tracking-[0.3em] text-xs font-label">Cuatro Pilares de Perfección</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <span className="font-headline text-5xl opacity-20">01</span>
              <h4 className="font-bold tracking-widest uppercase text-xs border-b border-surface/10 pb-4 font-label">Descubrimiento</h4>
              <p className="text-surface/70 text-sm leading-loose">Inmersión profunda en sus preferencias estéticas, deseos de navegación y requisitos logísticos.</p>
            </div>
            <div className="space-y-6">
              <span className="font-headline text-5xl opacity-20">02</span>
              <h4 className="font-bold tracking-widest uppercase text-xs border-b border-surface/10 pb-4 font-label">Curaduría</h4>
              <p className="text-surface/70 text-sm leading-loose">Aplicando inteligencia global para filtrar solo los barcos y rutas más relevantes para su perfil.</p>
            </div>
            <div className="space-y-6">
              <span className="font-headline text-5xl opacity-20">03</span>
              <h4 className="font-bold tracking-widest uppercase text-xs border-b border-surface/10 pb-4 font-label">Ejecución</h4>
              <p className="text-surface/70 text-sm leading-loose">Gestión fluida de la logística, los aspectos legales y el aprovisionamiento con soporte las 24 horas.</p>
            </div>
            <div className="space-y-6">
              <span className="font-headline text-5xl opacity-20">04</span>
              <h4 className="font-bold tracking-widest uppercase text-xs border-b border-surface/10 pb-4 font-label">Evolución</h4>
              <p className="text-surface/70 text-sm leading-loose">Gestión continua y planificación futura para asegurar que su estilo de vida marítimo crezca con usted.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 md:py-40 bg-surface text-center">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="font-headline text-5xl md:text-7xl text-primary mb-12 italic leading-[1.1]">El mar está esperando <br />sus órdenes.</h2>
          <p className="text-primary/60 mb-16 text-lg md:text-xl font-light">Contacte con nuestra oficina privada para comenzar su viaje náutico hoy mismo.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/contacto" className="cta-gradient text-on-primary px-12 py-5 font-bold uppercase tracking-widest text-xs rounded transition-all hover:opacity-90 font-label">Solicitar Consultoría</Link>
            <a href="#" className="ghost-border px-12 py-5 font-bold uppercase tracking-widest text-xs rounded text-primary hover:bg-primary-container hover:text-surface transition-all font-label">WhatsApp Directo</a>
          </div>
        </div>
      </section>
    </div>
  );
}
