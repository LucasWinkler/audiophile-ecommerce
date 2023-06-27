import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config.js';

import AudiophileLogo from '../../assets/shared/desktop/logo.svg';
import CartIcon from '../../assets/shared/desktop/icon-cart.svg';
import HamburgerIcon from '../../assets/shared/tablet/icon-hamburger.svg';

import navigationLinks from '../../data/navigationLinks.json';
import Navlink from './NavigationLink.js';

const fullConfig = resolveConfig(tailwindConfig);
const screens = fullConfig?.theme?.screens as { [key: string]: string };

type NavigationLink = {
  name: string;
  href: string;
  className: string;
};

export default function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open and toggle scrollbar to prevent page from shifting
  useEffect(() => {
    const html = document.querySelector('html');
    const classesToToggle = [
      'overflow-hidden',
      'overflow-y-scroll',
      'fixed',
      'inset-0',
    ];

    if (html) {
      classesToToggle.forEach(classesToToggle => {
        html.classList.toggle(classesToToggle, isMobileMenuOpen);
      });
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleViewportChange = () => {
      const windowWidthAsRem = window.innerWidth / 16;

      if (windowWidthAsRem >= parseInt(screens.lg)) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleViewportChange);

    return () => {
      window.removeEventListener('resize', handleViewportChange);
    };
  }, []);

  function handleToggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function handleCloseMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  function handleCartButtonClick() {
    handleCloseMobileMenu();
    // TODO: Open cart modal
  }

  return (
    <header className='bg-neutral-900'>
      <div className='container'>
        <div className='flex h-navigation-height items-center justify-between'>
          <div className='flex w-full items-center justify-between gap-2 '>
            <div className='flex-grow basis-0 xl:hidden'>
              <button onClick={handleToggleMobileMenu}>
                <span className='sr-only'>
                  {isMobileMenuOpen ? 'Close' : 'Open'} navigation menu
                </span>
                <img src={HamburgerIcon} alt='Hamburger Icon' />
              </button>
            </div>
            <div className='xl:flex xl:flex-grow xl:basis-0'>
              <Link to='/' onClick={handleCloseMobileMenu} className=''>
                <img src={AudiophileLogo} alt='Audiophile Logo' />
              </Link>
            </div>
            <nav
              className={clsx(
                'xl:flex',
                isMobileMenuOpen
                  ? 'absolute left-0 right-0 top-navigation-height z-10 block h-[calc(100%-var(--navigation-height))] overflow-y-auto'
                  : 'hidden'
              )}>
              <ul className='flex gap-3 text-neutral-100'>
                {navigationLinks.map(
                  ({ name, href, className }: NavigationLink) => (
                    <li
                      className={clsx(
                        className,
                        'text-neutral-900 xl:text-neutral-100'
                      )}
                      key={name}>
                      <Navlink
                        className=''
                        onClick={handleCloseMobileMenu}
                        to={href}>
                        {name}
                      </Navlink>
                    </li>
                  )
                )}
              </ul>
            </nav>
            <div className='flex flex-grow basis-0'>
              <button onClick={handleCartButtonClick} className='ml-auto'>
                <span className='sr-only'>Open navigation menu</span>
                <img className='' src={CartIcon} alt='Cart Icon' />
              </button>
            </div>
          </div>
        </div>
        <span className='full-bleed sm:no-bleed block h-[0.0625rem] bg-neutral-100/20'></span>
      </div>
    </header>
  );
}
