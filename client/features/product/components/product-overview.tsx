import { FragmentType, graphql, useFragment } from '@/codegen/gql'
import Image from 'next/image'

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
      <p>Price: ${product.price.toFixed(2)}</p>
    </div>
  )
}

export default ProductOverview
