import ProductSection from '@/components/categories/ProductSection/ProductSection';
import AudioGearSection from '@/components/common/AudioGearSection/AudioGearSection';
import CategorySection from '@/components/common/CategorySection/CategorySection';

export default function Headphones() {
  return (
    <>
      <div className='bg-neutral-800 pb-[6.125rem] pt-[calc(6.125rem+var(--navigation-height))]'>
        <div className='flex flex-col items-center justify-center '>
          <h1 className='text-center text-4xl font-bold text-neutral-100'>
            Headphones
          </h1>
        </div>
      </div>
      <main className='pb-[7.5rem] md:pb-[6rem] xl:pb-[10rem]'>
        <ProductSection className='pt-[4rem] md:pt-[7.5rem] xl:pt-[10rem]' />
        <CategorySection className='mt-[7.5rem] md:mt-[7.5rem] xl:mt-[10rem]' />
        <AudioGearSection className='mt-[7.5rem] md:mt-[7.5rem] xl:mt-[10rem]' />
      </main>
    </>
  );
}
