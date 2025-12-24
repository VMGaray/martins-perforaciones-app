"use client";

import Image from "next/image";
// Importamos Swiper React y los estilos necesarios
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Iconos para los puntos clave (usando heroicons, que suele venir con tailwind)
import { CheckBadgeIcon, AcademicCapIcon, HandThumbUpIcon, ClockIcon } from "@heroicons/react/24/solid";

// ARRAY DE IMÁGENES: Reemplaza estas rutas con tus fotos reales en public/
const carouselImages = [
  "/assets/foto1.jpg", // Ejemplo: Una perforadora trabajando
  "/assets/foto2.jpg", // Ejemplo: Instalación de bomba
  "/assets/foto3.jpg", // Ejemplo: El equipo de trabajo
  "/assets/foto4.jpg",
  "/assets/foto5.jpg", // Ejemplo: Un trabajo terminado
  "/assets/foto6.jpg",
  "/assets/foto7.jpg",
  "/assets/foto8.jpg",
  "/assets/foto9.jpg",
  "/assets/foto10.jpg"
];

const AboutSection = () => {
  return (
    // Usamos un id para poder navegar hasta aquí desde el menú
    <section id="nosotros" className="py-16 md:py-24 relative overflow-hidden">
      {/* Fondo sutil para diferenciar la sección */}
      <div className="absolute inset-0 bg-blue-900/20 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* COLUMNA DE TEXTO */}
          <div className="lg:w-1/2 space-y-6">
            <div>
              <h2 className="text-blue-400 font-semibold tracking-wider uppercase mb-2">
                Sobre Nosotros
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Más de una década asegurando el recurso vital
              </h3>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed">
              En Martins Perforaciones, no solo hacemos pozos; brindamos soluciones hídricas integrales. Desde hace 10 años, nos dedicamos a entender la necesidad de cada terreno y cada cliente en Córdoba.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed">
              Creemos que la base de un buen trabajo es la confianza. Por eso, combinamos la experiencia de campo con una capacitación técnica rigurosa para garantizar obras seguras, eficientes y duraderas.
            </p>

            {/* Puntos clave destacados */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 bg-blue-950/50 p-4 rounded-lg border border-blue-800/50">
                <CheckBadgeIcon className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Habilitación Oficial</h4>
                  <p className="text-sm text-slate-400">Operamos bajo la <span className="text-blue-300 font-medium">Habilitación DIPAS n°94</span>, garantía de legalidad y norma.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-blue-950/50 p-4 rounded-lg border border-blue-800/50">
                <AcademicCapIcon className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Capacitación Internacional</h4>
                  <p className="text-sm text-slate-400">Técnicas especializadas adquiridas mediante formación en Brasil.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-blue-950/50 p-4 rounded-lg border border-blue-800/50">
                <HandThumbUpIcon className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Trato y Asesoramiento</h4>
                  <p className="text-sm text-slate-400">Acompañamiento personalizado desde la consulta hasta la posventa.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-blue-950/50 p-4 rounded-lg border border-blue-800/50">
                <ClockIcon className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">+10 Años de Experiencia</h4>
                  <p className="text-sm text-slate-400">Una trayectoria de responsabilidad y obras exitosas en la región.</p>
                </div>
              </div>
            </div>

          </div>

          {/* COLUMNA DEL CARRUSEL */}
          <div className="lg:w-1/2 w-full">
            {/* Contenedor con bordes redondeados y sombra para el carrusel */}
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/30 aspect-[4/3] relative z-10">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                // Agregamos navegación (flechas) solo en pantallas medianas para arriba
                navigation={true} 
                className="w-full h-full"
              >
                {carouselImages.map((src, index) => (
                  <SwiperSlide key={index} className="relative w-full h-full bg-blue-950">
                    {/* Usamos Next/Image con 'fill' para que cubra el contenedor */}
                    <Image
                      src={src}
                      alt={`Imagen de obra o equipo Martins Perforaciones ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0} // Priorizamos la carga de la primera imagen
                    />
                    {/* Capa oscura sobre la imagen para que no compita mucho con el fondo */}
                    <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply"></div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* Elemento decorativo detrás del carrusel */}
            <div className="absolute -top-4 -right-4 w-2/3 h-2/3 bg-blue-600/20 rounded-2xl -z-10 blur-2xl hidden lg:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;