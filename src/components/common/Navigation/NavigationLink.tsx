import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

type NavigationLinkProps = {
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const activeLinkClassNames = 'text-orange';

export default function NavigationLink({
  to,
  className,
  children,
  onClick,
}: NavigationLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          'whitespace-nowrap px-2 py-2 text-xs uppercase tracking-[0.125rem] transition-colors duration-300 hover:text-orange',
          isActive && activeLinkClassNames,
          className
        )
      }
      onClick={onClick}>
      {children}
    </NavLink>
  );
}
