import IconArrowRight from '../../assets/shared/desktop/icon-arrow-right.svg';

type ArrowRightIconProps = {
  className?: string;
};

export default function ArrowRightIcon({ className }: ArrowRightIconProps) {
  return <img className={className} src={IconArrowRight} alt='' />;
}
