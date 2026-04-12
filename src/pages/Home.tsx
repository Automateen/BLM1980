import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Yate de lujo"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaPmGqcV2521_6jD_ROItoudv0SWMeZfVmwTv4s7YL8xuTYeK8tn5xG6X_SN6_vgsnLOdqxnj-9OIjUqPsnk_qOzUw9RWtlZPU88xS-Jhr2rsF0s0aTbdGAAOnBEh7rdqS8V9qmzqn5EEfm-T-9FSwFFHnXwJDATrMZAO2LVheF1FKb_rA7jjNG7EBZm6fL1I8CvWeadUOIUd_9U42WregRLLJW7tGobXaEBuq4glWYQ8wxQb9L5lqGMHafJi0s-3LwRLZhWT69b3v"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/20"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="font-headline text-5xl md:text-8xl text-white mb-6 tracking-tight leading-tight">
            El Mediterráneo, <br /> <span className="italic">Redefinido</span>
          </h1>
          <p className="font-body text-white/90 text-lg md:text-xl uppercase tracking-[0.3em] font-light">
            CURANDO LAS TRAVESÍAS NÁUTICAS MÁS EXCLUSIVAS DEL MUNDO.
          </p>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/60">
          <span className="text-[10px] uppercase tracking-[0.5em] font-label">Deslizar para explorar</span>
          <div className="w-px h-12 bg-white/30"></div>
        </div>
      </section>

      {/* Brand Presentation Block */}
      <section className="bg-surface py-32 md:py-48 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-12">
          <div className="md:col-span-5 flex flex-col justify-center">
            <h2 className="font-headline text-4xl md:text-6xl mb-8 leading-tight">
              Un Legado de <br />Lujo Invisible.
            </h2>
            <div className="w-24 h-px bg-primary mb-8"></div>
            <p className="text-on-surface-variant leading-relaxed text-lg mb-8 max-w-md">
              No nos limitamos a facilitar transacciones; curamos estilos de vida. BLM1980 YACHT representa la cúspide de la excelencia marítima, sirviendo a una clientela exigente que no demanda nada menos que lo extraordinario.
            </p>
            <a
              href="#"
              className="text-primary font-bold uppercase tracking-widest text-xs border-b border-primary/20 pb-2 self-start hover:border-on-tertiary-container hover:text-on-tertiary-container transition-colors font-label"
            >
              Nuestra Filosofía
            </a>
          </div>
          <div className="md:col-start-7 md:col-span-6 relative">
            <div className="aspect-[4/5] w-full bg-surface-container-low overflow-hidden">
              <img
                alt="Interior de yate de lujo"
                className="w-full h-full object-cover scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlbWcJWMWoA-I79Aprw-6nkYfMjJrpDSv7bqwe3HpF8XHQ6810BjzrHZl2gS9uYxK3jqaZuYCvlf9KX8PrLq8SlCS1RxcNy1PQ2rLzzUExiDSWLSFCDiaaovSET_Axd_quz76vJyRKYrPViVyEGBgQ4AmP19f9wbIFlhQdjmx_mP8o9pvdspkk1QWPAKUA22-TFQg0P8yg5Lwq09MJe40tc4ZJk7dKwC13od13_hKwAhFC8QJVEbmkPTIgQva-ygebrJpQSdZaNnzQ"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="hidden md:block absolute -bottom-12 -left-12 w-64 h-80 bg-surface-container-highest z-[-1]"></div>
          </div>
        </div>
      </section>

      {/* Core Services Section (Tonal Shift) */}
      <section className="bg-surface-container-low py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <span className="text-on-tertiary-container font-bold uppercase tracking-[0.3em] text-xs mb-4 block font-label">
                Nuestra Experiencia
              </span>
              <h2 className="font-headline text-4xl md:text-5xl">Servicios a Medida</h2>
            </div>
            <p className="max-w-sm text-on-surface-variant font-light">
              Soluciones integrales adaptadas a los requisitos únicos del mundo del yachting.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Charter */}
            <Link to="/servicios" className="group cursor-pointer block">
              <div className="aspect-[3/4] overflow-hidden mb-8">
                <img
                  alt="Servicio de Chárter"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3-zHtTlR-XxyW5JlRSrKe09aU44ptXc9LaqnDie7P_8NoSyIFxgQGH4-tGCGxYoKipgAmM_sY2klgfm_6lGehDUBG7vJbGmnwMYt0Zs0B1uWQzq4bsk-1tCbQ-lE7f1XMR8sH3DiGId5I0OC5bbYIvChizZs6ee5Gr8qurkc63_4FfM2RAlXs1ekKUhk16BU6DmPp48ICkbTDFkaSzzwZHtYQmtdVeyVcpoH9qosFFqipVvWuz4kwy8SYreQ7RoKt7kQK6PB7L0wB"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-headline text-2xl mb-4">Chárter</h3>
              <p className="text-on-surface-variant mb-6 font-light leading-relaxed">
                Itinerarios exquisitos y tripulaciones seleccionadas a mano para la escapada definitiva al Mediterráneo.
              </p>
              <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform w-6 h-6" />
            </Link>

            {/* Sales */}
            <Link to="/servicios" className="group cursor-pointer block md:mt-16">
              <div className="aspect-[3/4] overflow-hidden mb-8">
                <img
                  alt="Servicio de Venta"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl1YRdevG80xFnX_lj76rvWYnmBbBsfvcDoG0VQhP4eKy5t5ferJpSx895lC_PSvUyYqH1KPoqkLQ5sHwc5IBilUwOQ3MfaOwgYyFthM-9VZZ7bfysunISNKDJNIoI9wunY6vnblZHi70ERiqryM1_c6WdGrLoHsf8GxcV_cFBqYyVY0eCBQqgi6HTz_TRg8Wn6vWjiq5PYoZC17kZNnJWKmngKAtpuK-v0d4t7qBWrbwmuaE2F7mo5vQOVYjpzhTVb_ApPfrjfEMm"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-headline text-2xl mb-4">Venta</h3>
              <p className="text-on-surface-variant mb-6 font-light leading-relaxed">
                Servicios de corretaje discretos que conectan embarcaciones exclusivas con sus próximos custodios.
              </p>
              <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform w-6 h-6" />
            </Link>

            {/* Management */}
            <Link to="/servicios" className="group cursor-pointer block">
              <div className="aspect-[3/4] overflow-hidden mb-8">
                <img
                  alt="Servicio de Gestión"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZrJ69L5h0kxvsb6LRROujPvwGzq_O9-gnVoBzh35dpoBE_eLQ_hQIe_1JSidHxDbSHyhxigVVS64sDEixXY0EeMG7jVAIEjneqo77Jdwr5R3ti30-X2XPJhoCLNuO3dbSUv0YsyGkgzk_Hx-TBzXBXRiu_cOFVjOGOkGE0QfwuuZM8c146ZwrN0gRQmFIoWmrXa7CXTVRzMY8NsmgqalMtvRJ7kTlWsAUYMX7GLNIsBCCEV0JLrFVzLhWE8UzQJiabqPLCx8lm8hN"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-headline text-2xl mb-4">Gestión</h3>
              <p className="text-on-surface-variant mb-6 font-light leading-relaxed">
                Excelencia operativa impecable y supervisión técnica para su tranquilidad en el mar.
              </p>
              <ArrowRight className="text-primary group-hover:translate-x-2 transition-transform w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-48 px-6 overflow-hidden bg-primary-container text-on-primary">
        <div className="absolute inset-0 opacity-30">
          <img
            alt="Superficie del mar"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFs3kzCREk5jxLNOs0XIfgqEvZIvcCHpMAI7DSkWaKVRVhlTH44SIFja8Qgq5VjcYz4hoNpb0XexbojzHuZvuursaeIp1vI7cA7HPYc3nA3VM1xpYcOVsm0dwb1hY1oOFSs-gWblce6h1dhf_PY9BPr4thD5h538LHIwbmLVCd99AH-hYe17PX20rJCJ2bn7vDhnORNGafympP3cQbAjJgSzxvpFaFVMRz0XENsMgo4w8TNBsbIO8Jc5Bf-gX6A1oDeefqrT2bZQzd"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-4xl md:text-7xl mb-12 leading-tight">
            Comience su Viaje <span className="italic">Curado</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link
              to="/contacto"
              className="w-full md:w-auto bg-[#faf9f5] text-[#001325] px-12 py-5 uppercase tracking-widest text-sm font-bold hover:bg-secondary-container transition-colors font-label"
            >
              Solicitar Consulta
            </Link>
            <Link
              to="/servicios"
              className="w-full md:w-auto border border-white/30 text-white px-12 py-5 uppercase tracking-widest text-sm font-bold hover:bg-white/10 transition-colors font-label"
            >
              Ver Flota
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
