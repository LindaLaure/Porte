import React from 'react';
import styles from './Technologies.module.css';
import {
  FaHtml5,
  FaWordpress,
  FaCss3Alt,
  FaGithub,
  FaChrome,
  FaGoogle,
  FaFigma,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiJira,
  SiRedmine,
  SiPowerautomate,
  SiBlender,
  SiMicrosoftword,
  SiMicrosoftexcel,
  SiCanva,
  SiXcode,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
} from 'react-icons/si';
import { RiNetflixFill, RiNextjsFill } from 'react-icons/ri';
import { VscVscodeInsiders } from 'react-icons/vsc';

const Technologies: React.FC = () => {
  return (
    <div className="footer-section" id="technologies">
      <h2>Technologies</h2>
      <div className="icons">
        <FaHtml5 className="icon" title="Html" />
        <FaCss3Alt className="icon" title="CSS3" />
        <FaChrome className="icon" title="Chrome" />
        <FaGoogle className="icon" title="Google" />
        <FaDatabase className="icon" title="SQL" />
        <VscVscodeInsiders className="icon" title="Visual Code" />
        <SiMicrosoftword className="icon" title="Microsoft word" />
        <SiMicrosoftexcel className="icon" title="Microsoft" />
        <SiAdobephotoshop className="icon" title="Adobe Photoshop" />
        <SiAdobeillustrator className="icon" title="Adobe illustrator" />
        <SiAdobeaftereffects className="icon" title="After effet" />
        <SiJira className="icon" title="Jira" />
        <FaGithub className="icon" title="Github" />
        <FaWordpress className="icon" title="Wordpress" />
        <FaFigma className="icon" title="Figma" />
        <SiCanva className="icon" title="Canva" />
        <SiXcode className="icon" title="Xcode" />
        <SiBlender className="icon" title="Blender" />
        <SiRedmine className="icon" title="Redmine" />
        <SiPowerautomate className="icon" title="Powerautomate" />
      </div>
    </div>
  );
};

export default Technologies;
