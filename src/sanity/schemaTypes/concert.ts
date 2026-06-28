export const concertSchema = {
  name: 'concert',
  title: 'Prochains Ministères (Agenda)',
  type: 'document',
  fields: [
    {
      name: 'date',
      title: 'Date (ex: 12 Juil)',
      type: 'string',
    },
    {
      name: 'annee',
      title: 'Année (ex: 2026)',
      type: 'string',
    },
    {
      name: 'lieu',
      title: 'Lieu / Église (ex: Stade de la Paix)',
      type: 'string',
    },
    {
      name: 'ville',
      title: 'Ville (ex: Kinshasa)',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type d\'événement (ex: Concert Évangélique, Culte Spécial)',
      type: 'string',
    }
  ]
}