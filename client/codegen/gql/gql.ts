/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query productQuery($productId: ID!) {\n    Product(id: $productId) {\n      ...ProductOverview\n      ...ProductDescription\n      ...ProductSpecifications\n    }\n  }\n": typeof types.ProductQueryDocument,
    "\n  fragment ProductDescription on Product {\n    description\n  }\n": typeof types.ProductDescriptionFragmentDoc,
    "\n  fragment ProductOverview on Product {\n    name\n    power\n    quantity\n    price\n    img_url\n  }\n": typeof types.ProductOverviewFragmentDoc,
    "\n  fragment ProductSpecifications on Product {\n    brand\n    weight\n    width\n    height\n    length\n    model_code\n    colour\n  }\n": typeof types.ProductSpecificationsFragmentDoc,
};
const documents: Documents = {
    "\n  query productQuery($productId: ID!) {\n    Product(id: $productId) {\n      ...ProductOverview\n      ...ProductDescription\n      ...ProductSpecifications\n    }\n  }\n": types.ProductQueryDocument,
    "\n  fragment ProductDescription on Product {\n    description\n  }\n": types.ProductDescriptionFragmentDoc,
    "\n  fragment ProductOverview on Product {\n    name\n    power\n    quantity\n    price\n    img_url\n  }\n": types.ProductOverviewFragmentDoc,
    "\n  fragment ProductSpecifications on Product {\n    brand\n    weight\n    width\n    height\n    length\n    model_code\n    colour\n  }\n": types.ProductSpecificationsFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query productQuery($productId: ID!) {\n    Product(id: $productId) {\n      ...ProductOverview\n      ...ProductDescription\n      ...ProductSpecifications\n    }\n  }\n"): (typeof documents)["\n  query productQuery($productId: ID!) {\n    Product(id: $productId) {\n      ...ProductOverview\n      ...ProductDescription\n      ...ProductSpecifications\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProductDescription on Product {\n    description\n  }\n"): (typeof documents)["\n  fragment ProductDescription on Product {\n    description\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProductOverview on Product {\n    name\n    power\n    quantity\n    price\n    img_url\n  }\n"): (typeof documents)["\n  fragment ProductOverview on Product {\n    name\n    power\n    quantity\n    price\n    img_url\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProductSpecifications on Product {\n    brand\n    weight\n    width\n    height\n    length\n    model_code\n    colour\n  }\n"): (typeof documents)["\n  fragment ProductSpecifications on Product {\n    brand\n    weight\n    width\n    height\n    length\n    model_code\n    colour\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;