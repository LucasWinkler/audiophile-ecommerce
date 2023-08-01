import zx7SpeakerDesktop from "@/assets/home/desktop/image-speaker-zx7.jpg";
import zx7SpeakerMobile from "@/assets/home/mobile/image-speaker-zx7.jpg";
import zx7SpeakerTablet from "@/assets/home/tablet/image-speaker-zx7.jpg";
import Button from "@/components/common/Button/Button";
import Container from "@/components/common/Container";
import Image from "next/image";
import { twJoin } from "tailwind-merge";

type Zx7SpeakerSectionProps = {
  className?: string;
};

export default function Zx7SpeakerSection({
  className,
}: Zx7SpeakerSectionProps) {
  return (
    <section className={twJoin("", className)}>
      <Container className="relative overflow-hidden rounded-lg">
        <div className="flex h-full max-h-[20rem] min-h-[20rem] w-full flex-col items-start justify-center gap-8 p-6 md:p-[3.875rem]">
          <h2 className="text-2xl font-bold uppercase text-neutral-900">
            Zx7 speaker
          </h2>
          <Button href="/products/speakers/zx7-speaker" intent="secondary">
            See product
          </Button>
          <Image
            className="absolute left-0 top-0 z-[-1] h-full w-full object-cover md:hidden"
            src={zx7SpeakerMobile}
            width="654"
            height="640"
            alt="ZX7 Speaker"
            loading="lazy"
          />
          <Image
            className="absolute left-0 top-0 z-[-1] hidden h-full w-full object-cover md:block xl:hidden"
            src={zx7SpeakerTablet}
            width="689"
            height="320"
            alt="ZX7 Speaker"
            loading="lazy"
          />
          <Image
            className="absolute left-0 top-0 z-[-1] hidden h-full w-full object-cover xl:block"
            src={zx7SpeakerDesktop}
            width="1110"
            height="320"
            alt="ZX7 Speaker"
            loading="lazy"
          />
        </div>
      </Container>
    </section>
  );
}
