import React from 'react';
import s from './Projects.module.scss';

function Projects() {
  return (
    <div className={s.container}>
      <p className={s.title}>Projets</p>
      <div className={s.list}>
        <a
          href='https://pierre-jean-sappey-marinier.github.io/Kasa/'
          target='_blank'
        >
          Kasa - Openclassroom
        </a>
        <a href='' target='_blank'>
          Mon Vieux Grimoire - Openclassroom
        </a>
        <a
          href='https://pierre-jean-sappey-marinier.github.io/Motus/'
          target='_blank'
        >
          Motus - Perso
        </a>
        <a href='' target='_blank'>
          Sophie Photographe - Openclassroom
        </a>
        <a
          href='https://pierre-jean-sappey-marinier.github.io/Site_Booki_Sappey-Marinier_Pierre-Jean/'
          target='_blank'
        >
          Booki - Openclassroom
        </a>
        <a
          href='https://pierre-jean-sappey-marinier.github.io/NinacarducciVite/'
          target='_blank'
        >
          Nina Carducci - Openclassroom
        </a>
      </div>
    </div>
  );
}

export default Projects;
