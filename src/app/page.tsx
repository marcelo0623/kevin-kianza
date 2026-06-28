import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/schemaTypes/image";
import { Play, Calendar } from "lucide-react";
import { FaYoutube, FaSpotify, FaApple } from "react-icons/fa";
import Contact from "@/components/Contact";
import Image from "next/image";

// Structure stricte des concerts pour TypeScript
interface Concert {
  _id: string;
  date: string;
  annee: string;
  lieu: string;
  ville: string;
  type: string;
}

export default async function Home() {
  // Récupération des concerts en direct sans cache
  const prochainsConcerts = await client.fetch<Concert[]>(
    `*[_type == "concert"] | order(_createdAt asc)`,
    {},
    { cache: 'no-store' }
  );

  // Récupération des informations de l'artiste en direct sans cache
  const siteInfo = await client.fetch(
    `*[_type == "siteInfo"][0]`,
    {},
    { cache: 'no-store' }
  );

  return (
    <div className="space-y-24 pb-24">
      
     {/* SECTION HERO AVEC IMAGE D'ARRIÈRE-PLAN */}
      <section className="relative text-white py-32 px-4 flex flex-col items-center justify-center text-center overflow-hidden min-h-[60vh]">
        {/* Balise optimisée pour charger l'image locale sur Vercel */}
        <Image 
          src="/kks.jpg" 
          alt="Arrière-plan Kevin Kianza"
          fill
          priority
          unoptimized
          className="object-cover -z-10"
        />
        
        {/* Dégradé sombre pour garantir la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-stone-950/50 to-stone-50/10 -z-10" />
        
        <div className="relative z-10 max-w-3xl space-y-6">
          <span className="text-amber-400 uppercase tracking-widest text-sm font-semibold drop-shadow">
            Nouvel Album Disponible
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight font-serif drop-shadow-md">
            Mon Ancre, Ma Forteresse
          </h1>
          <p className="text-lg text-stone-200 max-w-xl mx-auto drop-shadow">
            Découvrez le voyage musical de {siteInfo?.artistName || "Kevin Kianza"} au cœur de la louange et de l&apos;adoration.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="#musique" className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition shadow-lg border border-amber-500/20">
              <Play size={18} fill="currentColor" /> Écouter l&apos;Album
            </a>
            <a href="#agenda" className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition shadow-md">
              <Calendar size={18} /> Voir les dates
            </a>
          </div>
        </div>
      </section>

      {/* SECTION BIO / À PROPOS */}
      <section id="bio" className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Bloc de Gauche : La Photo Dynamique */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition duration-300"></div>
            
            <div className="relative overflow-hidden rounded-2xl border border-stone-200 shadow-md aspect-[4/5] md:aspect-[3/4]">
              <Image 
                src={siteInfo?.aboutImage ? urlFor(siteInfo.aboutImage).url() : "/kkkkk.jpg"} 
                alt="Kevin Kianza - Artiste Gospel" 
                fill
                unoptimized
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>  

          {/* Bloc de Droite : Le Texte Dynamique */}
          <div className="space-y-6 text-left">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 font-serif">
                À Propos de {siteInfo?.artistName || "Kevin Kianza"}
              </h2>
              <div className="w-12 h-1 bg-amber-600 rounded"></div>
            </div>
            
            <div className="space-y-4 text-stone-600 leading-relaxed">
              {siteInfo?.bio ? (
                <p className="whitespace-pre-line">{siteInfo.bio}</p>
              ) : (
                <>
                  <p>
                    Depuis plus de 10 ans, Kevin Kianza partage sa foi et son amour à travers le chant gospel. 
                    Sa musique est un pont jeté entre le cœur des hommes et la présence divine.
                  </p>
                  <p>
                    Porté par une profonde dévotion, son ministère musical touche les cœurs et restaure les âmes.
                  </p>
                </>
              )}
            </div>
            
            <div className="pt-2">
              <p className="font-serif italic text-amber-700 font-medium text-lg">À Dieu soit la gloire.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION MUSIQUE (PLATEFORMES À GAUCHE, PHOTO À DROITE) */}
      <section id="musique" className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Bloc de Gauche : Plateformes et Liens */}
          <div className="space-y-6 order-2 md:order-1 text-left">
            <div className="space-y-2">
              <span className="text-amber-600 uppercase tracking-widest text-xs font-semibold">Discographie</span>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 font-serif">Écouter {siteInfo?.artistName || "Kevin Kianza"}</h2>
              <div className="w-12 h-1 bg-amber-600 rounded"></div>
            </div>
            
            <p className="text-stone-600 text-sm">
              Retrouvez les cantiques, les singles et les albums de louange sur toutes vos plateformes de streaming préférées.
            </p>

            <div className="space-y-3 pt-2">
              {/* YouTube */}
              <a 
                href="https://www.youtube.com/@kevinkianzaofficiel4342" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white hover:bg-red-50/50 rounded-xl border border-stone-200 shadow-sm transition group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center transition group-hover:scale-105">
                    <FaYoutube size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800">Chaîne YouTube</h4>
                    <p className="text-xs text-stone-400">Clips officiels et Ministères en Live</p>
                  </div>
                </div>
              </a>

              {/* Spotify */}
              <a 
                href="https://spotify.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white hover:bg-emerald-50/50 rounded-xl border border-stone-200 shadow-sm transition group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center transition group-hover:scale-105">
                    <FaSpotify size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800">Spotify</h4>
                    <p className="text-xs text-stone-400">Écouter les albums en streaming</p>
                  </div>
                </div>
              </a>

              {/* Apple Music */}
              <a 
                href="https://apple.com/apple-music/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white hover:bg-rose-50/50 rounded-xl border border-stone-200 shadow-sm transition group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center transition group-hover:scale-105">
                    <FaApple size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800">Apple Music</h4>
                    <p className="text-xs text-stone-400">Télécharger et écouter en Haute Définition</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Bloc de Droite : Pochette d'Album Dynamique */}
          <div className="relative group order-1 md:order-2">
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-amber-700 rounded-2xl opacity-10 blur-xl group-hover:opacity-20 transition duration-300"></div>
            <div className="relative overflow-hidden rounded-2xl border border-stone-200 shadow-lg aspect-square">
              <Image 
                src={siteInfo?.albumCover ? urlFor(siteInfo.albumCover).url() : "/kkkk.jpg"} 
                alt="Pochette Album Kevin Kianza" 
                fill
                unoptimized
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION AGENDA DYNAMIQUE SANITY */}
      <section id="agenda" className="max-w-4xl mx-auto px-4 space-y-8 py-12">
        <div className="text-center space-y-2">
          <span className="text-amber-600 uppercase tracking-widest text-xs font-semibold">Agenda</span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 font-serif">Prochains Ministères</h2>
          <div className="w-12 h-1 bg-amber-600 mx-auto rounded"></div>
          <p className="text-stone-500 text-sm max-w-md mx-auto pt-2">
            Venez partager un moment de communion lors de nos prochains passages.
          </p>
        </div>

        <div className="space-y-4">
          {prochainsConcerts.length === 0 ? (
            <p className="text-center text-stone-400 text-sm py-8">Aucune date prévue pour le moment.</p>
          ) : (
            prochainsConcerts.map((concert: Concert) => (
              <div 
                key={concert._id} 
                className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:shadow-md hover:border-amber-500/30 hover:scale-[1.01] transition duration-300 group"
              >
                <div className="flex items-center gap-5 w-full sm:w-auto">
                  <div className="bg-stone-50 border border-stone-100 group-hover:bg-amber-50 group-hover:border-amber-200 text-center rounded-xl px-4 py-3 min-w-[90px] transition duration-300">
                    <p className="text-xl font-bold text-stone-800 group-hover:text-amber-800 font-serif tracking-tight">{concert.date}</p>
                    <p className="text-xs text-stone-400 group-hover:text-amber-600/80 font-medium uppercase tracking-wider">{concert.annee}</p>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="inline-block text-[10px] uppercase tracking-widest bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full font-medium">
                      {concert.type}
                    </span>
                    <h4 className="font-bold text-stone-800 text-lg group-hover:text-amber-900 transition duration-350">
                      {concert.lieu}
                    </h4>
                  </div>
                </div>

                <div className="sm:text-right w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-100 flex sm:flex-col justify-between items-center sm:items-end">
                  <span className="text-xs text-stone-400 sm:hidden">Lieu</span>
                  <p className="font-serif font-bold text-amber-700 bg-amber-50/60 sm:bg-transparent px-3 py-1 sm:p-0 rounded-full text-sm tracking-wide">
                    {concert.ville}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section id="contact" className="max-w-4xl mx-auto px-4 py-12">
        <Contact />
      </section>

    </div>
  );
}