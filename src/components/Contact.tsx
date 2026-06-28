"use client";
import { Mail, Phone } from "lucide-react";
// Tout en haut du fichier Contact.tsx // On garde lucide pour le reste
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa"; // Icônes de marques

// ... (votre code de formulaire reste le même)

{/* REMPLACEZ LE BLOC DES RÉSEAUX SOCIAUX EN BAS PAR CELUI-CI */}
<div className="flex justify-center gap-4">
  {/* FACEBOOK */}
  <a 
    href="https://facebook.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-12 h-12 rounded-xl bg-white border border-stone-200 text-stone-600 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition shadow-sm"
  >
    <FaFacebookF size={20} />
  </a>

  {/* INSTAGRAM */}
  <a 
    href="https://instagram.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-12 h-12 rounded-xl bg-white border border-stone-200 text-stone-600 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-purple-600 hover:text-white hover:border-transparent transition shadow-sm"
  >
    <FaInstagram size={20} />
  </a>

  {/* TIKTOK */}
  <a 
    href="https://tiktok.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-12 h-12 rounded-xl bg-white border border-stone-200 text-stone-600 flex items-center justify-center hover:bg-stone-950 hover:text-white hover:border-stone-950 transition shadow-sm"
  >
    <FaTiktok size={18} />
  </a>
</div>

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      
      {/* EN-TÊTE DE LA SECTION */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-stone-800 font-serif">Contact & Booking</h2>
        <div className="w-12 h-1 bg-amber-600 mx-auto rounded"></div>
        <p className="text-stone-500 text-sm max-w-md mx-auto pt-2">
          Pour toute invitation, ministère, concert ou collaboration avec Kevin Kianza, écrivez-nous ou rejoignez-nous sur nos réseaux.
        </p>
      </div>
{/* Remplacer le début de la balise <form> par ceci */}
      <form 
        action="https://formspree.io/f/xzdlgbwr" // <-- Collez votre lien Formspree ici
        method="POST"
        className="bg-white p-6 md:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4 w-full"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-left text-sm font-medium text-stone-700 mb-1">Nom / Organisation</label>
            <input 
              name="name" // <-- AJOUTÉ
              type="text" 
              className="w-full p-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm text-stone-800 placeholder-stone-400" 
              placeholder="Votre nom ou église" 
              required 
            />
          </div>
          <div>
            <label className="block text-left text-sm font-medium text-stone-700 mb-1">Email</label>
            <input 
              name="email" // <-- AJOUTÉ
              type="email" 
              className="w-full p-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm text-stone-800 placeholder-stone-400" 
              placeholder="adresse@email.com" 
              required 
            />
          </div>
        </div>
        <div>
          <label className="block text-left text-sm font-medium text-stone-700 mb-1">Message</label>
          <textarea 
            name="message" // <-- AJOUTÉ
            rows={4} 
            className="w-full p-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm text-stone-800 placeholder-stone-400" 
            placeholder="Décrivez votre événement ou votre demande..." 
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition shadow-sm">
          <Mail size={18} /> Envoyer la demande
        </button>
      </form>

      {/* 2. SECTION EN BAS : APPELS DIRECTS & RÉSEAUX SOCIAUX */}
      <div className="pt-4 space-y-6 text-center">
        
        {/* BOUTONS WHATSAPP ET TÉLÉPHONE ALIGNÉS CÔTE À CÔTE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {/* TÉLÉPHONE */}
          <a 
            href="tel:+243824115317" 
            className="flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-200/80 shadow-sm hover:border-amber-500/20 hover:shadow-md transition group text-left"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center group-hover:scale-105 transition shrink-0">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-xs text-stone-400 font-medium">Appel Direct</p>
              <p className="font-semibold text-stone-800 text-sm">+243 (0) 824 115 317</p>
            </div>
          </a>

          {/* WHATSAPP AVEC FAWHATSAPP */}
<a 
  href="https://wa.me/243000000000" 
  target="_blank" 
  rel="noopener noreferrer"
  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-200/80 shadow-sm hover:border-emerald-500/20 hover:shadow-md transition group text-left"
>
  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition shrink-0">
    {/* VRAIE ICÔNE WHATSAPP */}
    <FaWhatsapp size={22} />
  </div>
  <div>
    <p className="text-xs text-stone-400 font-medium">WhatsApp</p>
    <p className="font-semibold text-stone-800 text-sm">Discuter en ligne</p>
  </div>
</a>
        </div>

        {/* LOGOS DES RÉSEAUX SOCIAUX EN TOUT BAS */}
        <div className="space-y-3 pt-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">Suivre sur les réseaux</p>
          
         <div className="flex justify-center gap-4">
  {/* FACEBOOK */}
  <a 
    href="https://www.facebook.com/profile.php?id=100083268134758" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-12 h-12 rounded-xl bg-white border border-stone-200 text-stone-600 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition shadow-sm"
  >
    <FaFacebookF size={20} />
  </a>

  {/* INSTAGRAM */}
  <a 
    href="https://www.instagram.com/kevin_kianza/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-12 h-12 rounded-xl bg-white border border-stone-200 text-stone-600 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-purple-600 hover:text-white hover:border-transparent transition shadow-sm"
  >
    <FaInstagram size={20} />
  </a>

  {/* TIKTOK */}
  <a 
    href="https://www.tiktok.com/@kevinkianza5" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-12 h-12 rounded-xl bg-white border border-stone-200 text-stone-600 flex items-center justify-center hover:bg-stone-950 hover:text-white hover:border-stone-950 transition shadow-sm"
  >
    <FaTiktok size={18} />
  </a>
</div>
        </div>

      </div>
    </section>
  );
}