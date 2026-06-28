import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/lib/client' // 👈 On utilise l'alias racine de Next.js

const builder = imageUrlBuilder(client)

// Définition d'un type d'image générique propre pour Sanity
interface SanityImageSource {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}