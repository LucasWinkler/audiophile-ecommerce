import { useState, useEffect, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config.js';

import AudiophileLogo from '../../assets/shared/desktop/logo.svg';
import CartIcon from '../../assets/shared/desktop/icon-cart.svg';
import HamburgerIcon from '../../assets/shared/tablet/icon-hamburger.svg';
import navigationLinks from '../../data/navigationLinks.json';

import NavigationLink from './NavigationLink.js';
import ArrowRightIcon from './ArrowRightIcon.js';
import ConditionalWrapper from './ConditionalWrapper.tsx';

const fullConfig = resolveConfig(tailwindConfig);
const screens = fullConfig?.theme?.screens as { [key: string]: string };

type NavigationLink = {
  name: string;
  href: string;
  className?: string;
  thumbnail?: string;
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

      if (windowWidthAsRem >= parseInt(screens.xl)) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleViewportChange);

    return () => {
      window.removeEventListener('resize', handleViewportChange);
    };
  }, []);

  useEffect(() => {
    const handleEscapePressed = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapePressed);

    return () => {
      document.removeEventListener('keydown', handleEscapePressed);
    };
  }, [setIsMobileMenuOpen]);

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

  function handleClickedOutsideMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className='fixed left-0 right-0 top-0 z-10'>
      <div className='container'>
        <div className='flex h-navigation-height items-center justify-between'>
          <div className='flex w-full items-center justify-between gap-2'>
            <div className='flex flex-grow basis-0 items-center justify-start xl:hidden '>
              <button onClick={handleToggleMobileMenu}>
                <span className='sr-only'>
                  {isMobileMenuOpen ? 'Close' : 'Open'} navigation menu
                </span>
                <img
                  src={HamburgerIcon}
                  width='16'
                  height='15'
                  alt='Hamburger Icon'
                />
              </button>
            </div>
            <div className='xl:flex xl:flex-grow xl:basis-0'>
              <Link to='/' onClick={handleCloseMobileMenu}>
                <img
                  src={AudiophileLogo}
                  width='143'
                  height='25'
                  alt='Audiophile Logo'
                />
              </Link>
            </div>
            <nav
              onClick={handleClickedOutsideMobileMenu}
              className={clsx(
                'xl:flex',
                isMobileMenuOpen
                  ? 'absolute left-0 right-0 top-[calc(var(--navigation-height)+1px)] z-10 block overflow-y-auto overflow-x-hidden lg:max-h-[1/3]'
                  : 'hidden'
              )}>
              <div className='fixed inset-0 top-navigation-height h-full w-full bg-neutral-900 opacity-50 xl:hidden'></div>
              <div
                onClick={e => e.stopPropagation()}
                className={clsx(
                  isMobileMenuOpen
                    ? 'relative overflow-y-auto rounded-b-lg bg-neutral-100 py-[2.1875rem]'
                    : ''
                )}>
                <ConditionalWrapper
                  condition={isMobileMenuOpen}
                  wrapper={(children: ReactNode) => (
                    <div className='container'>{children}</div>
                  )}>
                  <ul
                    className={clsx(
                      isMobileMenuOpen
                        ? 'relative mt-9 flex flex-col items-center justify-center gap-[3.75rem] lg:flex-row lg:gap-[1rem]'
                        : 'flex gap-3'
                    )}>
                    {navigationLinks.map(
                      ({
                        name,
                        href,
                        className,
                        thumbnail,
                      }: NavigationLink) => (
                        <li
                          className={clsx(
                            isMobileMenuOpen &&
                              'relative flex w-full flex-col items-center justify-center rounded-lg bg-neutral-400 p-4',
                            className
                          )}
                          key={name}>
                          {isMobileMenuOpen ? (
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
                          ) : (
                            <>
                              <NavigationLink
                                className='text-neutral-100'
                                onClick={handleCloseMobileMenu}
                                to={href}>
                                {name}
                              </NavigationLink>
                            </>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                </ConditionalWrapper>
              </div>
            </nav>
            <div className='flex flex-grow basis-0 items-center justify-end'>
              <button onClick={handleCartButtonClick}>
                <span className='sr-only'>Open navigation menu</span>
                <img src={CartIcon} width='23' height='20' alt='Cart Icon' />
              </button>
            </div>
          </div>
        </div>
        <span className='full-bleed sm:no-bleed fixed z-10 block h-[0.0625rem] bg-neutral-100/20'></span>
      </div>
    </header>
  );
}
