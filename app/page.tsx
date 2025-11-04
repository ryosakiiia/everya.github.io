import Image from "next/image"

export default function Home() {
  return (
    <main className="w-full bg-gradient-to-b from-purple-50 via-white to-yellow-50">
      {/* Hero Section - Tarjeta de Invitación Principal */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-8 sm:py-12">
        <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8 relative">
          {/* Grid layout for tarjeta central with imágenes decorativas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center justify-center">
            <div className="flex flex-col gap-4 sm:gap-6 justify-center">
              {/* Imagen 1 - Collage de stickers */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-32 sm:h-40 md:h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-plkUKAgMS0VWCJkYHAElPSxjLsYGeQ.png"
                  alt="Collage de stickers variados"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Imagen 2 - Gif animado */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-32 sm:h-40 md:h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga-WToGb8oo3uk9GP3SWYNaAptdQLZa41.gif"
                  alt="Personajes kawaii animados"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative bg-white/95 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl max-w-sm w-full border-2 border-purple-100">
                {/* Imagen 1 - Esquina superior izquierda */}
                <div className="absolute -top-6 -left-6 w-20 sm:w-24 h-20 sm:h-24 rounded-xl shadow-lg overflow-hidden border-2 border-white transform -rotate-6 hover:rotate-0 transition-transform">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/descarga-WToGb8oo3uk9GP3SWYNaAptdQLZa41.gif"
                    alt="Personaje kawaii"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Imagen 2 - Esquina superior derecha */}
                <div className="absolute -top-8 -right-4 w-20 sm:w-24 h-20 sm:h-24 rounded-xl shadow-lg overflow-hidden border-2 border-white transform rotate-6 hover:rotate-0 transition-transform">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bQt5U0da2R9woWEBHYpHIAjtj87tqG.png"
                    alt="Personaje chibi"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Imagen 3 - Lado izquierdo intermedio */}
                <div className="absolute left-0 top-1/3 w-16 sm:w-20 h-16 sm:h-20 rounded-lg shadow-lg overflow-hidden border-2 border-white transform -translate-x-1/2 hover:scale-110 transition-transform">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-plkUKAgMS0VWCJkYHAElPSxjLsYGeQ.png"
                    alt="Collage stickers"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Imagen 4 - Lado derecho intermedio */}
                <div className="absolute right-0 top-1/2 w-16 sm:w-20 h-16 sm:h-20 rounded-lg shadow-lg overflow-hidden border-2 border-white transform translate-x-1/2 hover:scale-110 transition-transform">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n57Q6dDyYJpdTj4INtroI7Il4hu1gn.png"
                    alt="Stickers comida"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Imagen 5 - Esquina inferior izquierda */}
                <div className="absolute -bottom-6 left-4 w-18 sm:w-22 h-18 sm:h-22 rounded-xl shadow-lg overflow-hidden border-2 border-white transform -rotate-6 hover:rotate-0 transition-transform">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/naruto-eating-ramen-with-rock-lee-yajqepa11yz5dp97-JMWuwkl4Ti9jLvvi3phRxSDY6ev0p.gif"
                    alt="Naruto comiendo"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Imagen 6 - Esquina inferior derecha */}
                <div className="absolute -bottom-4 -right-6 w-20 sm:w-24 h-20 sm:h-24 rounded-xl shadow-lg overflow-hidden border-2 border-white transform rotate-6 hover:rotate-0 transition-transform">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wpi1VXpXAUwx6UOeYfyDrPzGXnAOU9.png"
                    alt="Stickers variados"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Logo EVERYA MARKET - Centrado */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="relative w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 drop-shadow-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Zh5BUjOvn96KTLsOFWQsuSjeAMgRZb.png"
                      alt="Logo EVERYA MARKET"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Texto decorativo superior */}
                <p className="text-xs sm:text-sm text-purple-900 font-serif drop-shadow-lg tracking-widest uppercase font-light text-center mb-3">
                  Te invitamos a celebrar
                </p>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-purple-900 drop-shadow-lg leading-tight text-center mb-2">
                  Gran Inauguración
                </h1>

                <h2 className="text-lg sm:text-xl md:text-2xl text-purple-800 drop-shadow-lg font-serif font-semibold text-center mb-4 sm:mb-6">
                  EVERYA MARKET
                </h2>

                {/* Información compacta */}
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  {/* Fecha */}
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-widest text-purple-700/70 font-medium">📅 Fecha</p>
                    <p className="text-sm sm:text-base font-serif font-bold text-purple-900">4 de Noviembre</p>
                  </div>

                  {/* Hora */}
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-widest text-purple-700/70 font-medium">🕐 Hora</p>
                    <p className="text-sm sm:text-base font-serif font-bold text-purple-900">A partir del mediodía</p>
                  </div>

                  {/* Ubicación */}
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-widest text-purple-700/70 font-medium">📍 Ubicación</p>
                    <p className="text-xs sm:text-sm font-serif font-bold text-purple-900">Av. Huayna Cápac</p>
                  </div>
                </div>

                <button className="w-full bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 text-purple-900 font-bold py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl text-sm sm:text-base font-serif">
                  Confirmar Asistencia
                </button>

                {/* Texto inspirador */}
                <p className="text-purple-700 drop-shadow-lg text-xs sm:text-sm font-light font-serif mt-4 text-center">
                  ✨ Te esperamos con los brazos abiertos ✨
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6 justify-center">
              {/* Imagen 3 - Stickers de comida */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-32 sm:h-40 md:h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n57Q6dDyYJpdTj4INtroI7Il4hu1gn.png"
                  alt="Stickers de productos de comida"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Imagen 4 - Más stickers */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-32 sm:h-40 md:h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wpi1VXpXAUwx6UOeYfyDrPzGXnAOU9.png"
                  alt="Stickers de snacks variados"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
