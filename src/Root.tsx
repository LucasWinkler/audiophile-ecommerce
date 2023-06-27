import { Outlet } from 'react-router-dom';
import NavigationBar from './components/common/NavigationBar';

export default function Root() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}
