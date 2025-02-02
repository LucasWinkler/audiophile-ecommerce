import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import Button from '@/components/common/Button/Button'
import { CartProduct } from '@/types'
import { getFormattedPrice, getShortenedProductName } from '@/utils/cart'

interface CheckoutSummaryProps {
  cart: CartProduct[]
  cartTotal: number
  onContinue: () => void
}

export function CheckoutSummary({ cart, cartTotal, onContinue }: CheckoutSummaryProps) {
  const SHIPPING_COST = 50
  const VAT_RATE = 0.2

  const calculateVatAmount = () => {
    return (cartTotal * VAT_RATE) / 100
  }

  const calculateGrandTotal = () => {
    return cartTotal + SHIPPING_COST
  }

  return (
    <div className="w-full overflow-hidden rounded-lg bg-neutral-100 p-[1.5rem] lg:p-[2rem] xl:basis-1/3">
      <h2 className="text-lg font-bold uppercase text-neutral-900">Summary</h2>
      <div className={twMerge("mt-[2rem] space-y-[1.5rem]", cart.length === 0 && "mt-[1.5rem]")}>
        <ul className="space-y-[1.5rem] overflow-y-auto">
          {cart.map((item) => (
            <li key={item.id} className="flex items-center gap-[1rem]">
              <Image
                width={64}
                height={64}
                src={item.image}
                alt={item.name}
                className="rounded-lg"
              />
              <div className="flex w-full flex-col">
                <div className="flex justify-between">
                  <span className="text-base font-bold">{getShortenedProductName(item.name)}</span>
                  <span className="ml-auto text-base font-bold text-neutral-900/50">x{item.quantity}</span>
                </div>
                <span className="whitespace-nowrap text-sm font-bold leading-[1.5625rem] tracking-normal text-neutral-900/50">
                  $ {getFormattedPrice(item.price)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {cart.length > 0 && (
        <div className="mt-[2rem] flex flex-col gap-[0.5rem]">
          <div className="flex justify-between">
            <span className="text-base uppercase text-neutral-900/50">Total</span>
            <span className="text-lg text-neutral-900">$ {getFormattedPrice(cartTotal)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-base uppercase text-neutral-900/50">Shipping</span>
            <span className="text-lg text-neutral-900">$ {SHIPPING_COST}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-base uppercase text-neutral-900/50">Vat (included)</span>
            <span className="text-lg text-neutral-900">$ {getFormattedPrice(calculateVatAmount())}</span>
          </div>
          <div className="mt-[1rem] flex justify-between">
            <span className="text-base uppercase text-neutral-900/50">Grand total</span>
            <span className="text-lg text-orange">$ {getFormattedPrice(calculateGrandTotal())}</span>
          </div>
        </div>
      )}
      <Button className="mt-[2rem]" intent="primary" fullWidth onClick={onContinue}>
        Continue & pay
      </Button>
    </div>
  )
} 