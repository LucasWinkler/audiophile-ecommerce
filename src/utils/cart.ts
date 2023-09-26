import { CartProduct, LocalStorageCart, Product } from "@/types";

export const convertToCartProduct = (
  product: Product,
  quantity: number,
): CartProduct => {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image.mobile,
    quantity: quantity,
  };
};

export const getCartFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      return JSON.parse(cartData) as LocalStorageCart[];
    }
  }

  return [];
};

export const getFormattedPrice = (price: number) => {
  return price.toLocaleString("en-US");
};

export const getShortenedProductName = (name: string) => {
  return name
    .replace(/(Wireless|Headphones|Speaker|Earphones)/gi, "")
    .replace(/Mark/gi, "MK");
};
