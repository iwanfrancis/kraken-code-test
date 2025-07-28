import { getProduct } from '@/features/product/api/get-product'
import Product from '@/features/product/components/product'
import { notFound } from 'next/navigation'

type ProductPageProps = { params: Promise<{ productId: string }> }

const ProductPage = async ({ params }: ProductPageProps) => {
  const { productId } = await params
  const product = await getProduct(productId)

  if (!product) {
    return notFound()
  }

  return (
    <main>
      <Product product={product} />
    </main>
  )
}

export default ProductPage
