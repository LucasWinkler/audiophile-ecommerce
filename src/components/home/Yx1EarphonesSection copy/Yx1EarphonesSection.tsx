import { twJoin } from 'tailwind-merge';

type Yx1EarphonesSectionProps = {
  className?: string;
};

export default function Yx1EarphonesSection({
  className,
}: Yx1EarphonesSectionProps) {
  return (
    <section className={twJoin('', className)}>Yx1EarphonesSection</section>
  );
}
