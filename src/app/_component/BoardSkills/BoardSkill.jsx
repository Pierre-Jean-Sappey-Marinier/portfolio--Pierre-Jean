'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import ArbreCompetence from '../../../public/_assets/arbreComp.png';
// import './BoardSkill.scss';
import s from './BoardSkill.module.scss';

export default function BoardSkill() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={s.container}>
      <p className={s.title}>L'essentiel.</p>
      <div className={s.linkToSkills}>
        <Link
          className={s.testbuttons}
          href='../../_assets/arbreComp.png'
          target='_blank'
        >
          <div className={s.testbutton}> Carte de compétences</div>
        </Link>

        <Link
          className={s.testbuttons}
          href='../../_assets/cv.pdf'
          target='_blank'
        >
          <div className={s.testbutton}> CV</div>
        </Link>
      </div>
    </div>
  );
}
