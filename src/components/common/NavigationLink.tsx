import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

type NavigationLinkProps = {
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const activeLinkClassName = 'lg:text-orange';

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
          'whitespace-nowrap px-2 py-2 transition-colors duration-300 hover:text-orange',
          isActive && activeLinkClassName,
          className
        )
      }
      onClick={onClick}>
      {children}
    </NavLink>
  );
}
