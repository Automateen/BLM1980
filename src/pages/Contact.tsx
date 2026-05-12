import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full bg-surface">
      {/* Hero Header */}
      <section className="relative h-[60vh] flex items-end overflow-hidden mb-24">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Yate de lujo anclado en una bahía mediterránea"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001325]/90 via-[#001325]/40 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-24">
          <div className="max-w-4xl">
            <span className="block text-surface uppercase tracking-[0.4em] text-sm mb-6 opacity-80 font-label">
              Conecte con la Excelencia
            </span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-tighter text-surface leading-[0.9] mb-6">
              Comienza tu <br />
              <span className="italic">viaje a medida.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Information & Form Section */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-16">
            <div>
              <h3 className="font-headline text-2xl mb-6">Nuestro Atelier</h3>
              <p className="text-on-surface-variant leading-relaxed max-w-xs font-body">
                Quai l'Hirondelle,<br />
                98000 Mónaco,<br />
                Riviera Francesa
              </p>
            </div>
            
            <div>
              <h3 className="font-headline text-2xl mb-6">Canales Directos</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <Phone className="w-5 h-5 text-on-tertiary-container" />
                  <span className="font-label tracking-wide group-hover:text-on-tertiary-container transition-colors">
                    +377 93 10 41 00
                  </span>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                  <Mail className="w-5 h-5 text-on-tertiary-container" />
                  <span className="font-label tracking-wide group-hover:text-on-tertiary-container transition-colors">
                    contacto@blm1980yacht.com
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-headline text-2xl mb-6">Redes Sociales</h3>
              <div className="flex gap-8">
                <a className="font-label text-xs uppercase tracking-widest hover:text-on-tertiary-container transition-colors" href="#">
                  Instagram
                </a>
                <a className="font-label text-xs uppercase tracking-widest hover:text-on-tertiary-container transition-colors" href="#">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-8 bg-surface-container-low p-8 md:p-16">
            <h2 className="font-headline text-3xl mb-12">Envía tu consulta</h2>
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-label">
                    Nombre Completo
                  </label>
                  <input
                    className="luxury-input"
                    placeholder="Alexander Stirling"
                    type="text"
                  />
                </div>
                <div className="relative">
                  <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-label">
                    Correo Electrónico
                  </label>
                  <input
                    className="luxury-input"
                    placeholder="alexander@dominio.com"
                    type="email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-label">
                    Interés del Servicio
                  </label>
                  <select className="luxury-input appearance-none bg-transparent">
                    <option>Day Charter</option>
                    <option>Week Charter</option>
                    <option>Gestión de Flotas</option>
                    <option>Eventos Exclusivos</option>
                  </select>
                </div>
                <div className="relative">
                  <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-label">
                    Fecha Estimada
                  </label>
                  <input
                    className="luxury-input"
                    placeholder="Verano 2024"
                    type="text"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-label">
                  Requisitos Personales
                </label>
                <textarea
                  className="luxury-input resize-none"
                  placeholder="Describe tu visión para la experiencia marítima perfecta..."
                  rows={4}
                ></textarea>
              </div>

              <div className="pt-6">
                <button
                  className="group flex items-center gap-4 bg-primary text-on-primary px-10 py-5 rounded-DEFAULT hover:bg-primary-container transition-all"
                  type="submit"
                >
                  <span className="font-label uppercase tracking-[0.2em] text-xs font-bold">
                    Solicitar Consulta
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Final Visual Block */}
      <section className="w-full h-[600px] md:h-[716px] relative overflow-hidden group">
        <img
          alt="Yate de lujo anclado en una bahía mediterránea"
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
          src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        />
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-2xl px-6">
            <h2 className="text-surface font-headline text-4xl md:text-6xl mb-8 leading-tight">
              El horizonte te está esperando.
            </h2>
            <p className="text-surface/80 font-label tracking-widest text-sm uppercase">
              Curando lo extraordinario desde 1980
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
