import CartIcon from "@/assets/shared/desktop/icon-cart.svg";
import Image from "next/image";

type CartButtonProps = {
  setIsCartOpen: (value: boolean) => void;
  className?: string;
};

export default function CartButton({
  setIsCartOpen,
  className,
}: CartButtonProps) {
  const handleCartButtonClick = () => {
    setIsCartOpen(true);
  };

  return (
    <button onClick={handleCartButtonClick} className={className}>
      <span className="sr-only">Open navigation menu</span>
      <Image src={CartIcon} width="23" height="20" alt="Cart Icon" priority />
    </button>
  );
}
