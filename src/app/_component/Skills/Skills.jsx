import React from 'react';
import s from './skills.module.scss';
import Link from 'next/link';
import Image from 'next/image';
// import cvIcon from '../../assets/cv-icon.png';
// import resume from '../../assets/resume.svg';
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
            <li>IDE :</li>
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
              <strong>Webpack</strong>, <strong>Vite</strong>, rollup
            </li>
            <li>Agile (Scrum, Kanban, Trello, Asana)</li>
            <li>VisualStudioCode</li>
            <li>
              <strong>Git</strong>, Figma
            </li>
          </ul>
        </div>
      </span>
      {/* <div className={s.resume}>
        <Link href='./assets/cv.pdf' target='_blank' rel='noopener noreferrer'>
          <Image
            src={resume}
            alt='Vercel Logo'
            className={s.gmailLogo}
            priority
          />
        </Link>
      </div> */}
    </div>
  );
}

export default Skills;
