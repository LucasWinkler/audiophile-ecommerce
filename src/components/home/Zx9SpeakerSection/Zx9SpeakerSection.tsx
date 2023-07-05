import { twJoin } from 'tailwind-merge';

type Zx9SpeakerSectionProps = {
  className?: string;
};

export default function Zx9SpeakerSection({
  className,
}: Zx9SpeakerSectionProps) {
  return <section className={twJoin('', className)}>Zx9SpeakerSection</section>;
}
