import { graphql } from '@/codegen/gql'

type ProductPageProps = { params: Promise<{ productId: string }> }

const productQueryDocument = graphql(`
  query productQuery($productId: ID!) {
    Product(id: $productId) {
      id
      name
    }
  }
`)

const ProductPage = async ({ params }: ProductPageProps) => {
  const { productId } = await params

  return <div>Product page</div>
}

export default ProductPage
