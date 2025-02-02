import { CheckoutForm } from "@/components/checkout/CheckoutForm/CheckoutForm";
import { CheckoutSummary } from "@/components/checkout/CheckoutSummary/CheckoutSummary";
import { EmptyCart } from "@/components/checkout/EmptyCart/EmptyCart";
import Container from "@/components/common/Container";
import GoBackButton from "@/components/products/GoBackButton/GoBackButton";
import { CartProduct } from "@/types";
import { convertToCartProduct, getCartFromLocalStorage } from "@/utils/cart";
import { getProductList } from "@/utils/products";
import { useEffect, useState } from "react";

export default function Checkout() {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const cartData = getCartFromLocalStorage();
    const products = getProductList();

    const cartProducts = cartData.reduce((acc, cartProduct) => {
      const product = products.find((product) => product.id === cartProduct.id);
      if (product) {
        acc.push(convertToCartProduct(product, cartProduct.quantity));
      }
      return acc;
    }, [] as CartProduct[]);

    setCart(cartProducts);
  }, []);

  useEffect(() => {
    const calculateCartTotal = () => {
      setCartTotal(
        cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
      );
    };

    calculateCartTotal();
  }, [cart]);

  if (!cart || cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <main className="pb-[7.5rem] pt-[calc(2rem+var(--navigation-height))] md:pb-[6rem] xl:pb-[10rem] xl:pt-[calc(6.125rem+var(--navigation-height))]">
      <Container>
        <GoBackButton>Go Back</GoBackButton>
        <div className="mt-[1.5rem] flex flex-col gap-[2rem] xl:mt-[2rem] xl:flex-row">
          <CheckoutForm
            onSubmit={(data: unknown) => console.log("data:", data)}
          />
          <CheckoutSummary
            cart={cart}
            cartTotal={cartTotal}
            onContinue={() => console.log("continue")}
          />
        </div>
      </Container>
    </main>
  );
}
