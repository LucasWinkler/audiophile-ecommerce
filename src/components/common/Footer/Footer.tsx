import navigationLinks from '@/data/navigationLinks.json';
import Container from '@/components/common/Container';
import Logo from '@/components/common/Logo';
import DesktopNavigationLink from '@/components/common/Navigation/DesktopNavigation/DesktopNavigationLink/DesktopNavigationLink';
import FacebookIcon from '../icons/FacebookIcon';
import InstagramIcon from '../icons/InstagramIcon';
import TwitterIcon from '../icons/TwitterIcon';

export default function Footer() {
  return (
    <footer className='relative bg-neutral-900 pb-[2.37rem] pt-[3.25rem] text-neutral-100 lg:pb-[2.88rem] lg:pt-[3.75rem] 3xl:pb-[3rem] 3xl:pt-[4.69rem]'>
      <Container>
        <span className='absolute left-1/2 top-0 block h-[0.25rem] w-[6.3125rem] -translate-x-1/2 bg-orange lg:left-[unset] lg:-translate-x-0'></span>
        <div className='flex flex-col items-center lg:items-stretch'>
          <div className='flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-8'>
            <div className=''>
              <Logo />
            </div>
            <ul className='flex flex-col items-center gap-4 lg:flex-row lg:justify-start'>
              {navigationLinks.map(link => (
                <li key={link.name}>
                  <DesktopNavigationLink to={link.href}>
                    {link.name}
                  </DesktopNavigationLink>
                </li>
              ))}
            </ul>
          </div>
          <p className='mt-12 max-w-[33.75rem] text-center text-base opacity-50 lg:mt-8 lg:text-left'>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we're open 7 days a week.
          </p>
          <div className='mt-12 flex flex-col justify-between gap-12 lg:flex-row lg:gap-0'>
            <p className='text-center text-base font-bold opacity-50'>
              Copyright 2021. All Rights Reserved
            </p>
            <ul className='flex items-center justify-center gap-4 [&>li>a:hover]:text-orange [&>li>a]:cursor-pointer [&>li>a]:text-neutral-100'>
              <li>
                <a
                  aria-label='Facebook'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a
                  aria-label='Twitter'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <TwitterIcon />
                </a>
              </li>
              <li>
                <a
                  aria-label='Instagram'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
