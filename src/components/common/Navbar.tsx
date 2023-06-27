import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      <div className='container flex items-center justify-between'>
        <button
          className='self-center'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className='sr-only'>Open navigation menu</span>
          <img src={HamburgerIcon} alt='Hamburger Icon' />
        </button>
        <img
          className='align-middle'
          src={AudiophileLogo}
          alt='Audiophile Logo'
        />
        <nav className='hidden sm:block'>
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
        <button className='self-center'>
          <span className='sr-only'>Open navigation menu</span>
          <img src={CartIcon} alt='Cart Icon' />
        </button>
      </div>
    </header>
  );
}
