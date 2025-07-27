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

const thClassName = 'font-normal'
const tdClassName = 'font-normal'

const ProductSpecifications = (props: ProductSpecificationsProps) => {
  const product = useFragment(ProductSpecificationsFragment, props.product)

  return (
    <div className="bg-siphon p-4">
      <h2 className="text-2xl mb-4">Specifications</h2>
      <table className="border-separate border-spacing-4 text-sm text-left font-normal -m-4 w-full">
        <tbody>
          <tr>
            <th className={thClassName}>Brand</th>
            <td className={tdClassName}>{product.brand}</td>
          </tr>
          <tr>
            <th className={thClassName}>Item weight (g)</th>
            <td className={tdClassName}>{product.weight}</td>
          </tr>
          <tr>
            <th className={thClassName}>Dimensions (cm)</th>
            <td className={tdClassName}>
              {product.height} x {product.width} x {product.length}
            </td>
          </tr>
          <tr>
            <th className={thClassName}>Item Model number</th>
            <td className={tdClassName}>{product.model_code}</td>
          </tr>
          <tr>
            <th className={thClassName}>Colour</th>
            <td className={tdClassName}>{product.colour}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProductSpecifications
