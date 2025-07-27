/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyProduct?: Maybe<Array<Maybe<Product>>>;
  createProduct?: Maybe<Product>;
  deleteProduct?: Maybe<Product>;
  removeProduct?: Maybe<Product>;
  updateProduct?: Maybe<Product>;
};


export type MutationCreateManyProductArgs = {
  data?: InputMaybe<Array<InputMaybe<ProductInput>>>;
};


export type MutationCreateProductArgs = {
  brand: Scalars['String']['input'];
  colour: Scalars['String']['input'];
  description: Scalars['String']['input'];
  height: Scalars['Float']['input'];
  img_url: Scalars['String']['input'];
  length: Scalars['Float']['input'];
  model_code: Scalars['String']['input'];
  name: Scalars['String']['input'];
  power: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
  weight: Scalars['Int']['input'];
  width: Scalars['Float']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateProductArgs = {
  brand?: InputMaybe<Scalars['String']['input']>;
  colour?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  img_url?: InputMaybe<Scalars['String']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  model_code?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  power?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type Product = {
  __typename?: 'Product';
  brand: Scalars['String']['output'];
  colour: Scalars['String']['output'];
  description: Scalars['String']['output'];
  height: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  img_url: Scalars['String']['output'];
  length: Scalars['Float']['output'];
  model_code: Scalars['String']['output'];
  name: Scalars['String']['output'];
  power: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  weight: Scalars['Int']['output'];
  width: Scalars['Float']['output'];
};

export type ProductFilter = {
  brand?: InputMaybe<Scalars['String']['input']>;
  brand_gt?: InputMaybe<Scalars['String']['input']>;
  brand_gte?: InputMaybe<Scalars['String']['input']>;
  brand_lt?: InputMaybe<Scalars['String']['input']>;
  brand_lte?: InputMaybe<Scalars['String']['input']>;
  brand_neq?: InputMaybe<Scalars['String']['input']>;
  colour?: InputMaybe<Scalars['String']['input']>;
  colour_gt?: InputMaybe<Scalars['String']['input']>;
  colour_gte?: InputMaybe<Scalars['String']['input']>;
  colour_lt?: InputMaybe<Scalars['String']['input']>;
  colour_lte?: InputMaybe<Scalars['String']['input']>;
  colour_neq?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_neq?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  height_gt?: InputMaybe<Scalars['Float']['input']>;
  height_gte?: InputMaybe<Scalars['Float']['input']>;
  height_lt?: InputMaybe<Scalars['Float']['input']>;
  height_lte?: InputMaybe<Scalars['Float']['input']>;
  height_neq?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  img_url?: InputMaybe<Scalars['String']['input']>;
  img_url_gt?: InputMaybe<Scalars['String']['input']>;
  img_url_gte?: InputMaybe<Scalars['String']['input']>;
  img_url_lt?: InputMaybe<Scalars['String']['input']>;
  img_url_lte?: InputMaybe<Scalars['String']['input']>;
  img_url_neq?: InputMaybe<Scalars['String']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  length_gt?: InputMaybe<Scalars['Float']['input']>;
  length_gte?: InputMaybe<Scalars['Float']['input']>;
  length_lt?: InputMaybe<Scalars['Float']['input']>;
  length_lte?: InputMaybe<Scalars['Float']['input']>;
  length_neq?: InputMaybe<Scalars['Float']['input']>;
  model_code?: InputMaybe<Scalars['String']['input']>;
  model_code_gt?: InputMaybe<Scalars['String']['input']>;
  model_code_gte?: InputMaybe<Scalars['String']['input']>;
  model_code_lt?: InputMaybe<Scalars['String']['input']>;
  model_code_lte?: InputMaybe<Scalars['String']['input']>;
  model_code_neq?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_neq?: InputMaybe<Scalars['String']['input']>;
  power?: InputMaybe<Scalars['String']['input']>;
  power_gt?: InputMaybe<Scalars['String']['input']>;
  power_gte?: InputMaybe<Scalars['String']['input']>;
  power_lt?: InputMaybe<Scalars['String']['input']>;
  power_lte?: InputMaybe<Scalars['String']['input']>;
  power_neq?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  price_gt?: InputMaybe<Scalars['Int']['input']>;
  price_gte?: InputMaybe<Scalars['Int']['input']>;
  price_lt?: InputMaybe<Scalars['Int']['input']>;
  price_lte?: InputMaybe<Scalars['Int']['input']>;
  price_neq?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  quantity_gt?: InputMaybe<Scalars['Int']['input']>;
  quantity_gte?: InputMaybe<Scalars['Int']['input']>;
  quantity_lt?: InputMaybe<Scalars['Int']['input']>;
  quantity_lte?: InputMaybe<Scalars['Int']['input']>;
  quantity_neq?: InputMaybe<Scalars['Int']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
  weight_gt?: InputMaybe<Scalars['Int']['input']>;
  weight_gte?: InputMaybe<Scalars['Int']['input']>;
  weight_lt?: InputMaybe<Scalars['Int']['input']>;
  weight_lte?: InputMaybe<Scalars['Int']['input']>;
  weight_neq?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
  width_gt?: InputMaybe<Scalars['Float']['input']>;
  width_gte?: InputMaybe<Scalars['Float']['input']>;
  width_lt?: InputMaybe<Scalars['Float']['input']>;
  width_lte?: InputMaybe<Scalars['Float']['input']>;
  width_neq?: InputMaybe<Scalars['Float']['input']>;
};

export type ProductInput = {
  brand: Scalars['String']['input'];
  colour: Scalars['String']['input'];
  description: Scalars['String']['input'];
  height: Scalars['Float']['input'];
  img_url: Scalars['String']['input'];
  length: Scalars['Float']['input'];
  model_code: Scalars['String']['input'];
  name: Scalars['String']['input'];
  power: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
  weight: Scalars['Int']['input'];
  width: Scalars['Float']['input'];
};

export type Query = {
  __typename?: 'Query';
  Product?: Maybe<Product>;
  _allProductsMeta?: Maybe<ListMetadata>;
  allProducts?: Maybe<Array<Maybe<Product>>>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type Query_AllProductsMetaArgs = {
  filter?: InputMaybe<ProductFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllProductsArgs = {
  filter?: InputMaybe<ProductFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};

export type ProductQueryQueryVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;


export type ProductQueryQuery = { __typename?: 'Query', Product?: { __typename?: 'Product', id: string, name: string } | null };


export const ProductQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"productQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ProductQueryQuery, ProductQueryQueryVariables>;