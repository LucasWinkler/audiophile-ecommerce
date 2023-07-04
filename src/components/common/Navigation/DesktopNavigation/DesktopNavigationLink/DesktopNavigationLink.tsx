import { NavLink } from 'react-router-dom';
import { twJoin } from 'tailwind-merge';

type DesktopNavigationLinkProps = {
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const activeLinkClassNames = 'text-orange';

export default function DesktopNavigationLink({
  to,
  className,
  children,
  onClick,
}: DesktopNavigationLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        twJoin(
          'whitespace-nowrap text-xs uppercase tracking-[0.125rem] text-neutral-100 transition-colors duration-300 hover:text-orange',
          isActive && activeLinkClassNames,
          className
        )
      }
      onClick={onClick}>
      {children}
    </NavLink>
  );
}
