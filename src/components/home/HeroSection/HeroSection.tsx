import { twJoin } from 'tailwind-merge';

type HeroSectionProps = {
  className?: string;
};

export default function HeroSection({ className }: HeroSectionProps) {
  return (
    <section className={twJoin('bg-neutral-800 pb-[12.25rem]', className)}>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-center text-4xl font-bold text-neutral-100'>
          Home
        </h1>
      </div>
    </section>
  );
}
