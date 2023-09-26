import Button from "@/components/common/Button/Button";
import CategorySection from "@/components/common/CategorySection/CategorySection";
import Container from "@/components/common/Container";
import GoBackButton from "@/components/products/GoBackButton/GoBackButton";
import { CartProduct } from "@/types";
import {
  convertToCartProduct,
  getCartFromLocalStorage,
  getFormattedPrice,
  getShortenedProductName,
} from "@/utils/cart";
import { getProductList } from "@/utils/products";
import Image from "next/image";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Checkout() {
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [cartTotal, setCartTotal] = useState(0);

  const SHIPPING_COST = 50;
  const VAT_RATE = 0.2;

  const calculateVatAmount = () => {
    return (cartTotal * VAT_RATE) / 100;
  };

  const calculateGrandTotal = () => {
    return cartTotal + SHIPPING_COST;
  };

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
        cart.reduce((sum, item) => {
          return sum + item.price * item.quantity;
        }, 0),
      );
    };

    calculateCartTotal();
  }, [cart]);

  if (!cart) {
    return (
      <main className="pb-[7.5rem] pt-[calc(6.875rem+var(--navigation-height))] md:pb-[6rem] xl:pb-[10rem] xl:pt-[calc(8rem+var(--navigation-height))]">
        <Container className="text-center">
          <h1 className="text-xl font-bold uppercase lg:text-4xl">
            Your cart is empty!
          </h1>
          <p className="mt-[2rem] text-base opacity-50">
            Before proceeding to checkout you must add a product to your cart.
          </p>
          <Button className="mt-[2rem]" href="/" intent="primary">
            Return to home
          </Button>
        </Container>
        <CategorySection className="pt-[8rem]" />
      </main>
    );
  }

  return (
    <main className="pb-[7.5rem] pt-[calc(2rem+var(--navigation-height))] md:pb-[6rem] xl:pb-[10rem] xl:pt-[calc(6.125rem+var(--navigation-height))]">
      <Container>
        <GoBackButton>Go Back</GoBackButton>
        <div className="mt-[1.5rem] flex flex-col gap-[2rem] xl:mt-[2rem] xl:flex-row">
          <div className="w-full overflow-hidden rounded-lg bg-neutral-100 p-[1.5rem] lg:p-[2rem] xl:basis-2/3">
            <h1 className="pt-[0.35rem] text-2xl font-bold uppercase text-neutral-900 lg:text-3xl">
              Checkout
            </h1>
          </div>
          <div className="w-full overflow-hidden rounded-lg bg-neutral-100 p-[1.5rem] lg:p-[2rem] xl:basis-1/3">
            <h2 className="text-lg font-bold uppercase text-neutral-900">
              Summary
            </h2>
            <div
              className={twMerge(
                "mt-[2rem] space-y-[1.5rem]",
                cart.length === 0 && "mt-[1.5rem]",
              )}
            >
              <ul className="space-y-[1.5rem] overflow-y-auto">
                {cart.map((item) => (
                  <li key={item.id} className="flex items-center gap-[1rem]">
                    <Image
                      width="64"
                      height="64"
                      src={item.image}
                      alt={item.name}
                      className="rounded-lg"
                    />
                    <div className="flex w-full flex-col">
                      <div className="flex justify-between">
                        <span className="text-base font-bold">
                          {getShortenedProductName(item.name)}
                        </span>
                        <span className="ml-auto text-base font-bold text-neutral-900/50">
                          x{item.quantity}
                        </span>
                      </div>
                      <span className="whitespace-nowrap text-sm font-bold leading-[1.5625rem] tracking-normal text-neutral-900/50">
                        $ {getFormattedPrice(item.price)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {cart.length > 0 && (
              <div className="mt-[2rem] flex flex-col gap-[0.5rem]">
                <div className="flex justify-between">
                  <span className="text-base uppercase text-neutral-900/50">
                    Total
                  </span>
                  <span className="text-lg text-neutral-900">
                    $ {getFormattedPrice(cartTotal)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base uppercase text-neutral-900/50">
                    Shipping
                  </span>
                  <span className="text-lg text-neutral-900">
                    $ {SHIPPING_COST}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-base uppercase text-neutral-900/50">
                    Vat (included)
                  </span>
                  <span className="text-lg text-neutral-900">
                    $ {getFormattedPrice(calculateVatAmount())}
                  </span>
                </div>
                <div className="mt-[1rem] flex justify-between">
                  <span className="text-base uppercase text-neutral-900/50">
                    Grand total
                  </span>
                  <span className="text-lg text-orange">
                    $ {getFormattedPrice(calculateGrandTotal())}
                  </span>
                </div>
              </div>
            )}
            <Button className="mt-[2rem]" intent="primary" fullWidth>
              Continue & pay
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
