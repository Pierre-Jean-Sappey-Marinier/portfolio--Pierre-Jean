import React from 'react';
import s from './Biographie.module.scss';

function Biographie() {
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
            Ma soif d'apprendre et ma curiosité m'ont toujours aidé à être
            réactif et à proposer des solutions en adéquation avec les
            stratégies fixées.
          </p>
        </div>
      </span>
    </div>
  );
}

export default Biographie;
