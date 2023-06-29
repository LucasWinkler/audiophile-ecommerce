import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { NavigationLink as NavigationLinkType } from '@/types';
import ArrowRightIcon from '../ArrowRightIcon';

type MobileNavigationProps = {
  navigationLinks: NavigationLinkType[];
  isMobileMenuOpen: boolean;
  handleCloseMobileMenu: () => void;
};

export default function MobileNavigation({
  navigationLinks,
  isMobileMenuOpen,
  handleCloseMobileMenu,
}: MobileNavigationProps) {
  return isMobileMenuOpen ? (
    <nav
      className='absolute left-0 right-0 top-[calc(var(--navigation-height)+1px)] z-10 block h-[calc(100vh-var(--navigation-height))] overflow-y-auto overflow-x-hidden lg:max-h-[1/3]'
      onClick={handleCloseMobileMenu}>
      <div className='fixed inset-0 top-navigation-height h-full w-full bg-neutral-900 opacity-50 xl:hidden'></div>
      <div
        onClick={event => event.stopPropagation()}
        className={
          'relative overflow-y-auto rounded-b-lg bg-neutral-100 py-[2.1875rem]'
        }>
        <ul
          className={
            'container relative mt-9 flex flex-col items-center justify-center gap-[3.75rem] lg:flex-row lg:gap-[1rem]'
          }>
          {navigationLinks.map(
            ({ name, href, className, thumbnail }: NavigationLinkType) => (
              // TODO: Extract li to own component to be used in other places
              <li
                className={clsx(
                  'relative flex w-full flex-col items-center justify-center rounded-lg bg-neutral-400 p-4',
                  className
                )}
                key={name}>
                <div className='flex w-full flex-col items-center justify-center'>
                  <img
                    className='absolute top-[-26%] h-[8rem] w-auto'
                    src={thumbnail}
                    alt={`${name} Thumbnail`}
                  />
                  <p className='pt-[4.5rem] text-center text-base font-bold uppercase tracking-[0.06694rem]'>
                    {name}
                  </p>
                  <Link
                    className='btn btn-simple pt-2 before:absolute before:inset-0 before:block'
                    onClick={handleCloseMobileMenu}
                    to={href}>
                    Shop
                    <ArrowRightIcon />
                  </Link>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  ) : null;
}
