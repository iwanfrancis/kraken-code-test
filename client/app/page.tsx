import Link from 'next/link'

const Home = () => {
  return (
    <main>
      <div className="home">
        <figure>
          <img
            src="https://static.octopuscdn.com/logos/logo.svg"
            alt="Octopus Energy Logo"
          />
        </figure>
        <h1>Welcome to my solution for the Kraken code test!</h1>
        <p>
          Go to <Link href="/product/1">/product/1</Link> to see the product
          overview.
        </p>
      </div>
    </main>
  )
}

export default Home
