import Container from "@/components/common/Container";
import { ImageUrls } from "@/types";

type ProductGallerySectionProps = {
  className?: string;
  gallery: {
    first: ImageUrls;
    second: ImageUrls;
    third: ImageUrls;
  };
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
