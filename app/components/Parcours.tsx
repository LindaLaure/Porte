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
        <h3 className={styles.Heading2}> Cheffe de project </h3>
        <p className={styles.description}>
          {' '}
          04 Juin 2023 - Présent Instagram{' '}
          <a href="https://www.instagram.com/reverie_237/"> Reverie 237</a>{' '}
        </p>
        <ul className={styles.items}>
          <li>
            {' '}
            Définition du périmètre et délimitation du project évenementiel
          </li>
          <li>
            Gestion des parties prenantes (Equipe du project, Sponsors et
            partenaires)
          </li>
          <li> Gestion de la communication et gestion budgétaire</li>
          <li>
            {' '}
            Réalisation de la feuille de route et suvi du project opérationnel
          </li>
        </ul>
        <h3 className={styles.Heading2}> Consultante fonctionnel PLM</h3>

        <p className={styles.description}>14 Octobre 2022 - Juin 2023</p>
        <p>
          Platform Manager des outils 3D Expérience au sein du projet Airbus :
        </p>
        <ul className={styles.items}>
          <li>
            {' '}
            Controle de la disponibilité des platerformes dans un contexte de
            collaboration internationale
          </li>
          <li> Gestion de communications et rédaction de rapports</li>
        </ul>
        <p>
          {' '}
          Testeuse fonctionnelle de l'application Windchill pour le project Tag
          Hueur :
        </p>
        <ul className={styles.items}>
          <li>
            Formation intensive sur la prise en main du logiciel Windchill
          </li>
          <li>Tests foctionnels sur l'application</li>
        </ul>
        <h3 className={styles.Heading2}>
          {' '}
          Stagiare Assistante en cheffe de Projects|IDIX
        </h3>
        <p className={styles.description}>
          11 Avril 2022 - 30 Septembre 2022 Site Internet:
          <a href="https://www.idix.fr/">IDIX</a>{' '}
        </p>
        <ul className={styles.items}>
          <li>
            {' '}
            Teste de mise en production en mode semi-agile pour le logiciel de
            création de contenu PADDIX
          </li>
          <li>
            {' '}
            Recueil de besoins, analyse de faisabilité, suivi du dévéloppement
            de nouvelles fonctionnalités{' '}
          </li>
          <li>
            {' '}
            Organisation de reunions entre développeurs, suivi de backlog,
            controle des sprints
          </li>
          <li>
            {' '}
            Rédaction des rapports, release notes, et cachiers de recette pour
            les clients
          </li>
        </ul>

        <h3 className={styles.Heading2}>Co-fondatrice et PDG | KosPlay-Tics</h3>
        <p className={styles.description}>
          {' '}
          1er Octobre 2020 - Présent Site Web :{' '}
          <a href="https://Kosplaystics.com/"></a> Kosplaystics{' '}
        </p>
        <ul className={styles.items}>
          <li>
            {' '}
            Design informatique et coordination de la production du site web{' '}
          </li>
          <li> Gestion des pages Facebook, Instagram et Linkedin du groupe </li>
          <li> Organisation et Animation d'évènements avec les partenaires</li>
          <li>
            {' '}
            Coordination des équipes de conception, promotion et commerciales
          </li>
          <li>
            {' '}
            Recrutement des nouveaux profils et identification de nouveaux
            marchés
          </li>
        </ul>
      </div>
    </>
  );
};

export default Parcours;
