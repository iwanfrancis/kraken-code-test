import { getProduct } from '@/features/product/api/get-product'
import ProductDescription from '@/features/product/components/product-description'
import ProductOverview from '@/features/product/components/product-overview'
import ProductSpecifications from '@/features/product/components/product-specifications'
import { notFound } from 'next/navigation'

type ProductPageProps = { params: Promise<{ productId: string }> }

const ProductPage = async ({ params }: ProductPageProps) => {
  const { productId } = await params
  const product = await getProduct(productId)

  if (!product) {
    return notFound()
  }

  return (
    <>
      <ProductOverview product={product} />
      <ProductDescription product={product} />
      <ProductSpecifications product={product} />
    </>
  )
}

export default ProductPage
