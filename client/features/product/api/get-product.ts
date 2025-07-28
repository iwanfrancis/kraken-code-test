import { graphql } from '@/codegen/gql'
import { query } from '@/lib/api-client'

const productQueryDocument = graphql(`
  query product($productId: ID!) {
    Product(id: $productId) {
      ...ProductOverview
      ...ProductDescription
      ...ProductSpecifications
    }
  }
`)

export const getProduct = async (productId: string) => {
  const { data } = await query({
    query: productQueryDocument,
    variables: { productId },
  })

  return data.Product
}
