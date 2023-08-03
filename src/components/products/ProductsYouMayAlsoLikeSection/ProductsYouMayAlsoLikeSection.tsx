import Container from "@/components/common/Container";

type ProductsYouMayAlsoLikeSectionProps = {
  className?: string;
};

export default function ProductsYouMayAlsoLikeSection({
  className,
}: ProductsYouMayAlsoLikeSectionProps) {
  return (
    <section className={className}>
      <Container>
        <div>
          <h2 className="text-xl uppercase leading-[2.25rem] tracking-[0.05356rem] text-neutral-900 md:text-3xl md:max-xl:basis-1/2">
            You may also like
          </h2>
          <ul></ul>
        </div>
      </Container>
    </section>
  );
}
