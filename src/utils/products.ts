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

export const getProductCategoryList = () => {
  const uniqueCategories = new Set(
    productData.map((product: Product) => product.category),
  );
  const productCategories = Array.from(uniqueCategories).map((category) => ({
    params: { slug: category },
  }));

  return productCategories;
};
