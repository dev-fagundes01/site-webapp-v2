import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import { useNavigate } from 'react-router-dom';
import { createHeaderLinks } from '../utils/headerLinks';
import {
  copyright,
  footerLinks,
  footerLinks2,
  footerLinks3,
  socialLinks,
} from '../utils/footerLinks';

function DefaultLayout() {
  const navigate = useNavigate();
  const headerLinks = createHeaderLinks(navigate);

  return (
    <>
      <Header links={headerLinks} />
      <Outlet />
      <Footer />
    </>
  );
}

export default DefaultLayout;
