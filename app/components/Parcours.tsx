import React from 'react';
import styles from './Parcours.module.css';
import { IoSchoolSharp } from 'react-icons/io5';
import { MdWorkHistory } from 'react-icons/md';
import { SiFunimation } from 'react-icons/si';

const Parcours: React.FC = () => {
  return (
    <>
      <div className="footer-section">
        <h2 className={styles.Heading}> Et le Parcours de Linda ? </h2>
        <IoSchoolSharp className="icon" />
        <p className={styles.titre}> Scolaire</p>
        <h3 className={styles.Heading2}>
          {' '}
          Master 2 Pro. (CIM) Gestion de projects et Conception Multimédia{' '}
        </h3>
        <p className={styles.description}>
          {' '}
          Université Lumière Lyon II, France{' '}
        </p>
        <p className={styles.description}> Septembre 2021 - Décemebre 2020 </p>
        <ul className={styles.items}>
          <li>Gestion de projects informatiques</li>
          <li>
            Multimédia et communication ( réalisation de films, Modélisation 3D
            et Animation)
          </li>
          <li>
            Technologie de l'internet (XML, Web dynamique, CMS, et Big Data)
          </li>
          <li>Conception des projects informatiques</li>
        </ul>
        <h3 className={styles.Heading2}>
          {' '}
          Master 1 Pro. (SIGL) Système d'Information et Génie Logiciel{' '}
        </h3>
        <p className={styles.description}>
          {' '}
          Université de Yaoundé 1, Cameroun{' '}
        </p>
        <p className={styles.description}> Décembre 2020 - Septembre 2020 </p>
        <ul className={styles.items}>
          <li> Gestion de projects (ERP, projects informatiques)</li>
          <li> Principes et processus du génie Logiciel</li>
          <li> Modélisation des Systèmes d'information </li>
          <li>
            {' '}
            Réseaux et programmation (Java EE, UML, SQL, NoSQL,Web, CMS){' '}
          </li>
        </ul>
        <h3 className={styles.Heading2}>
          {' '}
          Diplome d'Ingénieur des réseaux et Télécommunication{' '}
        </h3>
        <p className={styles.description}> SUP'PTIC, Cameroun </p>
        <p className={styles.description}> Décembre 2017 - Septembre 2020 </p>
        <ul className={styles.items}>
          <li> Réseaux et Transmission dans les télécommunications </li>
          <li> Optimisation et planification des réseaux</li>
          <li> Traitement de l'information </li>
          <li> Peogrammation (JAVA, C, PHP, HTML)</li>
        </ul>

        <SiFunimation className="icon" />
        <p className={styles.titre}> Loisir</p>

        <ul className={styles.items}>
          <li>
            Animation : Organisatrice des événements de divertissements liés aux
            animés
          </li>
          <li>Chant : Participation au 60ème festival coréen K-Pop World </li>
          <li>
            Lecture : Livres de développement personnel, bande dessinées et
            romans{' '}
          </li>
          <li>Dessin : Conception et Design d'affiches pour évènements</li>
        </ul>

        <MdWorkHistory className="icon" />
        <p className={styles.titre}> Profesionnelle </p>
        <h3 className={styles.Heading2}>
          {' '}
          Master 1 Pro. (SIGL) Système d'Information et Génie Logiciel{' '}
        </h3>
        <p className={styles.description}> 04 Juin 2023 - Présent Instagraman <a href = "https://www.instagram.com/reverie_237/"> Reverie 237</a> </p>
              <ul className={styles.items}>
                <li> Définition du périmètre et délimitation du project évenementiel</li>
                <li>Gestion des parties prenantes (Equipe du project, Sponsors et partenaires)</li>
                <li> Gestion de la communication et gestion budgétaire</li>
                <li> Réalisation de la feuille de route et suvi du project opérationnel</li>
              </ul>
      </div>
    </>
  );
};

export default Parcours;
