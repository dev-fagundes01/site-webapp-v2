import React from "react";
import { useNavigate } from "react-router-dom";
import DesignView from "../view/index.view";
import { createHeaderLinks } from '../../../utils/headerLinks';
import { copyright, footerLinks, footerLinks2, footerLinks3, socialLinks } from '../../../utils/footerLinks';

const DesignController: React.FC = () => {
  const navigate = useNavigate();
  const headerLinks = createHeaderLinks(navigate);

  return <DesignView 
  headerLinks={headerLinks} 
  footerLinks={footerLinks} 
  footerLinks2={footerLinks2}  
  footerLinks3={footerLinks3} 
  socialLinks={socialLinks} 
  copyright={copyright}
  />;
};

export default DesignController;
