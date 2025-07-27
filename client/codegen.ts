import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  // Typically I would have this pointed at the GraphQL server endpoint,
  // but for the sake of the code test I'm just going to store the schema
  // locally so that you don't have to run the server to generate code.
  schema: './codegen/gql/schema.graphql',
  documents: ['**/*.tsx', '**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    'codegen/gql/': {
      preset: 'client',
      plugins: [],
    },
    'codegen/gql/schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
}

export default config
