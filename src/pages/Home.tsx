import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Yate de lujo"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaPmGqcV2521_6jD_ROItoudv0SWMeZfVmwTv4s7YL8xuTYeK8tn5xG6X_SN6_vgsnLOdqxnj-9OIjUqPsnk_qOzUw9RWtlZPU88xS-Jhr2rsF0s0aTbdGAAOnBEh7rdqS8V9qmzqn5EEfm-T-9FSwFFHnXwJDATrMZAO2LVheF1FKb_rA7jjNG7EBZm6fL1I8CvWeadUOIUd_9U42WregRLLJW7tGobXaEBuq4glWYQ8wxQb9L5lqGMHafJi0s-3LwRLZhWT69b3v"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 px-6 md:px-24">
          <span className="text-white tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">
            MÁS ALLÁ DEL HORIZONTE
          </span>
          <h1 className="text-6xl md:text-8xl text-white font-bold mb-4 tracking-tight">
            BLM1980 Yacht
          </h1>
          <h2 className="text-white tracking-[0.1em] uppercase text-sm md:text-md mb-6 font-semibold">
            Donde el mar se convierte en experiencia
          </h2>
          <p className="text-white/90 text-sm md:text-base max-w-xl mb-12 leading-relaxed uppercase">
            CHÁRTER, COMPRAVENTA, REFIT Y GESTIÓN INTEGRAL DE EMBARCACIONES CON MÁS DE 20 AÑOS DE EXPERIENCIA.
          </p>
          <Link
            to="/servicios"
            className="inline-block bg-[#3b3531] text-white px-8 py-4 uppercase tracking-widest text-xs font-medium rounded hover:bg-[#2d2825] transition-colors"
          >
            CONÓCENOS MÁS <span className="ml-2">▶</span>
          </Link>
        </div>
      </section>

      {/* Brand Presentation Block */}
      <section className="bg-white py-24 px-6 relative overflow-hidden">
        {/* Background compass/rose detail hint */}
        <div className="absolute top-48 left-16 md:left-48 w-96 h-96 bg-gray-100 rounded-full opacity-30 select-none z-0 pointer-events-none flex items-center justify-center">
            <span className="text-8xl text-gray-200">✛</span>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs uppercase tracking-widest text-gray-600 font-semibold">
                SOBRE NOSOTROS
              </span>
              <div className="w-12 h-[1px] bg-gray-600"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              ¿Quiénes somos?
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base mb-10">
              <p>
                En BLM1980 Yacht no solo trabajamos con barcos, trabajamos con confianza. Llevamos más de dos décadas ayudando a propietarios y clientes a disfrutar del mar con total tranquilidad.
              </p>
              <p>
                Desde el alquiler de embarcaciones hasta la gestión integral y mantenimiento, ofrecemos un servicio completo, profesional y adaptado a cada necesidad.
              </p>
              <p>
                Nuestra misión es hacer de cada travesía una experiencia única, ocupándonos de que todo esté siempre en perfectas condiciones. ¡Tú solo preocúpate de disfrutar!
              </p>
            </div>
            <a
              href="#"
              className="inline-block self-start bg-[#3b3531] text-white px-8 py-4 uppercase tracking-widest text-xs font-medium rounded hover:bg-[#2d2825] transition-colors"
            >
              MÁS INFORMACIÓN
            </a>
          </div>
          <div className="relative pt-10 px-4 md:px-0">
            <div className="w-[90%] aspect-[4/3] rounded-[3rem] overflow-hidden ml-auto">
              <img
                alt="Catamaran al atardecer"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlbWcJWMWoA-I79Aprw-6nkYfMjJrpDSv7bqwe3HpF8XHQ6810BjzrHZl2gS9uYxK3jqaZuYCvlf9KX8PrLq8SlCS1RxcNy1PQ2rLzzUExiDSWLSFCDiaaovSET_Axd_quz76vJyRKYrPViVyEGBgQ4AmP19f9wbIFlhQdjmx_mP8o9pvdspkk1QWPAKUA22-TFQg0P8yg5Lwq09MJe40tc4ZJk7dKwC13od13_hKwAhFC8QJVEbmkPTIgQva-ygebrJpQSdZaNnzQ"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 right-0 md:-left-8 w-48 aspect-[3/4] border-4 border-white rounded-[1.5rem] overflow-hidden z-20">
              <img
                alt="Patrón conduciendo"
                className="w-full h-full object-cover"
                src="/Charter.jpg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mt-32 text-center relative z-10">
          <div>
            <span className="text-5xl font-bold text-gray-900 block mb-2">20<span className="text-3xl">+</span></span>
            <span className="text-sm text-gray-600">Años de experiencia</span>
          </div>
          <div>
            <span className="text-5xl font-bold text-gray-900 block mb-2">50<span className="text-3xl">+</span></span>
            <span className="text-sm text-gray-600">Barcos gestionados</span>
          </div>
          <div>
            <span className="text-5xl font-bold text-gray-900 block mb-2">+500</span>
            <span className="text-sm text-gray-600">Clientes satisfechos</span>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="bg-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2 block">
              ¿QUÉ OFRECEMOS?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Servicios destacados</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Charter */}
            <div className="flex flex-col">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-gray-100">
                <img
                  alt="Servicio de Chárter"
                  className="w-full h-full object-cover"
                  src="/corretaje.jpg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Chárter</h3>
              <p className="text-gray-600 mb-6 text-sm flex-grow">
                Alquiler de embarcaciones y experiencias a medida, desde salidas de día hasta travesías completas. Disfruta con total tranquilidad.
              </p>
              <Link to="/servicios" className="self-start bg-[#3b3531] text-white px-6 py-3 uppercase tracking-widest text-xs font-medium rounded hover:bg-[#2d2825] transition-colors">
                MÁS INFORMACIÓN
              </Link>
            </div>

            {/* Venta y Corretaje */}
            <div className="flex flex-col">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-gray-100">
                <img
                  alt="Venta y Corretaje"
                  className="w-full h-full object-cover"
                  src="/Gestion.jpg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Venta y Corretaje</h3>
              <p className="text-gray-600 mb-6 text-sm flex-grow">
                Asesoramiento experto para comprar o vender tu embarcación con total seguridad. Maximizamos el valor y minimizamos el tiempo de gestión.
              </p>
              <Link to="/servicios" className="self-start bg-[#3b3531] text-white px-6 py-3 uppercase tracking-widest text-xs font-medium rounded hover:bg-[#2d2825] transition-colors">
                MÁS INFORMACIÓN
              </Link>
            </div>

            {/* Gestión Técnica */}
            <div className="flex flex-col">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-gray-100">
                <img
                  alt="Gestión técnica y operativa"
                  className="w-full h-full object-cover"
                  src="/refit.jpg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gestión técnica</h3>
              <p className="text-gray-600 mb-6 text-sm flex-grow">
                Gestión integral de barcos: mantenimiento, tripulación, amarre y control operativo. Deja las preocupaciones en nuestras manos.
              </p>
              <Link to="/servicios" className="self-start bg-[#3b3531] text-white px-6 py-3 uppercase tracking-widest text-xs font-medium rounded hover:bg-[#2d2825] transition-colors">
                MÁS INFORMACIÓN
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destacados / Info */}
      <section className="bg-white py-24 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Article 1 */}
          <div className="flex flex-col">
            <div className="aspect-[4/3] w-full overflow-hidden mb-6">
              <img
                alt="Refit y puesta a punto"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3-zHtTlR-XxyW5JlRSrKe09aU44ptXc9LaqnDie7P_8NoSyIFxgQGH4-tGCGxYoKipgAmM_sY2klgfm_6lGehDUBG7vJbGmnwMYt0Zs0B1uWQzq4bsk-1tCbQ-lE7f1XMR8sH3DiGId5I0OC5bbYIvChizZs6ee5Gr8qurkc63_4FfM2RAlXs1ekKUhk16BU6DmPp48ICkbTDFkaSzzwZHtYQmtdVeyVcpoH9qosFFqipVvWuz4kwy8SYreQ7RoKt7kQK6PB7L0wB"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Nuestro método de trabajo</h3>
            <div className="text-gray-600 text-sm space-y-4 mb-6 text-center md:text-left">
              <p>Analizamos tus necesidades reales: el tipo de embarcación soñado, el presupuesto y los objetivos a corto o largo plazo.</p>
              <p>Te presentamos opciones contrastadas, optimizando tiempo y evitando decisiones innecesarias o gastos imprevistos, gestionando cualquier tipo de refit o modernización antes de la entrega final.</p>
            </div>
            <a href="#" className="text-red-700 font-semibold text-sm hover:text-red-800 transition-colors text-center md:text-left">Leer más</a>
          </div>

          {/* Article 2 */}
          <div className="flex flex-col">
            <div className="aspect-[4/3] w-full overflow-hidden mb-6">
              <img
                alt="Tranquilidad total"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl1YRdevG80xFnX_lj76rvWYnmBbBsfvcDoG0VQhP4eKy5t5ferJpSx895lC_PSvUyYqH1KPoqkLQ5sHwc5IBilUwOQ3MfaOwgYyFthM-9VZZ7bfysunISNKDJNIoI9wunY6vnblZHi70ERiqryM1_c6WdGrLoHsf8GxcV_cFBqYyVY0eCBQqgi6HTz_TRg8Wn6vWjiq5PYoZC17kZNnJWKmngKAtpuK-v0d4t7qBWrbwmuaE2F7mo5vQOVYjpzhTVb_ApPfrjfEMm"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Tu barco siempre en las mejores manos</h3>
            <div className="text-gray-600 text-sm space-y-4 mb-6 text-center md:text-left">
              <p>En BLM1980 Yacht planificamos cuidadosamente todas las operativas para la seguridad y el disfrute completo de nuestros clientes.</p>
              <p>Desde el mantenimiento preventivo, revisiones de seguridad, control operativo continuado, hasta el servicio técnico de respuesta rápida. Todo está pensado para que tu embarcación sea sinónimo de disfrute, y no de problemas.</p>
            </div>
            <a href="#" className="text-red-700 font-semibold text-sm hover:text-red-800 transition-colors text-center md:text-left">Leer más</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:bg-[#f4f3ef] md:rounded-[3rem] overflow-hidden">
          
          {/* Form Side */}
          <div className="md:col-span-8 p-8 md:p-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs uppercase tracking-widest text-gray-600 font-semibold">CONTACTO</span>
              <div className="w-12 h-[1px] bg-gray-600"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-b-2 border-transparent border-t-0 border-r-0 border-l-0">¿Necesitas más información?</h2>
            <p className="text-gray-600 mb-10 text-sm">
              Envíanos un email o llámanos para solicitar más información y te ayudaremos a resolver cualquier duda y/o consulta que tengas a la brevedad.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-600 mb-2 font-semibold">NOMBRE</label>
                  <input type="text" className="w-full bg-[#ebeae6] border-none rounded p-3 focus:ring-2 focus:ring-gray-300 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-600 mb-2 font-semibold">APELLIDO</label>
                  <input type="text" className="w-full bg-[#ebeae6] border-none rounded p-3 focus:ring-2 focus:ring-gray-300 outline-none transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-600 mb-2 font-semibold">EMAIL</label>
                  <input type="email" className="w-full bg-[#ebeae6] border-none rounded p-3 focus:ring-2 focus:ring-gray-300 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-600 mb-2 font-semibold">TELÉFONO</label>
                  <input type="tel" className="w-full bg-[#ebeae6] border-none rounded p-3 focus:ring-2 focus:ring-gray-300 outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-600 mb-2 font-semibold">¿EN QUÉ PODEMOS AYUDARTE?</label>
                <textarea rows={4} className="w-full bg-[#ebeae6] border-none rounded p-3 focus:ring-2 focus:ring-gray-300 outline-none transition-all resize-none"></textarea>
              </div>
              <div className="flex items-start gap-3 mt-4">
                <input type="checkbox" id="privacy" className="mt-1 border-gray-300 rounded text-gray-900 focus:ring-gray-900" />
                <label htmlFor="privacy" className="text-xs text-gray-600 uppercase tracking-widest leading-relaxed">
                  ANTES DE FIRMAR/ENVIAR TU SOLICITUD, LEA Y ACEPTE NUESTRA INFORMACIÓN BÁSICA SOBRE PROTECCIÓN DE DATOS, CONTENIDA EN NUESTRA POLÍTICAS DE PRIVACIDAD
                </label>
              </div>
              <button type="submit" className="bg-[#3b3531] text-white px-8 py-4 uppercase tracking-widest text-xs font-medium rounded hover:bg-[#2d2825] transition-colors mt-6">
                ENVIAR CONSULTA <span className="ml-2">→</span>
              </button>
            </form>
          </div>

          {/* Contact Info Side */}
          <div className="md:col-span-4 bg-[#ebeae6] p-8 md:p-16 flex flex-col justify-center items-center text-center space-y-12">
            <div>
              <div className="w-12 h-12 bg-[#3b3531] rounded-full text-white flex items-center justify-center mx-auto mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center justify-center gap-1">Teléfono</h4>
              <a href="tel:+34948040013" className="text-sm text-gray-600 hover:text-gray-900">+34 948 04 00 13</a>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-[#3b3531] rounded-full text-white flex items-center justify-center mx-auto mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center justify-center gap-1">Teléfono</h4>
              <a href="tel:+34635859709" className="text-sm text-gray-600 hover:text-gray-900">+34 635 85 97 09</a>
            </div>

            <div>
              <div className="w-12 h-12 bg-[#3b3531] rounded-full text-white flex items-center justify-center mx-auto mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center justify-center gap-1">Teléfono</h4>
              <a href="tel:+34655358662" className="text-sm text-gray-600 hover:text-gray-900">+34 655 35 86 62</a>
            </div>

            <div>
              <div className="w-12 h-12 bg-[#3b3531] rounded-full text-white flex items-center justify-center mx-auto mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center justify-center gap-1">Email</h4>
              <a href="mailto:info@blm1980yacht.com" className="text-sm text-gray-600 hover:text-gray-900">info@blm1980yacht.com</a>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <a href="#" className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center hover:bg-blue-700 transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-900 text-white rounded flex items-center justify-center hover:bg-black transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
