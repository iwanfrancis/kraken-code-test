import { ProductQuery } from '@/codegen/gql/graphql'
import ProductDescription from './product-description'
import ProductOverview from './product-overview'
import ProductSpecifications from './product-specifications'

// I'm only really creating this component to make it easier to work with the provided tests.

export type ProductProps = {
  product: NonNullable<Exclude<ProductQuery['Product'], null | undefined>>
}

const Product = ({ product }: ProductProps) => {
  return (
    <>
      <ProductOverview product={product} />
      <ProductDescription product={product} />{' '}
      <ProductSpecifications product={product} />
    </>
  )
}

export default Product
