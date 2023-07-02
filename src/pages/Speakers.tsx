import Container from '@/components/common/Container';

export default function Speakers() {
  return (
    <section>
      <div className='bg-neutral-800 pb-[6.125rem] pt-[calc(6.125rem+var(--navigation-height))]'>
        <div className='flex flex-col items-center justify-center '>
          <h1 className='text-center text-4xl font-bold text-neutral-100'>
            Speakers
          </h1>
        </div>
      </div>
      <Container className='py-10 text-base'>
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
