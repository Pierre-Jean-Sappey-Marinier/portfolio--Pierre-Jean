import React from 'react';
import s from './Projects.module.scss';

function Projects() {
  return (
    <div className={s.container}>
      <p className={s.biographie}>Bonjour.</p>
      <span className={s.span}>
        <div className={s.presentation}>
          <p>
            Je m'appelle Pierre-Jean et je suis en plein processus de
            reconversion professionnelle. Je me tourne vers le métier de
            développeur et je me suis particulièrement intéressé au
            développement frontend, en me spécialisant dans des technologies
            telles que React et Next.
          </p>
          <br></br>
          <p>
            Depuis que j'ai commencé à explorer ce nouveau domaine, ma curiosité
            n'a cessé de croître.
          </p>
        </div>
      </span>
    </div>
  );
}

export default Projects;
