import { twJoin } from 'tailwind-merge';

type AudioGearSectionProps = {
  className?: string;
};

export default function AudioGearSection({ className }: AudioGearSectionProps) {
  return <section className={twJoin('', className)}>AudioGearSection</section>;
}
