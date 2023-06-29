import { Outlet } from 'react-router-dom';
import NavigationBar from './components/common/Navigation/NavigationBar';

export default function Root() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}
