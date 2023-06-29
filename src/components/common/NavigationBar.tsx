import { useState, useEffect, useCallback } from 'react';

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config.js';

import Logo from './Logo.tsx';
import MobileNavigation from './MobileNavigation.tsx';
import DesktopNavigation from './DesktopNavigation.tsx';
import CartButton from './CartButton.tsx';
import HamburgerButton from './HamburgerButton.tsx';
import NavigationDivider from './NavigationDivider.tsx';

import navigationLinks from '../../data/navigationLinks.json';

const fullConfig = resolveConfig(tailwindConfig);
const screens = fullConfig?.theme?.screens as { [key: string]: string };

export default function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleEscapePressed = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsMobileMenuOpen(false);
    }
  }, []);

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

      if (windowWidthAsRem >= parseInt(screens?.xl ?? '0')) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleViewportChange);

    return () => {
      window.removeEventListener('resize', handleViewportChange);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleEscapePressed);

    return () => {
      document.removeEventListener('keydown', handleEscapePressed);
    };
  }, [handleEscapePressed]);

  return (
    <header className='fixed left-0 right-0 top-0 z-10'>
      <div className='container'>
        <div className='flex h-navigation-height items-center justify-between'>
          <div className='flex w-full items-center justify-between gap-2'>
            <div className='flex flex-grow basis-0 items-center justify-start xl:hidden '>
              <HamburgerButton
                onClick={handleToggleMobileMenu}
                isMobileMenuOpen={isMobileMenuOpen}
              />
            </div>
            <div className='xl:flex xl:flex-grow xl:basis-0'>
              <Logo onClick={handleCloseMobileMenu} />
            </div>
            <MobileNavigation
              navigationLinks={navigationLinks}
              isMobileMenuOpen={isMobileMenuOpen}
              handleCloseMobileMenu={handleCloseMobileMenu}
            />
            <DesktopNavigation
              navigationLinks={navigationLinks}
              isMobileMenuOpen={isMobileMenuOpen}
            />
            <div className='flex flex-grow basis-0 items-center justify-end'>
              <CartButton onClick={handleCloseMobileMenu} />
            </div>
          </div>
        </div>
        <NavigationDivider />
      </div>
    </header>
  );
}
