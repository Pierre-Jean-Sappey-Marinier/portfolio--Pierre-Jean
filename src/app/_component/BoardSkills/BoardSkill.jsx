'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import ArbreCompetence from '../../../public/assets/arbreComp.png';
// import './BoardSkill.scss';
import s from './BoardSkill.module.scss';

export default function BoardSkill() {
  return (
    <div className={s.container}>
      <p className={s.title}>L&apos;essentiel.</p>
      <div className={s.linkToSkills}>
        <Link
          className={s.testbuttons}
          href='../../assets/arbreComp.png'
          target='_blank'
        >
          <div className={s.testbutton}> Carte de compétences</div>
        </Link>

        <Link
          className={s.testbuttons}
          href='../../assets/cv.pdf'
          target='_blank'
        >
          <div className={s.testbutton}> CV</div>
        </Link>
      </div>
    </div>
  );
}
