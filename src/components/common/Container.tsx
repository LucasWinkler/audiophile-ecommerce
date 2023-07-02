import { twMerge } from 'tailwind-merge';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={twMerge(
        '[--max-width:90rem] [--padding:1rem] md:[--padding:1.5rem] lg:[--padding:2rem] 2xl:[--padding:3rem]',
        '[margin-inline:auto] [width:min(100%-calc(var(--padding)*2),var(--max-width))]',
        className
      )}>
      {children}
    </div>
  );
}
