export const siteInfoSchema = {
  name: 'siteInfo',
  title: 'Informations & Photos du Site',
  type: 'document',
  fields: [
    {
      name: 'artistName',
      title: 'Nom de l\'Artiste',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Biographie / Histoire',
      type: 'text',
    },
    {
      name: 'aboutImage',
      title: 'Photo de la section À Propos',
      type: 'image',
      options: { hotspot: true } // Permet au manager de recadrer l'image directement dans l'interface
    },
    {
      name: 'albumCover',
      title: 'Pochette de l\'Album (Section Musique)',
      type: 'image',
      options: { hotspot: true }
    }
  ]
}