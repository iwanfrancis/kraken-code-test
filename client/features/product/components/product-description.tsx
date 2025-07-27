import { FragmentType, graphql, useFragment } from '@/codegen/gql'

const ProductDescriptionFragment = graphql(`
  fragment ProductDescription on Product {
    description
  }
`)

type ProductSpecificationsProps = {
  product: FragmentType<typeof ProductDescriptionFragment>
}

const ProductDescription = (props: ProductSpecificationsProps) => {
  const product = useFragment(ProductDescriptionFragment, props.product)

  return (
    <div className="bg-hemocyanin p-4">
      <h2 className="text-2xl mb-4">Description</h2>
      <p>{product.description}</p>
    </div>
  )
}

export default ProductDescription
