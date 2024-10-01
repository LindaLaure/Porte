import React from 'react';
import styles from './Bio.module.css';
import { MdScreenSearchDesktop } from 'react-icons/md';
import { FaDatabase } from 'react-icons/fa';
import {
  FaMobileAlt,
  FaBusinessTime,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import Image from 'next/image';

const Bio: React.FC = () => {
  return (
    <>
      <div className="footer-section">
        <div className="image-container">
          <Image
            src="/images/Linda.png"
            className="imgPortfo"
            alt="imgportfolio"
            width={225}
            height={300}
          />
        </div>
        <h2 className={styles.Heading}> Linda Douanla Ngueguim</h2>
        <p className={styles.titre2}>
          {' '}
          Cheffe de projects Ingénieure des télécommunications
        </p>
        <a href="https://github.com/LindaLaure/">
          <FaGithub className="icon2" title="Github" />{' '}
        </a>
        <a href="https://www.linkedin.com/in/linda-laure-douanla?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <FaLinkedin className="icon2" title="Linkedin" />
        </a>
        <h3 className={styles.Heading}> Que fait Linda ?</h3>
        <FaBusinessTime className="Desktop" title="Desktop" />
        <p className={styles.titre}> Cheffe de project</p>
        <p className={styles.description}>
          {' '}
          Je suis passionné par la gestion de projets dans les domaines de
          l'informatique, des télécommunications et de l'infographie. Au cours
          de l'année 2022, j'ai eu l'opportunité de coordonner plusieurs
          projets, dont le projet Safe Ride, qui a permis à mon équipe et moi de
          remporter l'un des 15 prix du concours Startupper Challenge organisé
          par TotalEnergies en 2022. Par la suite, j'ai effectué un stage chez
          IDIX où j'ai travaillé sur divers projets en tant qu'assistant chef de
          projet. En fin d'année 2023, j'ai rejoint Capgemini en tant que
          Platform Manager pour le client Airbus.
        </p>
      </div>
    </>
  );
};

export default Bio;
