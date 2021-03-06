// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  restaurant: (where?: RestaurantWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  restaurant: (where: RestaurantWhereUniqueInput) => RestaurantNullablePromise;
  restaurants: (args?: {
    where?: RestaurantWhereInput;
    orderBy?: RestaurantOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Restaurant>;
  restaurantsConnection: (args?: {
    where?: RestaurantWhereInput;
    orderBy?: RestaurantOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => RestaurantConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createRestaurant: (data: RestaurantCreateInput) => RestaurantPromise;
  updateRestaurant: (args: {
    data: RestaurantUpdateInput;
    where: RestaurantWhereUniqueInput;
  }) => RestaurantPromise;
  updateManyRestaurants: (args: {
    data: RestaurantUpdateManyMutationInput;
    where?: RestaurantWhereInput;
  }) => BatchPayloadPromise;
  upsertRestaurant: (args: {
    where: RestaurantWhereUniqueInput;
    create: RestaurantCreateInput;
    update: RestaurantUpdateInput;
  }) => RestaurantPromise;
  deleteRestaurant: (where: RestaurantWhereUniqueInput) => RestaurantPromise;
  deleteManyRestaurants: (where?: RestaurantWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  restaurant: (
    where?: RestaurantSubscriptionWhereInput
  ) => RestaurantSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type RestaurantOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "image_ASC"
  | "image_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface RestaurantCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
  image?: Maybe<String>;
}

export interface RestaurantUpdateInput {
  name?: Maybe<String>;
  image?: Maybe<String>;
}

export interface RestaurantUpdateManyMutationInput {
  name?: Maybe<String>;
  image?: Maybe<String>;
}

export interface RestaurantWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  image?: Maybe<String>;
  image_not?: Maybe<String>;
  image_in?: Maybe<String[] | String>;
  image_not_in?: Maybe<String[] | String>;
  image_lt?: Maybe<String>;
  image_lte?: Maybe<String>;
  image_gt?: Maybe<String>;
  image_gte?: Maybe<String>;
  image_contains?: Maybe<String>;
  image_not_contains?: Maybe<String>;
  image_starts_with?: Maybe<String>;
  image_not_starts_with?: Maybe<String>;
  image_ends_with?: Maybe<String>;
  image_not_ends_with?: Maybe<String>;
  AND?: Maybe<RestaurantWhereInput[] | RestaurantWhereInput>;
  OR?: Maybe<RestaurantWhereInput[] | RestaurantWhereInput>;
  NOT?: Maybe<RestaurantWhereInput[] | RestaurantWhereInput>;
}

export interface RestaurantSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<RestaurantWhereInput>;
  AND?: Maybe<
    RestaurantSubscriptionWhereInput[] | RestaurantSubscriptionWhereInput
  >;
  OR?: Maybe<
    RestaurantSubscriptionWhereInput[] | RestaurantSubscriptionWhereInput
  >;
  NOT?: Maybe<
    RestaurantSubscriptionWhereInput[] | RestaurantSubscriptionWhereInput
  >;
}

export type RestaurantWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface AggregateRestaurant {
  count: Int;
}

export interface AggregateRestaurantPromise
  extends Promise<AggregateRestaurant>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateRestaurantSubscription
  extends Promise<AsyncIterator<AggregateRestaurant>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface RestaurantPreviousValues {
  id: ID_Output;
  name: String;
  image?: String;
}

export interface RestaurantPreviousValuesPromise
  extends Promise<RestaurantPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  image: () => Promise<String>;
}

export interface RestaurantPreviousValuesSubscription
  extends Promise<AsyncIterator<RestaurantPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  image: () => Promise<AsyncIterator<String>>;
}

export interface RestaurantEdge {
  node: Restaurant;
  cursor: String;
}

export interface RestaurantEdgePromise
  extends Promise<RestaurantEdge>,
    Fragmentable {
  node: <T = RestaurantPromise>() => T;
  cursor: () => Promise<String>;
}

export interface RestaurantEdgeSubscription
  extends Promise<AsyncIterator<RestaurantEdge>>,
    Fragmentable {
  node: <T = RestaurantSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface RestaurantSubscriptionPayload {
  mutation: MutationType;
  node: Restaurant;
  updatedFields: String[];
  previousValues: RestaurantPreviousValues;
}

export interface RestaurantSubscriptionPayloadPromise
  extends Promise<RestaurantSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = RestaurantPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = RestaurantPreviousValuesPromise>() => T;
}

export interface RestaurantSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<RestaurantSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = RestaurantSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = RestaurantPreviousValuesSubscription>() => T;
}

export interface Restaurant {
  id: ID_Output;
  name: String;
  image?: String;
}

export interface RestaurantPromise extends Promise<Restaurant>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  image: () => Promise<String>;
}

export interface RestaurantSubscription
  extends Promise<AsyncIterator<Restaurant>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  image: () => Promise<AsyncIterator<String>>;
}

export interface RestaurantNullablePromise
  extends Promise<Restaurant | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  image: () => Promise<String>;
}

export interface RestaurantConnection {
  pageInfo: PageInfo;
  edges: RestaurantEdge[];
}

export interface RestaurantConnectionPromise
  extends Promise<RestaurantConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<RestaurantEdge>>() => T;
  aggregate: <T = AggregateRestaurantPromise>() => T;
}

export interface RestaurantConnectionSubscription
  extends Promise<AsyncIterator<RestaurantConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<RestaurantEdgeSubscription>>>() => T;
  aggregate: <T = AggregateRestaurantSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Restaurant",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://prisma:4466`
});
export const prisma = new Prisma();
