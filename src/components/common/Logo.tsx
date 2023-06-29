import { Link } from 'react-router-dom';
import AudiophileLogo from '@/assets/shared/desktop/logo.svg';

type LogoProps = {
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function Logo({ href = '/', onClick, className }: LogoProps) {
  return (
    <Link to={href} onClick={onClick} className={className}>
      <img src={AudiophileLogo} width='143' height='25' alt='Audiophile Logo' />
    </Link>
  );
}
