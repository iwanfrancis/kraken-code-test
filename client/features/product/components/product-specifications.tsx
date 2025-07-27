import { FragmentType, graphql, useFragment } from '@/codegen/gql'

const ProductSpecificationsFragment = graphql(`
  fragment ProductSpecifications on Product {
    brand
    weight
    width
    height
    length
    model_code
    colour
  }
`)

type ProductSpecificationsProps = {
  product: FragmentType<typeof ProductSpecificationsFragment>
}

const ProductSpecifications = (props: ProductSpecificationsProps) => {
  const product = useFragment(ProductSpecificationsFragment, props.product)

  return (
    <div>
      <h2>Specifications</h2>
      <ul>
        <li>Brand: {product.brand}</li>
        <li>Weight: {product.weight} kg</li>
        <li>Width: {product.width} cm</li>
        <li>Height: {product.height} cm</li>
        <li>Length: {product.length} cm</li>
        <li>Model Code: {product.model_code}</li>
        <li>Colour: {product.colour}</li>
      </ul>
    </div>
  )
}

export default ProductSpecifications
