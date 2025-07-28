'use client'

import { FragmentType, graphql, useFragment } from '@/codegen/gql'
import { Button } from '@/components/ui/button/button'
import { useCart } from '@/features/cart/stores/cart-provider'
import { formatPriceGBP } from '@/utils/price'
import Image from 'next/image'
import { useState } from 'react'

const MINIMUM_QUANTITY = 1
const MAXIMUM_QUANTITY = 9

const ProductOverviewFragment = graphql(`
  fragment ProductOverview on Product {
    id
    name
    power
    quantity
    price
    img_url
  }
`)

type ProductOverviewProps = {
  product: FragmentType<typeof ProductOverviewFragment>
}

const ProductOverview = (props: ProductOverviewProps) => {
  const product = useFragment(ProductOverviewFragment, props.product)
  const [quantity, setQuantity] = useState(MINIMUM_QUANTITY)
  const { addItem } = useCart()

  const quantityIsAtMinimum = quantity <= MINIMUM_QUANTITY
  const quantityIsAtMaximum = quantity >= MAXIMUM_QUANTITY

  const handleQuantityIncrement = () => {
    setQuantity((prevQuantity) => Math.min(MAXIMUM_QUANTITY, prevQuantity + 1))
  }

  const handleQuantityDecrement = () => {
    setQuantity((prevQuantity) => Math.max(MINIMUM_QUANTITY, prevQuantity - 1))
  }

  const handleAddToCart = (event: React.FormEvent) => {
    event.preventDefault()
    addItem({
      id: product.id,
      name: product.name,
      quantity: quantity,
    })
  }

  return (
    <div className="p-4">
      <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden mx-auto mb-4">
        <Image
          src={product.img_url}
          alt={product.name}
          fill={true}
          sizes="(max-width: 768px) 100vw, 640px"
        />
      </div>
      <h1 className="text-4xl mb-4">{product.name}</h1>
      <span className="text-purple-haze font-medium mb-4 block">
        {`${product.power} // Packet of ${product.quantity}`}
      </span>
      <form onSubmit={handleAddToCart}>
        <div className="flex justify-between mb-5 items-end">
          <data aria-label="Price" className="text-2xl font-medium">
            {formatPriceGBP(product.price)}
          </data>
          <div className="flex flex-col">
            <label htmlFor="quantity" className="text-center text-2xs">
              Qty
            </label>
            <div className="items-center flex">
              <Button
                type="button"
                size="icon"
                onClick={handleQuantityDecrement}
                disabled={quantityIsAtMinimum}
                aria-label="Decrease quantity"
                aria-controls="quantity"
              >
                -
              </Button>
              <input
                id="quantity"
                type="number"
                title="Current quantity"
                readOnly
                value={quantity}
                className="w-8 text-center text-2xl font-semibold pointer-events-none arrow-hide"
              />
              <Button
                type="button"
                size="icon"
                onClick={handleQuantityIncrement}
                disabled={quantityIsAtMaximum}
                aria-label="Increase quantity"
                aria-controls="quantity"
              >
                +
              </Button>
            </div>
          </div>
        </div>
        <Button type="submit" className="w-full">
          Add to cart
        </Button>
      </form>
    </div>
  )
}

export default ProductOverview
