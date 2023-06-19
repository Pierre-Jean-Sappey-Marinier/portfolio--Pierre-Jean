import React from 'react';
import s from './Biographie.module.scss';

function Biographie() {
  return (
    <div className={s.container}>
      <p className={s.biographie}>Développeur FrontEnd</p>
      <span className={s.span}>
        <div className={s.presentation}>
          <p>
            En tant que développeur junior, je me suis orienté vers le{' '}
            <strong>front-end</strong> après une reconversion professionnelle
            réussie. C&apos;est sur des technologies telles que{' '}
            <strong>React</strong>, JavaScript et <strong>Next.js</strong> que
            je me suis tourné pour créer des expériences web dynamiques et
            conviviales.
          </p>
          <br></br>
          <p>
            Avec une solide base en programmation acquise pendant ma
            reconversion, je suis en mesure de concevoir et de développer des
            interfaces utilisateur réactives et esthétiques. J&apos;ai une bonne
            compréhension des principes fondamentaux du développement web et je
            suis constamment à l&apos;affût des dernières tendances et
            meilleures pratiques.
          </p>
          <br></br>
          <p>
            Ma soif d&apos;apprendre et ma curiosité m&apos;ont toujours aidé à
            être réactif et à proposer des solutions en adéquation avec les
            stratégies fixées.
          </p>
        </div>
      </span>
    </div>
  );
}

export default Biographie;
