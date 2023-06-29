import { NavigationLink as NavigationLinkType } from '../../types';
import NavigationLink from './NavigationLink';

type DesktopNavigationProps = {
  navigationLinks: NavigationLinkType[];
  isMobileMenuOpen: boolean;
};

export default function DesktopNavigation({
  navigationLinks,
  isMobileMenuOpen,
}: DesktopNavigationProps) {
  return !isMobileMenuOpen ? (
    <nav className='hidden xl:flex'>
      <ul className='flex gap-3'>
        {navigationLinks.map(
          ({ name, href, className }: NavigationLinkType) => (
            <li className={className} key={name}>
              <NavigationLink className='text-neutral-100' to={href}>
                {name}
              </NavigationLink>
            </li>
          )
        )}
      </ul>
    </nav>
  ) : null;
}
