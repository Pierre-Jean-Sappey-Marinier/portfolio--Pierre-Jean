import Image from 'next/image';
import styles from './page.module.scss';
import gmail from './assets/gmail.svg';
import Biographie from './component/Biographie/Biographie';
import Projects from './component/Projects/Projects';
import Skills from './component/Skills/Skills';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.nameAndSurname}>
          <p className={styles.name}>Pierre-Jean</p>
          <p className={styles.surname}> SAPPEY-MARINIER</p>
        </div>
        <div>
          <a
            href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src={gmail}
              alt='Vercel Logo'
              className={styles.gmailLogo}
              priority
            />
          </a>
        </div>
      </div>
      <div className={styles.section}>
        <Biographie />
        <Projects />
      </div>
      <div className={styles.skills}>
        <Skills />
      </div>
    </main>
  );
}
