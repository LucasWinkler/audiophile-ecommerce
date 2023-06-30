import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '@/../tailwind.config.js';

import desktopNavigationLinks from '@/data/navigationLinks.json';

import Logo from '../Logo.tsx';
import CartButton from '../CartButton.tsx';

import DesktopNavigation from './DesktopNavigation/DesktopNavigation.tsx';
import MobileNavigation from './MobileNavigation/MobileNavigation.tsx';
import MobileNavigationButton from './MobileNavigationButton/MobileNavigationButton.tsx';

const fullConfig = resolveConfig(tailwindConfig);
const screens = fullConfig?.theme?.screens as { [key: string]: string };

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavigationTransparent, setIsNavigationTransparent] = useState(true);
  const { pathname } = useLocation();

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  const handleEscapePressed = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsMobileMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    const handleNavigationStyleChange = () => {
      setIsNavigationTransparent(pathname === '/');
    };

    handleNavigationStyleChange();
  }, [pathname]);

  useEffect(() => {
    const togglePageScrolling = () => {
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
    };

    togglePageScrolling();
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
    <header
      className={clsx(
        'fixed left-0 right-0 top-0 z-10',
        isNavigationTransparent ? 'bg-transparent' : 'bg-neutral-900'
      )}>
      <div className='container'>
        <div className='flex h-navigation-height items-center justify-between'>
          <div className='flex w-full items-center justify-between gap-2'>
            <div className='flex flex-grow basis-0 items-center justify-start xl:hidden'>
              <MobileNavigationButton
                onClick={handleToggleMobileMenu}
                isMobileMenuOpen={isMobileMenuOpen}
              />
            </div>
            <div className='xl:flex xl:flex-grow xl:basis-0'>
              <Logo onClick={handleCloseMobileMenu} />
            </div>
            {isMobileMenuOpen ? (
              <MobileNavigation handleCloseMobileMenu={handleCloseMobileMenu} />
            ) : (
              <DesktopNavigation navigationLinks={desktopNavigationLinks} />
            )}
            <div className='flex flex-grow basis-0 items-center justify-end'>
              <CartButton onClick={handleCloseMobileMenu} />
            </div>
          </div>
        </div>
        <span className='full-bleed sm:no-bleed fixed z-10 block h-[0.0625rem] bg-neutral-100/20'></span>
      </div>
    </header>
  );
}
