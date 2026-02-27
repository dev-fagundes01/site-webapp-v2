import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import { useNavigate } from 'react-router-dom';
import { createHeaderLinks } from '../utils/headerLinks';

function DefaultLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const headerLinks = createHeaderLinks(navigate);

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.substring(1);
      const element = document.getElementById(hash);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  }, [location.hash]);

  return (
    <>
      <Header links={headerLinks} />
      <Outlet />
      <Footer />
    </>
  );
}

export default DefaultLayout;
