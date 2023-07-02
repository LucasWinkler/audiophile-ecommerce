import HamburgerIcon from '@/assets/shared/tablet/icon-hamburger.svg';

type MobileNavigationButtonProps = {
  className?: string;
  onClick: () => void;
  isMobileMenuOpen: boolean;
};

export default function MobileNavigationButton({
  className,
  onClick,
  isMobileMenuOpen,
}: MobileNavigationButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      <span className='sr-only'>
        {isMobileMenuOpen ? 'Close' : 'Open'} navigation menu
      </span>
      <img src={HamburgerIcon} width='16' height='15' alt='Hamburger Icon' />
    </button>
  );
}
