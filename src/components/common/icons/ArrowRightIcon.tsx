import IconArrowRight from '@/assets/shared/desktop/icon-arrow-right.svg';
import { IconProps } from '@/types';

export default function ArrowRightIcon({ className }: IconProps) {
  return (
    <img
      className={className}
      src={IconArrowRight}
      alt=''
      width='8'
      height='12'
    />
  );
}
