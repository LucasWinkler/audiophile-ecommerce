import AudioGearSection from "@/components/common/AudioGearSection/AudioGearSection";
import CategorySection from "@/components/common/CategorySection/CategorySection";
import ProductSection from "@/components/products/ProductSection/ProductSection";
import { Product } from "@/types";
import {
  getProductCategoryList,
  getProductListByCategory,
} from "@/utils/products";

type ProductsProps = {
  products: Product[];
};

export default function Products({ products }: ProductsProps) {
  return (
    <>
      <div className="bg-neutral-800 pb-[2rem] pt-[calc(2rem+var(--navigation-height))] md:pb-[6.125rem] md:pt-[calc(6.125rem+var(--navigation-height))]">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-center text-2xl font-bold uppercase leading-normal text-neutral-100 md:text-4xl md:leading-[2.75rem]">
            {products[0].category}
          </h1>
        </div>
      </div>
      <main className="pb-[7.5rem] md:pb-[6rem] xl:pb-[10rem]">
        <ProductSection
          products={products}
          className="pt-[4rem] md:pt-[7.5rem] xl:pt-[10rem]"
        />
        <CategorySection className="mt-[7.5rem] md:mt-[7.5rem] xl:mt-[10rem]" />
        <AudioGearSection className="mt-[7.5rem] md:mt-[7.5rem] xl:mt-[10rem]" />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getProductCategoryList();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const products = getProductListByCategory(params.slug);
  products.sort((_a, b) => (b.new ? 1 : -1));

  return {
    props: {
      products,
    },
  };
}
