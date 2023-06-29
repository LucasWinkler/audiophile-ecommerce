import IconArrowRight from '@/assets/shared/desktop/icon-arrow-right.svg';

type ArrowRightIconProps = {
  className?: string;
};

export default function ArrowRightIcon({ className }: ArrowRightIconProps) {
  return (
    <img
      src={IconArrowRight}
      width='8'
      height='12'
      alt=''
      className={className}
    />
  );
}
