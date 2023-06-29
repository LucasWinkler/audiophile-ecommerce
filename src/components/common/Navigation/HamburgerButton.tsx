import HamburgerIcon from '@/assets/shared/tablet/icon-hamburger.svg';

type HamburgerButtonProps = {
  className?: string;
  onClick?: () => void;
  isMobileMenuOpen: boolean;
};

export default function HamburgerButton({
  className,
  onClick,
  isMobileMenuOpen,
}: HamburgerButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      <span className='sr-only'>
        {isMobileMenuOpen ? 'Close' : 'Open'} navigation menu
      </span>
      <img src={HamburgerIcon} width='16' height='15' alt='Hamburger Icon' />
    </button>
  );
}
