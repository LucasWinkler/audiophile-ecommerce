import Container from "@/components/common/Container";
import GoBackButton from "@/components/products/GoBackButton/GoBackButton";

export default function Checkout() {
  return (
    <main className="pb-[7.5rem] pt-[calc(6.875rem+var(--navigation-height))] md:pb-[6rem] xl:pb-[10rem] xl:pt-[calc(8rem+var(--navigation-height))]">
      <Container>
        <GoBackButton>Go Back</GoBackButton>

        <div className="flex flex-col gap-[2rem] xl:flex-row">
          <div className="back bg-neutral-100 xl:basis-2/3">
            Checkout details
          </div>
          <div className="bg-neutral-100 xl:basis-1/3">Summary</div>
        </div>
      </Container>
    </main>
  );
}
