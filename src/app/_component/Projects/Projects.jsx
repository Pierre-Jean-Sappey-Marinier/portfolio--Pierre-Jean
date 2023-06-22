import React from 'react';
import s from './Projects.module.scss';
import Link from 'next/link';

function Projects() {
  return (
    <div className={s.container}>
      <p className={s.title}>Projets</p>
      <div className={s.list}>
        <Link href='#' target='_blank'>
          <span> Projet en cours - Prism Agency : </span>

          <span> #Next.js #Responsive </span>
        </Link>
        <div className={s.description}>
          Création d&apos;une application responsive en composants fonctionnels
          sous Next.js.
        </div>
        <Link
          href='https://pierre-jean-sappey-marinier.github.io/Kasa/'
          target='_blank'
        >
          <span> Kasa - Openclassroom : </span>

          <span> #React #CRA #Responsive </span>
        </Link>
        <div className={s.description}>
          Création d&apos;une single page application responsive en composants
          fonctionnels sous React.js en utilisant la méthode CRA. Implémentation
          de routes avec React Router. Intégration dynamique des métadonnées via
          React-Helmet.
        </div>
        <Link href='' target='_blank'>
          <span> Mon Vieux Grimoire - Openclassroom : </span>

          <span> #React #CRA #Responsive </span>
        </Link>
        <div className={s.description}>
          Conception de la partie Backend d&apos;une site de notation de livres
          sous Node.js, express et MongoDB. Sécurisation de la base de donnée
          par des systèmes authentification dans des middleware,
        </div>
        <Link
          href='https://pierre-jean-sappey-marinier.github.io/Motus/'
          target='_blank'
        >
          <span> Motus - Perso : </span>

          <span> #React #CRA #Responsive </span>
        </Link>
        <div className={s.description}>
          Création d&apos;un jeu de motus en React.js
        </div>
        <Link href='' target='_blank'>
          <span> Sophie Photographe - Openclassroom : </span>

          <span> #React #CRA #Responsive </span>
        </Link>
        <div className={s.description}>
          Création d&apos;une page web dynamique avec JavaScript en communiquant
          avec une API swagger, en intégrant de la gestion de connexion
          utilisateur. Optimisation de l&apos;application et compilation
          optimisée avec le serveur de développement Vite. Amélioration du
          référencement (SEO) et de l&apos;accessibilité du site.
        </div>
        <Link
          href='https://pierre-jean-sappey-marinier.github.io/Site_Booki_Sappey-Marinier_Pierre-Jean/'
          target='_blank'
        >
          <span> Booki - Openclassroom : </span>

          <span> #React #CRA #Responsive </span>
        </Link>
        <div className={s.description}>
          Création de la page d&apos;accueil d&apos;une agence de voyage en HTML
          et CSS tout en respectant une maquette figma, le web sémantique et la
          validité générale du code
        </div>
        <Link
          href='https://pierre-jean-sappey-marinier.github.io/NinacarducciVite/'
          target='_blank'
        >
          <span> Nina Carducci - Openclassroom : </span>

          <span> #React #CRA #Responsive </span>
        </Link>
        <div className={s.description}>
          Correction du bug d&apos;un site web en React.js. Optimisation de
          l&apos;application et compilation optimisée avec le serveur de
          développement Vite. Amélioration du référencement (SEO) et de
          l&apos;accessibilité du site.
        </div>
      </div>
    </div>
  );
}

export default Projects;
