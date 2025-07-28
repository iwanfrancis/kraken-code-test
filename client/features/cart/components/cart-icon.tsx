'use client'

import Image from 'next/image'
import { useCart } from '../stores/cart-provider'

const CartIcon = () => {
  const { totalItems } = useCart()

  // I decided to just use a simple icon here, given that there is no actual cart page to link to
  return (
    <div className="relative self-center">
      <Image src="/basket.svg" alt="Basket" width={24} height={24} />
      {totalItems > 0 && (
        <span
          className="absolute text-2xs rounded-full bg-soho-lights text-white size-4 flex items-center justify-center -bottom-2 -left-2 select-none"
          title="Basket items"
          aria-label="Basket items"
        >
          {totalItems}
        </span>
      )}
    </div>
  )
}

export default CartIcon
