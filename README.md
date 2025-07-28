# Solution to Kraken Frontend Code Test

## TLDR

- Next.js 15 w/ App Router
- [TailwindCSS](https://tailwindcss.com/) for styling
- Stuck to [bulletproof react](https://github.com/alan2207/bulletproof-react) for project structure
- Implemented [GraphQL codegen](https://the-guild.dev/graphql/codegen) for tidy graphql schemas and type generation
- Data fetching with [Apollo Client](https://github.com/apollographql/apollo-client-integrations/tree/main/packages/nextjs)
- Used a context provider for Cart status

## My Process

These are notes that I've taken as I went through the test. Hopefully they should explain my approach and my thought process as I went.

- I am pretending that this is a codebase that I want to continue expanding and so am trying to make decisions that will keep the codebase scalable.
  - This includes setting up folder structures and using libraries that may seem overkill given the scope of the test.
- Swapped out the Next.js v12 template provided with Next.js 15 app router
  - I was keen to replace the Next.js version with something a little more recent and also to switch to app router, as that's what I've been using recently and so am more familiar with.
- Added [prettier](https://prettier.io/) for consistent code formatting
- Setup [GraphQL codegen](https://the-guild.dev/graphql/codegen) for automated API type generation
  - Manually maintaining types for GraphQL requests is pretty high risk, so automating the process is the way to go.
  - To minimise the risk of setup issues for the reviewer, I opted to commit the generated code to source control. Generally speaking, this isn't best practice, but I was worried that they might have issues getting the project setup and figured it would minimise the risk.
  - I tried to get [GraphQLSP](https://github.com/0no-co/GraphQLSP?tab=readme-ov-file) setup for auto-complete when writing queries, but was having workspace issues, so opted to go without to save time.
- Setup [Apollo Client](https://github.com/apollographql/apollo-client-integrations/tree/main/packages/nextjs) with the App Router support to do the data fetching for the product page.
- Laid out the structural components for the product page.
  - I wanted to take a co-located fragment approach. You'll find each component in the [features/product/components](./client/features/product/components/) folder has a graphql fragment, which are each referenced in the overall graphql query defined in [features/product/api/get-product.ts](./client/features/product/api/get-product.ts) file.
  - For the project structure, I'm loosely following [bulletproof react](https://github.com/alan2207/bulletproof-react) structure, which I find to be a really tidy way to structure projects.
- Setup the 'Add to cart' form
  - Not actually performing an operation yet. I'd like to see if I can get it doing a graphql mutation rather than just updating some global context for the basket icon.
- Setup header and footer with styling
  - Included a layout component for centering content and adding consident margins
  - Setup a cn function for easier tailwind classname handling
- Add styling for the rest of the product page
- Setup button component
  - Decided to use [CVA](https://cva.style/docs), even though the button has very few variants. This would make it extremely easy to spin up new variants of the button.
  - For base components I have been experimenting with using [shadcn](https://ui.shadcn.com/) as a base point. In this case I took the shadcn button but stripped it back a bit as it was a little _too_ overkill in this scenario.
  - I don't like re-inventing wheels, so component libraries are a big win for quick development and accessibility. I like the idea of shadcn a lot as the whole idea is that you copy the code into your project instead of installing a library with lots of components at once. You just take what you need.
- Setup cart behaviour
  - I probably should have done this earlier but got sidetracked with styling. I opted for a simple context provider allowing the cart to be updated from the product overview and read from the header.
- Sort out tests
  - I had to adjust the tests slightly to make them work with the project structure I've chosen.
  - App router is notorious for making it a bit tricker to test, given the introduction of server components. I ended up writing a wrapper 'Product' component so that I could avoid testing the page component itself, as it handles data fetching asynchronously.
  - That test would be a candidate for an E2E test.
- Final pass on styling
  - I wanted to wait until the end to do a second pass on the styling as I wanted to get it as close to the provided design as possible. Obviously it's very difficult when working off of an image so I did my best eye-balling the styles.
- Added some nextjs error pages/caching stuff.
- Going to leave it there as I don't have more time to continue

## Next steps / Further improvements

- If I had a figma file it would be possible to dial the styles in more
- More complex error handling
  - I added an error boundary and a basic 404 page but didn't actually add an more complicated error handling for the graphql request
- Handle cart behaviour via mutations
  - Any real life e-comm site would be tracking carts server side, so it'd make far more sense if the 'add to cart' button made a network request
  - The cart status could be fetched/cached client side and then [optimistically updated](https://www.apollographql.com/docs/react/performance/optimistic-ui) when the 'add to cart' button is clicked
- Further testing
  - I didn't have enough time to write tests for all my code - I added tests for those which were simple enough, but would have needed to set up more test infrastructure for other areas.
- Get rid of legacy styling
  - I left the css which was included in the base project as-is and slapped tailwind on top. I could have replaced the preset styles with tailwind ones if I had time.
- Further component breakdown
  - I might have chosen to break the [ProductOverview](/client/features/product/components/product-overview.tsx) component into two, as it needed to be a client component to track the state of the form. This meant that uneccessary parts of the screen were re-rendering on user interaction. Of course at such small scale that's not really a performance concern but at larger scale you might consider it.
  - I was planning on making a reusable icon component but decided against it on time basis
- Better desktop friendly design
  - The provided design was mobile only. I made sure that it didn't look ridiculous on desktop, but could also have done more to make that experience a little better.
- i18n
  - I baked all of the copy into the component for speed but in a real project I would definitey have set up some intl like [next-intl](https://next-intl.dev/). Even if no localisation is needed, it's far nicer to have the copy seperated from the components.
  - Based on the last time i set up next-intl it was a bit of a tedious process so I opted not to in this case.
- ISR
  - I didn't implement any incremental static revalidation on the site as it would have meant that the server would need to be running during build, which is a bit tedious for such a simple site.
  - Instead the page is SSR-on-request.
  - This would simply be a case of creating a getAllProduct api query and then adding a generateStaticParams function to the product page which gets all the ids.
