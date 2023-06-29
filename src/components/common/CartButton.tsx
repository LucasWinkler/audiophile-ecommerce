import CartIcon from '@/assets/shared/desktop/icon-cart.svg';

type CartButtonProps = {
  onClick?: () => void;
  className?: string;
};

export default function CartButton({ onClick, className }: CartButtonProps) {
  // TODO: Open cart modal
  const handleCartButtonClick = () => {
    onClick?.();
  };

  return (
    <button onClick={handleCartButtonClick} className={className}>
      <span className='sr-only'>Open navigation menu</span>
      <img src={CartIcon} width='23' height='20' alt='Cart Icon' />
    </button>
  );
}
