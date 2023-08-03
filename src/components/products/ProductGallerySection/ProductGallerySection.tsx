import Container from "@/components/common/Container";

type ProductGallerySectionProps = {
  className?: string;
};

export default function ProductGallerySection({
  className,
}: ProductGallerySectionProps) {
  return (
    <section className={className}>
      <Container>
        <div>Showcase</div>
      </Container>
    </section>
  );
}
