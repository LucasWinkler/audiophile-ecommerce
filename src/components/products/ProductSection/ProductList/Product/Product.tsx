import Button from "@/components/common/Button/Button";
import { Product as ProductType } from "@/types";
import Image from "next/image";
import { twJoin } from "tailwind-merge";

type ProductProps = {
  product: ProductType;
  reverseOrder?: boolean;
  className?: string;
};

export default function Product({
  product,
  reverseOrder,
  className,
}: ProductProps) {
  return (
    <li
      className={twJoin(
        "flex flex-col items-center gap-[2rem] lg:gap-[3.25rem] xl:gap-[7.8125rem]",
        reverseOrder ? "xl:flex-row-reverse" : "xl:flex-row",
        className,
      )}
    >
      <div className="relative order-1 overflow-hidden rounded-lg xl:w-1/2">
        <Image
          className="object-cover md:hidden"
          src={product.categoryImage.mobile}
          alt={product.name}
          width={654}
          height={704}
        />
        <Image
          className="hidden object-cover md:block xl:hidden"
          src={product.categoryImage.tablet}
          alt={product.name}
          width={1378}
          height={704}
        />
        <Image
          className="hidden object-cover xl:block"
          src={product.categoryImage.desktop}
          alt={product.name}
          width={1080}
          height={1120}
        />
      </div>
      <div className="order-2 text-center lg:max-w-[35.8125rem] xl:w-1/2 xl:text-left">
        {product.new && (
          <span className="mb-[1.5rem] block text-sm uppercase leading-normal text-orange md:mb-[1rem] xl:mb-[1rem]">
            New product
          </span>
        )}
        <h2 className="mx-auto max-w-[15ch] text-2xl font-bold uppercase text-neutral-900 lg:text-4xl xl:mx-0">
          {product.name}
        </h2>
        <p className="mt-[1.5rem] text-base opacity-50 md:mt-[2rem]">
          {product.description}
        </p>
        <Button
          intent="primary"
          className="mt-[1.5rem] md:mt-[2.44rem] lg:mt-[2.5rem]"
        >
          See product
        </Button>
      </div>
    </li>
  );
}
