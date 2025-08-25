import React from "react";
import { useNavigate } from "react-router-dom";
import { createHeaderLinks } from '../../../utils/headerLinks';
import { copyright, footerLinks, footerLinks2, footerLinks3, socialLinks } from '../../../utils/footerLinks';
import TechRecruiterView from '../view/index.view';

const TechRecruiterController: React.FC = () => {
  const navigate = useNavigate();
  const headerLinks = createHeaderLinks(navigate);

  return <TechRecruiterView 
  headerLinks={headerLinks}
  footerLinks={footerLinks}
  footerLinks2={footerLinks2}
  footerLinks3={footerLinks3}
  socialLinks={socialLinks}
  copyright={copyright}
  />;
};

export default TechRecruiterController;
