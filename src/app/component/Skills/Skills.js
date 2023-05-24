import React from 'react';
import s from './skills.module.scss';

function Skills() {
  return (
    <div className={s.container}>
      <p className={s.title}>Compétences.</p>
      <span className={s.span}>
        <div className={s.domaine}>
          <ul>
            <li>Langages :</li>
            <li>Frameworks :</li>
            <li>Base de données :</li>
            <li>Compilateurs :</li>
            <li>Méthodologie :</li>
            <li>Logiciels :</li>
            <li>Outils :</li>
          </ul>
        </div>

        <div className={s.skills}>
          <ul>
            <li>
              <strong>JavaScript</strong>, HTML, CSS, Sass
            </li>
            <li>
              <strong>React.js</strong>, <strong>Next.js</strong>, Node.js,
              express.js
            </li>
            <li>MongoDB</li>
            <li>
              <strong>Webpack</strong>, <strong>Vite</strong>, rollup,
              react-testing-library, Swagger
            </li>
            <li>Agile (Scrum, Kanban)</li>
            <li>VisualStudioCode</li>
            <li>
              <strong>Git</strong>, Figma, Trello
            </li>
          </ul>
        </div>
      </span>
    </div>
  );
}

export default Skills;
