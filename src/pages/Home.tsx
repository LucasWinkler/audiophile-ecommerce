import Container from '@/components/common/Container';
import Button from '@/components/common/Button/Button';

export default function Home() {
  return (
    <section>
      <div className='bg-neutral-800 pb-[12.25rem] pt-[calc(12.25rem+var(--navigation-height))]'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-center text-4xl font-bold text-neutral-100'>
            Home
          </h1>
        </div>
      </div>
      <Container className='py-10 text-base'>
        <Button intent='primary'>See product</Button>
        <Button intent='secondary'>See product</Button>
        <Button intent='secondary-alt'>See product</Button>
        <Button intent='simple'>See product</Button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          voluptatum aut nam cum aliquid fugiat deleniti. Impedit voluptatibus
          delectus id, totam ipsum ullam error, vitae nam excepturi molestiae
          dolore in officia quam nobis esse beatae? Quasi rem aperiam dolor ea
          totam ipsam nulla ex, ullam laborum blanditiis est aspernatur
          temporibus quibusdam nemo tempora voluptatibus itaque optio labore!
          Distinctio doloremque iure laboriosam reprehenderit quod sequi facilis
          voluptate nihil minus blanditiis, aperiam voluptatum qui explicabo
          laborum possimus totam corrupti atque dolorum voluptatem iste eveniet
          corporis! Pariatur, corrupti vel? Maiores illo rerum fugiat?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem nemo
          harum iusto, quaerat nesciunt ad nam. Natus tempore eveniet quibusdam?
        </p>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A itaque est
          vel eveniet distinctio aperiam aspernatur nulla ex placeat dolore
          sapiente reprehenderit, numquam ratione esse minus rem sint provident
          fugit.
        </p>
      </Container>
    </section>
  );
}
