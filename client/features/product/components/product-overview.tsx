'use client'

import { FragmentType, graphql, useFragment } from '@/codegen/gql'
import { formatPriceGBP } from '@/utils/price'
import Image from 'next/image'
import { useState } from 'react'

const MINIMUM_QUANTITY = 1
const MAXIMUM_QUANTITY = 10

const ProductOverviewFragment = graphql(`
  fragment ProductOverview on Product {
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
    // Add to cart logic. Need to decide whether to just do state or a mutation
    console.log(`Adding ${quantity} of ${product.name} to cart.`)
  }

  return (
    <div>
      <Image
        src={product.img_url}
        alt={product.name}
        width={500}
        height={500}
      />
      <h1>{product.name}</h1>
      <p>{product.power} W</p>
      <p>Packet of {product.quantity}</p>
      <form>
        <span>{formatPriceGBP(product.price)}</span>
        <label htmlFor="quantity" aria-label="Quantity">
          Qty
        </label>
        <button
          type="button"
          onClick={handleQuantityDecrement}
          disabled={quantityIsAtMinimum}
          aria-label="Decrease quantity"
          aria-controls="quantity"
        >
          -
        </button>
        <input id="quantity" type="number" readOnly value={quantity} />
        <button
          type="button"
          onClick={handleQuantityIncrement}
          disabled={quantityIsAtMaximum}
          aria-label="Increase quantity"
          aria-controls="quantity"
        >
          +
        </button>
        <button type="submit" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </form>
    </div>
  )
}

export default ProductOverview
