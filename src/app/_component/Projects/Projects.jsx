import React from 'react';
import s from './Projects.module.scss';
import Link from 'next/link';

function Projects() {
  return (
    <div className={s.container}>
      <p className={s.title}>Projets</p>
      <div className={s.list}>
        <Link
          href='https://pierre-jean-sappey-marinier.github.io/Kasa/'
          target='_blank'
        >
          Kasa - Openclassroom
        </Link>
        <div className={s.description}>
          Création d&apos;une <strong>single page application</strong>{' '}
          responsive en composants fonctionnels sous <strong>React.js</strong>{' '}
          en utilisant la méthode <strong>CRA</strong>. Implémentation de routes
          avec React Router. Intégration dynamique des métadonnées via
          React-Helmet.
        </div>
        <Link href='' target='_blank'>
          Mon Vieux Grimoire - Openclassroom
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
          Motus - Perso
        </Link>
        <div className={s.description}>
          Création d&apos;un jeu de motus en React.js
        </div>
        <Link href='' target='_blank'>
          Sophie Photographe - Openclassroom
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
          Booki - Openclassroom
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
          Nina Carducci - Openclassroom
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
