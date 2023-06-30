import { Outlet } from 'react-router-dom';
import Navigation from './components/common/Navigation/Navigation';

export default function Root() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
