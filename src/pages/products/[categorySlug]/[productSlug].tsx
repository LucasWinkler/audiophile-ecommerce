import AudioGearSection from "@/components/common/AudioGearSection/AudioGearSection";
import CategorySection from "@/components/common/CategorySection/CategorySection";
import Container from "@/components/common/Container";
import { Product } from "@/types";
import { getProductDetailsBySlug, getProductList } from "@/utils/products";
import Head from "next/head";

type ProductProps = {
  product: Product;
};

export default function Product({ product }: ProductProps) {
  return (
    <>
      <Head>
        <title>{`Test | Audiophile e-commerce website`}</title>
      </Head>

      <main className="pb-[7.5rem] pt-[calc(2rem+var(--navigation-height))] md:pb-[6rem] md:pt-[calc(6.125rem+var(--navigation-height))] xl:pb-[10rem]">
        <Container>
          ID: {product.id} Name: {product.name}
        </Container>
        <CategorySection className="mt-[7.5rem] md:mt-[7.5rem] xl:mt-[10rem]" />
        <AudioGearSection className="mt-[7.5rem] md:mt-[7.5rem] xl:mt-[10rem]" />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const products = getProductList();
  const paths = products.map((product) => ({
    params: {
      categorySlug: product.category,
      productSlug: product.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const product = getProductDetailsBySlug(params.productSlug);

  return {
    props: {
      product,
    },
  };
}
