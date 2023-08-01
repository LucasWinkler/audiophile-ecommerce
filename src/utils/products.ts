import { Product } from "@/types";
import productData from "../data/products.json";

export const getProductList = () => {
  return productData;
};

export const getProductListByCategory = (category: string) => {
  const productList = productData.filter(
    (product: Product) => product.category === category,
  );

  return productList;
};

export const getProductDetailsBySlug = (slug: string) => {
  const productDetails = productData.find(
    (product: Product) => product.slug === slug,
  );

  return productDetails;
};
