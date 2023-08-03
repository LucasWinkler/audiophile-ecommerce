import AudioGearSection from "@/components/common/AudioGearSection/AudioGearSection";
import CategorySection from "@/components/common/CategorySection/CategorySection";
import Container from "@/components/common/Container";
import GoBackButton from "@/components/products/GoBackButton/GoBackButton";
import { Product } from "@/types";
import { getProductBySlug, getProductList } from "@/utils/products";
import Head from "next/head";

type ProductProps = {
  product: Product;
};

export default function Product({ product }: ProductProps) {
  return (
    <>
      <Head>
        <title>{`${product.name} | Audiophile e-commerce website`}</title>
      </Head>

      <main className="pb-[7.5rem] pt-[calc(2rem+var(--navigation-height))] md:pb-[6rem] md:pt-[calc(6.125rem+var(--navigation-height))] xl:pb-[10rem]">
        <Container>
          <GoBackButton>Go Back</GoBackButton>
        </Container>
        {/* Product details */}
        <section>
          <Container>
            <div className="flex gap-4">
              <div>Image</div>
              <div>Product</div>
            </div>
          </Container>
        </section>
        {/* Product features */}
        <section>
          <Container>
            <div>
              <div>Features</div>
              <div>In the box</div>
            </div>
          </Container>
        </section>
        {/* Product showcase */}
        <section>
          <Container>
            <div>Showcase</div>
          </Container>
        </section>
        {/* You may also like */}
        <section>
          <Container>
            <div>
              <h2>You may also like</h2>
              <div>
                <div>Product</div>
              </div>
            </div>
          </Container>
        </section>
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
  const product = getProductBySlug(params.productSlug);

  return {
    props: {
      product,
    },
  };
}
