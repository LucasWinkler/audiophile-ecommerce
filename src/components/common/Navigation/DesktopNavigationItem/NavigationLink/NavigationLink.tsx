import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

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
          'hover:text-orange whitespace-nowrap px-2 py-2 text-xs uppercase tracking-[0.125rem] text-neutral-100 transition-colors duration-300',
          isActive && activeLinkClassNames,
          className
        )
      }
      onClick={onClick}>
      {children}
    </NavLink>
  );
}
