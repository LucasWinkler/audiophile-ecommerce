import DesktopNavigationLink from './DesktopNavigationLink/DesktopNavigationLink';
import { NavigationLink as NavigationLinkType } from '@/types';

type DesktopNavigationProps = {
  navigationLinks: NavigationLinkType[];
};

export default function DesktopNavigation({
  navigationLinks,
}: DesktopNavigationProps) {
  return (
    <nav className='hidden xl:flex'>
      <ul className='flex gap-3'>
        {navigationLinks.map(({ name, href }: NavigationLinkType) => (
          <li key={name}>
            <DesktopNavigationLink to={href}>{name}</DesktopNavigationLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
