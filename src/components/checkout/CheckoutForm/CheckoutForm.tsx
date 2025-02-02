interface CheckoutFormProps {
  onSubmit: (data: unknown) => void
}

export function CheckoutForm({ onSubmit }: CheckoutFormProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-neutral-100 p-[1.5rem] lg:p-[2rem] xl:basis-2/3">
      <h1 className="pt-[0.35rem] text-2xl font-bold uppercase text-neutral-900 lg:text-3xl">
        Checkout
      </h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        onSubmit(e)
      }}>
        {/* Form fields will go here */}
      </form>
    </div>
  )
} 