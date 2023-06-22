import React from 'react';
import s from './skills.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import BoardSkill from '../BoardSkills/BoardSkill';
// import cvIcon from '../../assets/cv-icon.png';
// import resume from '../../assets/resume.svg';
function Skills() {
  return (
    <div className={s.container}>
      <p className={s.title}>Compétences</p>
      <p className={s.h2}>Hard skills</p>

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
            <li>Lien de téléchargement :</li>
          </ul>
        </div>

        <div className={s.skills}>
          <ul>
            <li>
              <strong>JavaScript, HTML, CSS, Sass</strong>
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
            <li className={s.telechargement}>
              <Link
                className={s.testbuttons}
                href='../../assets/cv.pdf'
                target='_blank'
              >
                <div className={s.testbutton}> CV</div>
              </Link>
              <Link
                className={s.testbuttons}
                href='../../assets/arbreComp.png'
                target='_blank'
              >
                <div className={s.testbutton}> Carte de compétences</div>
              </Link>
            </li>
          </ul>
        </div>
      </span>
      <p className={s.h2}>Soft skills</p>
      <span className={s.span}>
        <div className={s.domaine}>
          <ul>
            <li>Gestion de projet :</li>
            <li>Gestion d&apos;équipe :</li>
            <li>Communication :</li>
            <li>Conformité du projet :</li>
            {/* <li>Rédaction de rapports :</li> */}
            <li>Sécurité :</li>
          </ul>
        </div>

        <div className={s.skills}>
          <ul>
            <li>Planification, coordination</li>
            <li>Encadrement, formation, tâches </li>
            <li>Immédiate, claire et concise.</li>
            <li>Respect des demandes client</li>
            {/* <li>Gestion des risques et incidents</li> */}
            <li>Gestion des risques et incidents</li>
          </ul>
        </div>
      </span>
    </div>
  );
}

export default Skills;
