import { Outlet } from 'react-router-dom';
import Navigation from './components/common/Navigation/Navigation';
import Footer from './components/common/Footer/Footer';

export default function Root() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}
