'use client'

import Image from 'next/image'
import { useCart } from '../stores/cart-provider'

const CartIcon = () => {
  const { totalItems } = useCart()

  return (
    <div className="relative self-center">
      <Image src="/basket.svg" alt="Basket" width={24} height={24} />
      {totalItems > 0 && (
        <span
          className="absolute text-2xs rounded-full bg-soho-lights text-white size-4 flex items-center justify-center -bottom-2 -left-2"
          aria-label="Basket items"
        >
          {totalItems}
        </span>
      )}
    </div>
  )
}

export default CartIcon
