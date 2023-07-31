import products from "@/data/products.json";
import { Product as ProductType } from "@/types";
import Product from "./Product/Product";

export default function ProductList() {
  const { pathname } = window.location;

  const filteredProducts = products.filter((product) =>
    pathname.includes(product.category),
  );

  filteredProducts.sort((_a, b) => (b.new ? 1 : -1));

  return (
    <ul
      className={
        "flex flex-col items-center justify-center gap-[7.5rem] xl:gap-[10rem]"
      }
    >
      {filteredProducts.map((product: ProductType, index: number) => (
        <Product
          key={product.id}
          product={product}
          reverseOrder={index % 2 !== 0}
        />
      ))}
    </ul>
  );
}
