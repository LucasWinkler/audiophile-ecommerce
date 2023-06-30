import { Link } from 'react-router-dom';
import ArrowRightIcon from '@/components/common/ArrowRightIcon';

type CategoryProps = {
  name: string;
  href: string;
  thumbnail: string;
  onClick?: () => void;
};

export default function Category({
  name,
  href,
  thumbnail,
  onClick,
}: CategoryProps) {
  return (
    <li className='relative flex w-full flex-col items-center justify-center rounded-lg bg-neutral-400 p-4'>
      <div className='flex w-full flex-col items-center justify-center'>
        <img
          className='absolute top-[-26%] h-[8rem] w-auto'
          src={thumbnail}
          alt={`${name} Thumbnail`}
        />
        <p className='pt-[4.5rem] text-center text-base font-bold uppercase tracking-[0.06694rem]'>
          {name}
        </p>
        <Link
          className='btn btn-simple pt-2 before:absolute before:inset-0 before:block'
          onClick={onClick}
          to={href}>
          Shop
          <ArrowRightIcon />
        </Link>
      </div>
    </li>
  );
}
