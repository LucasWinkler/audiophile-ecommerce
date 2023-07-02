import { cva, type VariantProps } from 'cva';
import { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

// export type ButtonVariants = VariantProps<typeof buttonVariants>;
// export const buttonVariants = cva(['button inline-block'], {
//   variants: {
//     intent: {
//       primary: ['bg-orange'],
//     },
//   },
//   defaultVariants: {
//     intent: 'primary',
//   },
// });

// export const Button = (variants: ButtonVariants) =>
//   twMerge(buttonVariants(variants));

const button = cva(
  [
    '[--padding-x:1.9rem] [--padding-y:0.94rem]',
    'inline-block cursor-pointer select-none whitespace-nowrap px-[--padding-x] py-[--padding-y] text-center text-xs uppercase tracking-[0.0625rem] transition duration-300 ease-in-out',
  ],
  {
    variants: {
      intent: {
        primary: 'bg-orange text-neutral-100 hover:bg-orange-light',
        secondary:
          'border border-neutral-900 bg-transparent px-[calc(1.9rem-1px)] py-[calc(0.94rem-1px)] text-neutral-900 hover:bg-neutral-900 hover:text-neutral-100',
        'secondary-alt': 'bg-neutral-900 text-neutral-100 hover:bg-neutral-600',
        simple: [
          '[--padding-x:0.1rem] [--padding-y:0.1rem]',
          'inline-flex items-center justify-center gap-[0.83rem] text-neutral-900/50 hover:text-orange [&>img]:h-3 [&>img]:w-auto]',
        ],
      },
      fullWidth: {
        true: 'w-full',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
);

interface ButtonAsButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  href?: never;
}

interface ButtonAsAnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

type ButtonProps = VariantProps<typeof button> &
  (ButtonAsButtonProps | ButtonAsAnchorProps) & {
    children: React.ReactNode;
    loading?: boolean;
  };

const Button = ({
  children,
  intent,
  fullWidth,
  disabled,
  ...buttonAttributes
}: ButtonProps) => {
  const classes = twMerge(
    button({
      intent,
      fullWidth,
      disabled,
    })
  );

  const ButtonChildren = () => <>{children}</>;

  if (typeof buttonAttributes.href === 'string') {
    return (
      <Link
        className={classes}
        to={buttonAttributes.href}
        {...buttonAttributes}>
        <ButtonChildren />
      </Link>
    );
  }

  return (
    <button className={classes} {...buttonAttributes}>
      <ButtonChildren />
    </button>
  );
};

export default Button;
