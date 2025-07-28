import Link from 'next/link'

const ProductListPage = () => {
  return (
    <main>
      <div className="home">
        <h1>{"I've placed the product page within a dynamic route!"}</h1>
        <p>
          Go to <Link href="/product/1">/product/1</Link> to see the product
          overview.
        </p>
      </div>
    </main>
  )
}

export default ProductListPage
