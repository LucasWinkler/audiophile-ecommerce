import { twJoin } from 'tailwind-merge';
import Button from '@/components/common/Button/Button';

import yx1EarphonesMobile from '@/assets/home/mobile/image-earphones-yx1.jpg';
import yx1EarphonesTablet from '@/assets/home/tablet/image-earphones-yx1.jpg';
import yx1EarphonesDesktop from '@/assets/home/desktop/image-earphones-yx1.jpg';
import Container from '@/components/common/Container';

type Yx1EarphonesSectionProps = {
  className?: string;
};

export default function Yx1EarphonesSection({
  className,
}: Yx1EarphonesSectionProps) {
  return (
    <section className={twJoin('', className)}>
      <Container className='flex flex-col gap-[1.5rem] md:gap-[0.6875rem] lg:flex-row lg:gap-[1.875rem]'>
        <div className='overflow-hidden rounded-lg lg:w-1/2'>
          <img
            className='h-full max-h-[12.5rem] min-h-[12.5rem] w-full object-cover md:hidden lg:max-h-[20rem] lg:min-h-[20rem]'
            src={yx1EarphonesMobile}
            width='654'
            height='400'
            alt='YX1 Earphones'
            loading='lazy'
          />
          <img
            className='hidden h-full max-h-[12.5rem] min-h-[12.5rem] w-full object-cover md:block lg:max-h-[20rem] lg:min-h-[20rem] xl:hidden'
            src={yx1EarphonesTablet}
            width='678'
            height='640'
            alt='YX1 Earphones'
            loading='lazy'
          />
          <img
            className='hidden h-full max-h-[12.5rem] min-h-[12.5rem] w-full object-cover lg:max-h-[20rem] lg:min-h-[20rem] xl:block'
            src={yx1EarphonesDesktop}
            width='540'
            height='320'
            alt='YX1 Earphones'
            loading='lazy'
          />
        </div>
        <div className='flex h-full max-h-[12.5rem] min-h-[12.5rem] w-full flex-col items-start justify-center gap-8 overflow-hidden rounded-lg bg-neutral-400 p-6 lg:max-h-[20rem] lg:min-h-[20rem] lg:w-1/2 lg:p-[2.56rem] xl:p-[5.94rem]'>
          <h2 className='text-2xl font-bold uppercase text-neutral-900'>
            Yx1 earphones
          </h2>
          <Button intent='secondary'>See product</Button>
        </div>
      </Container>
    </section>
  );
}
