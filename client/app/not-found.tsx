import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div className="mt-52 flex flex-col items-center font-semibold">
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/product/1" replace>
        Go back to product page
      </Link>
    </div>
  )
}

export default NotFoundPage
