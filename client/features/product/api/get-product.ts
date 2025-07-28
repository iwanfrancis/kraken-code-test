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
    context: {
      fetchOptions: {
        next: {
          revalidate: 60,
        },
      },
    },
  })

  return data.Product
}
