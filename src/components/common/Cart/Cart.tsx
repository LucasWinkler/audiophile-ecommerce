import { useEffect } from "react";
import { twJoin } from "tailwind-merge";
import Button from "../Button/Button";
import Container from "../Container";

type CartProps = {
  isCartOpen: boolean;
  setIsCartOpen: (isCartOpen: boolean) => void;
  className?: string;
};

export default function Cart({
  isCartOpen,
  setIsCartOpen,
  className,
}: CartProps) {
  const handleClickOutside = () => {
    setIsCartOpen(false);
  };

  useEffect(() => {
    const html = document.querySelector("html");

    if (html) {
      const documentHasScrollbar = html.scrollHeight > html.clientHeight;

      const classesToToggle = [
        "overflow-hidden",
        documentHasScrollbar ? "overflow-y-scroll" : "overflow-y-hidden",
        "fixed",
        "inset-0",
      ];

      classesToToggle.forEach((classesToToggle) => {
        html.classList.toggle(classesToToggle, isCartOpen);
      });
    }
  }, [isCartOpen]);

  useEffect(() => {
    const handleEscapePressed = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapePressed);

    return () => {
      document.removeEventListener("keydown", handleEscapePressed);
    };
  }, [setIsCartOpen]);

  if (!isCartOpen) {
    return null;
  }

  return (
    <div
      onClick={handleClickOutside}
      className={twJoin("fixed inset-0 z-[10] h-full w-full", className)}
    >
      <div className="fixed inset-0 h-full w-full bg-neutral-900/40"></div>
      <div className="fixed top-[calc(2rem+var(--navigation-height))] w-full">
        <Container>
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full overflow-hidden rounded-lg bg-neutral-100 p-[2rem] lg:ml-auto lg:w-fit"
          >
            <div className="flex justify-between gap-1">
              <p className="text-lg font-bold uppercase text-neutral-900">
                Cart (3)
              </p>
              <button className="text-base text-neutral-900/50 underline hover:text-orange focus:text-orange">
                Remove all
              </button>
            </div>
            <div className="mt-[2rem] space-y-[1.5rem]">
              <ul className="space-y-[1.5rem]">
                <li className="flex items-center justify-between gap-[1rem]">
                  <div className="h-[4rem] w-[4rem] rounded-lg bg-neutral-400"></div>
                  <div className="mr-auto flex flex-col">
                    <span className="text-base font-bold">XX99 MK II</span>
                    <span className="text-sm font-bold leading-[1.5625rem] tracking-normal text-neutral-900/50">
                      $ 2,999
                    </span>
                  </div>
                  <div className="flex h-[2rem] w-[6rem] items-center justify-between bg-neutral-400 text-[0.8125rem] font-bold">
                    <button className="h-full basis-1/3 text-[1rem] text-neutral-900/25 transition duration-300 ease-in-out hover:text-orange">
                      -
                    </button>
                    <span className="text-neutral-900">1</span>
                    <button className="h-full basis-1/3 text-[1rem] text-neutral-900/25 transition duration-300 ease-in-out hover:text-orange">
                      +
                    </button>
                  </div>
                </li>
                <li className="flex items-center justify-between gap-[1rem]">
                  <div className="h-[4rem] w-[4rem] rounded-lg bg-neutral-400"></div>
                  <div className="mr-auto flex flex-col">
                    <span className="text-base font-bold">XX59</span>
                    <span className="text-sm font-bold leading-[1.5625rem] tracking-normal text-neutral-900/50">
                      $ 899
                    </span>
                  </div>
                  <div className="flex h-[2rem] w-[6rem] items-center justify-between bg-neutral-400 text-[0.8125rem] font-bold">
                    <button className="h-full basis-1/3 text-[1rem] text-neutral-900/25 transition duration-300 ease-in-out hover:text-orange">
                      -
                    </button>
                    <span className="text-neutral-900">2</span>
                    <button className="h-full basis-1/3 text-[1rem] text-neutral-900/25 transition duration-300 ease-in-out hover:text-orange">
                      +
                    </button>
                  </div>
                </li>
                <li className="flex items-center justify-between gap-[1rem]">
                  <div className="h-[4rem] w-[4rem] rounded-lg bg-neutral-400"></div>
                  <div className="mr-auto flex flex-col">
                    <span className="text-base font-bold">YX1</span>
                    <span className="text-sm font-bold leading-[1.5625rem] tracking-normal text-neutral-900/50">
                      $ 599
                    </span>
                  </div>
                  <div className="flex h-[2rem] w-[6rem] items-center justify-between bg-neutral-400 text-[0.8125rem] font-bold">
                    <button className="h-full basis-1/3 text-[1rem] text-neutral-900/25 transition duration-300 ease-in-out hover:text-orange">
                      -
                    </button>
                    <span className="text-neutral-900">1</span>
                    <button className="h-full basis-1/3 text-[1rem] text-neutral-900/25 transition duration-300 ease-in-out hover:text-orange">
                      +
                    </button>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-[2rem] flex justify-between">
              <span className="text-base uppercase text-neutral-900/50">
                Total
              </span>
              <span className="text-lg text-neutral-900">$ 5,369</span>
            </div>
            <Button className="mt-[1.5rem]" fullWidth intent="primary">
              Checkout
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
