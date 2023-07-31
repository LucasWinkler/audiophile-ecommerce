import Container from "@/components/common/Container";
import ProductList from "./ProductList/ProductList";

type ProductSectionProps = {
  className?: string;
};

export default function ProductSection({ className }: ProductSectionProps) {
  return (
    <section className={className}>
      <Container>
        <ProductList />
      </Container>
    </section>
  );
}
