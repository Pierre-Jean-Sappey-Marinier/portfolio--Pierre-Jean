import Image from 'next/image';
import styles from './page.module.scss';
// import gmail from './assets/gmail.svg';
import Biographie from './_component/Biographie/Biographie';
import Projects from './_component/Projects/Projects';
import Skills from './_component/Skills/Skills';
// import ArbreCompetence from './_assets/arbreComp.png';
import BoardSkill from './_component/BoardSkills/BoardSkill';
export default function Home() {
  function toggleFullScreen(id) {
    document.getElementById(id).requestFullscreen();
  }
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.nameAndSurname}>
          <p className={styles.name}>Pierre-Jean</p>
          <p className={styles.surname}> SAPPEY-MARINIER</p>
        </div>
      </div>
      <div className={styles.section}>
        <Biographie />
        <Skills />
        {/* <Projects /> */}
      </div>
      <div className={styles.skills}>
        {/* <Skills /> */}
        <Projects />
        <BoardSkill />
      </div>
    </main>
  );
}
