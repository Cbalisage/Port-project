import React from 'react'

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Carmlyn</h1>
        <p className={styles.description}>
        I am a full-time student at Kean University. Currently, I am working to achieve my 
        Bachelor of Science in Information Technology. Reach out to learn more!
        </p>
        <a href="mailto:balisagc@kean.edu" className={styles.contactBtn}>
            Contact Me</a>
        </div>
        <img
        src={getImageUrl("hero/propic.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}
