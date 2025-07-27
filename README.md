# Solution to Octopus Frontend Code Test

## My Process

- Swapped out the Next.js v12 template provided with Next.js 15 app router
  - I was keen to replace the Next.js version with something a little more recent and also to switch to app router, as that's what I've been using recently and so am more familiar with.
- Added [prettier](https://prettier.io/) for consistent code formatting
- Setup [GraphQL codegen](https://the-guild.dev/graphql/codegen) for automated API type generation
  - Manually maintaining types for GraphQL requests is pretty high risk, so automating the process is the way to go.
  - To minimise the risk of setup issues for the reviewer, I opted to commit the generated code to source control. Generally speaking, this isn't best practice, but I was worried that they might have issues getting the project setup and figured it would minimise the risk.
  - I tried to get [GraphQLSP](https://github.com/0no-co/GraphQLSP?tab=readme-ov-file) setup for auto-complete when writing queries, but was having workspace issues, so opted to go without to save time.
