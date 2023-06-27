import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config.js';

import AudiophileLogo from '../../assets/shared/desktop/logo.svg';
import CartIcon from '../../assets/shared/desktop/icon-cart.svg';
import HamburgerIcon from '../../assets/shared/tablet/icon-hamburger.svg';

const fullConfig = resolveConfig(tailwindConfig);
const screens = fullConfig?.theme?.screens as { [key: string]: string };

export default function Navbar() {
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

  return (
    <header className='z-10 bg-neutral-900'>
      <div className='container flex h-navigation-height items-center justify-between'>
        <div className='flex w-full items-center justify-between gap-2'>
          <button
            className='flex-grow basis-0 self-center lg:hidden'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className='sr-only'>
              {isMobileMenuOpen ? 'Close' : 'Open'} navigation menu
            </span>
            <img src={HamburgerIcon} alt='Hamburger Icon' />
          </button>
          <div className='lg:flex-grow lg:basis-0'>
            <img src={AudiophileLogo} alt='Audiophile Logo' />
          </div>
          <nav
            className={clsx(
              'lg:flex',
              isMobileMenuOpen
                ? 'absolute left-0 right-0 top-navigation-height z-10 block h-[calc(100%-var(--navigation-height))] overflow-y-auto'
                : 'hidden'
            )}>
            <ul className='flex gap-3 text-neutral-100'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/headphones'>Headphones</Link>
              </li>
              <li>
                <Link to='/speakers'>Speakers</Link>
              </li>
              <li>
                <Link to='/earphones'>Earphones</Link>
              </li>
            </ul>
          </nav>
          <button className='flex-grow basis-0 self-center'>
            <span className='sr-only'>Open navigation menu</span>
            <img className='ml-auto' src={CartIcon} alt='Cart Icon' />
          </button>
        </div>
      </div>
    </header>
  );
}
