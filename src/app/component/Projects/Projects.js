import React from 'react';
import s from './Projects.module.scss';

function Projects() {
  return (
    <div className={s.container}>
      <p className={s.title}>Projets</p>
      <div className={s.list}>
        <a
          href='https://pierre-jean-sappey-marinier.github.io/Motus/'
          target='_blank'
        >
          Kasa - Openclassroom
        </a>
        <a
          href='https://pierre-jean-sappey-marinier.github.io/Motus/'
          target='_blank'
        >
          Mon Vieux Grimoire - Openclassroom
        </a>
        <a
          href='https://pierre-jean-sappey-marinier.github.io/Motus/'
          target='_blank'
        >
          Motus - Perso
        </a>
        <a
          href='https://pierre-jean-sappey-marinier.github.io/Motus/'
          target='_blank'
        >
          Sophie Photographe - Openclassroom
        </a>
        <a
          href='https://pierre-jean-sappey-marinier.github.io/Motus/'
          target='_blank'
        >
          Booki - Openclassroom
        </a>
      </div>
    </div>
  );
}

export default Projects;
