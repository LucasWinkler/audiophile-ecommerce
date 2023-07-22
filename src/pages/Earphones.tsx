import AudioGearSection from '@/components/common/AudioGearSection/AudioGearSection';
import CategorySection from '@/components/common/CategorySection/CategorySection';

export default function Earphones() {
  return (
    <section>
      <div className='bg-neutral-800 pb-[6.125rem] pt-[calc(6.125rem+var(--navigation-height))]'>
        <div className='flex flex-col items-center justify-center '>
          <h1 className='text-center text-4xl font-bold text-neutral-100'>
            Earphones
          </h1>
        </div>
      </div>
      <CategorySection className='mt-[7.5rem] md:mt-[7.5rem] xl:mt-[10rem]' />
      <AudioGearSection className='my-[7.5rem] md:my-[7.5rem] xl:my-[10rem]' />
    </section>
  );
}
