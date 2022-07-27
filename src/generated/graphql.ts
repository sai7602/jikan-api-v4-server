import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AdditionalEntityFields = {
  path?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type Aired = {
  __typename?: 'Aired';
  /** Date ISO8601 */
  from?: Maybe<Scalars['String']>;
  /** Date Prop */
  prop: Prop;
  /** Date ISO8601 */
  to?: Maybe<Scalars['String']>;
};

export enum AiringStatus {
  Airing = 'AIRING',
  Complete = 'COMPLETE',
  Upcoming = 'UPCOMING'
}

export type AllAnime = {
  __typename?: 'AllAnime';
  data?: Maybe<Array<Maybe<Anime>>>;
  pagination?: Maybe<Pagination>;
};

export type Anime = {
  __typename?: 'Anime';
  /** Date range */
  aired: Aired;
  /** Airing boolean */
  airing?: Maybe<Scalars['Boolean']>;
  approved?: Maybe<Scalars['Boolean']>;
  /** Background */
  background?: Maybe<Scalars['String']>;
  demographics: Array<DataSet>;
  /** Parsed raw duration */
  duration?: Maybe<Scalars['String']>;
  /** Episode count */
  episodes?: Maybe<Scalars['Int']>;
  explicit_genres: Array<DataSet>;
  /** Number of users who have favorited this entry */
  favorites?: Maybe<Scalars['Int']>;
  genres: Array<DataSet>;
  /** Anime Images */
  images: Images;
  licensors: Array<DataSet>;
  /** integer MyAnimeList ID */
  mal_id: Scalars['ID'];
  /** Number of users who have added this entry to their list */
  members?: Maybe<Scalars['Int']>;
  /** Popularity */
  popularity?: Maybe<Scalars['Int']>;
  producers: Array<DataSet>;
  /** Ranking */
  rank?: Maybe<Scalars['Int']>;
  /** Anime audience rating */
  rating?: Maybe<Scalars['String']>;
  /** Score */
  score?: Maybe<Scalars['Float']>;
  /** Number of users */
  scored_by?: Maybe<Scalars['Int']>;
  /** Season */
  season?: Maybe<Scalars['String']>;
  /** Original Material/Source adapted from */
  source?: Maybe<Scalars['String']>;
  /** Airing status */
  status?: Maybe<Scalars['String']>;
  studios: Array<DataSet>;
  /** Synopsis */
  synopsis?: Maybe<Scalars['String']>;
  themes: Array<DataSet>;
  /** Title */
  title: Scalars['String'];
  /** English Title */
  title_english?: Maybe<Scalars['String']>;
  /** Japanese Title */
  title_japanese?: Maybe<Scalars['String']>;
  /** Other Titles */
  title_synonyms: Array<Maybe<Scalars['String']>>;
  /** All titles */
  titles?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Youtube Details */
  trailer: Trailer;
  /** Anime Type */
  type?: Maybe<Scalars['String']>;
  /** MyAnimeList URL */
  url: Scalars['String'];
  /** Year */
  year?: Maybe<Scalars['Int']>;
};

export type AnimeOrMangaByPerson = {
  __typename?: 'AnimeOrMangaByPerson';
  anime: Anime;
  /** Person's position */
  position: Scalars['String'];
};

export enum AnimeType {
  Movie = 'MOVIE',
  Music = 'MUSIC',
  Ona = 'ONA',
  Ova = 'OVA',
  Special = 'SPECIAL',
  Tv = 'TV'
}

export type DataSet = {
  __typename?: 'DataSet';
  /** MyAnimeList ID */
  mal_id?: Maybe<Scalars['Int']>;
  /** Resource Name/Title */
  name?: Maybe<Scalars['String']>;
  /** Type of resource */
  type?: Maybe<Scalars['String']>;
  /** MyAnimeList URL */
  url?: Maybe<Scalars['String']>;
};

export type Date = {
  __typename?: 'Date';
  /** Day */
  day?: Maybe<Scalars['Int']>;
  /** Month */
  month?: Maybe<Scalars['Int']>;
  /** Year */
  year?: Maybe<Scalars['Int']>;
};

export type Genres = {
  __typename?: 'Genres';
  /** Genre's entry count */
  count: Scalars['Int'];
  /** integer MyAnimeList ID */
  mal_id: Scalars['ID'];
  /** Genre Name */
  name: Scalars['String'];
  /** MyAnimeList URL */
  url: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  /** Image URL JPG, WEBP */
  image_url?: Maybe<Scalars['String']>;
  /** Large Image URL JPG, WEBP */
  large_image_url?: Maybe<Scalars['String']>;
  /** Small Image URL JPG, WEBP */
  small_image_url?: Maybe<Scalars['String']>;
};

export type Images = {
  __typename?: 'Images';
  /** Available images in JPG */
  jpg: Image;
  /** Available images in WEBP */
  webp: Image;
};

export type Item = {
  __typename?: 'Item';
  count?: Maybe<Scalars['Int']>;
  per_page?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type Magazines = {
  __typename?: 'Magazines';
  /** Magazine's manga count */
  count: Scalars['Int'];
  /** integer MyAnimeList ID */
  mal_id: Scalars['ID'];
  /** Magazine Name */
  name: Scalars['String'];
  /** MyAnimeList URL */
  url: Scalars['String'];
};

export type Pagination = {
  __typename?: 'Pagination';
  has_next_page?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Item>;
  last_visible_page: Scalars['Int'];
};

export type PersonFullById = {
  __typename?: 'PersonFullById';
  /** Biography */
  about?: Maybe<Scalars['String']>;
  /** Array of Anime */
  anime: Array<AnimeOrMangaByPerson>;
  /** Array of Manga */
  manga: Array<AnimeOrMangaByPerson>;
};

export type Prop = {
  __typename?: 'Prop';
  /** Date Prop From */
  from: Date;
  /** Raw parsed string */
  string?: Maybe<Scalars['String']>;
  /** Date Prop To */
  to: Date;
};

export type Query = {
  __typename?: 'Query';
  animeSearch?: Maybe<AllAnime>;
  animeStreaming?: Maybe<Array<Maybe<StreamingData>>>;
};

export type StreamingData = {
  __typename?: 'StreamingData';
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Trailer = {
  __typename?: 'Trailer';
  /** Parsed Embed URL */
  embed_url?: Maybe<Scalars['String']>;
  /** YouTube URL */
  url?: Maybe<Scalars['String']>;
  /** YouTube ID */
  youtube_id?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AdditionalEntityFields: AdditionalEntityFields;
  String: ResolverTypeWrapper<Scalars['String']>;
  Aired: ResolverTypeWrapper<Aired>;
  AiringStatus: AiringStatus;
  AllAnime: ResolverTypeWrapper<AllAnime>;
  Anime: ResolverTypeWrapper<Anime>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  AnimeOrMangaByPerson: ResolverTypeWrapper<AnimeOrMangaByPerson>;
  AnimeType: AnimeType;
  DataSet: ResolverTypeWrapper<DataSet>;
  Date: ResolverTypeWrapper<Date>;
  Genres: ResolverTypeWrapper<Genres>;
  Image: ResolverTypeWrapper<Image>;
  Images: ResolverTypeWrapper<Images>;
  Item: ResolverTypeWrapper<Item>;
  Magazines: ResolverTypeWrapper<Magazines>;
  Pagination: ResolverTypeWrapper<Pagination>;
  PersonFullById: ResolverTypeWrapper<PersonFullById>;
  Prop: ResolverTypeWrapper<Prop>;
  Query: ResolverTypeWrapper<{}>;
  StreamingData: ResolverTypeWrapper<StreamingData>;
  Trailer: ResolverTypeWrapper<Trailer>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AdditionalEntityFields: AdditionalEntityFields;
  String: Scalars['String'];
  Aired: Aired;
  AllAnime: AllAnime;
  Anime: Anime;
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  ID: Scalars['ID'];
  Float: Scalars['Float'];
  AnimeOrMangaByPerson: AnimeOrMangaByPerson;
  DataSet: DataSet;
  Date: Date;
  Genres: Genres;
  Image: Image;
  Images: Images;
  Item: Item;
  Magazines: Magazines;
  Pagination: Pagination;
  PersonFullById: PersonFullById;
  Prop: Prop;
  Query: {};
  StreamingData: StreamingData;
  Trailer: Trailer;
};

export type UnionDirectiveArgs = {
  discriminatorField?: Maybe<Scalars['String']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type UnionDirectiveResolver<Result, Parent, ContextType = any, Args = UnionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = {
  discriminatorField: Scalars['String'];
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = any, Args = AbstractEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {
  embedded?: Maybe<Scalars['Boolean']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']>;
};

export type ColumnDirectiveResolver<Result, Parent, ContextType = any, Args = ColumnDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = { };

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']>;
};

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = { };

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = {
  path: Scalars['String'];
};

export type MapDirectiveResolver<Result, Parent, ContextType = any, Args = MapDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AiredResolvers<ContextType = any, ParentType extends ResolversParentTypes['Aired'] = ResolversParentTypes['Aired']> = {
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prop?: Resolver<ResolversTypes['Prop'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AllAnimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AllAnime'] = ResolversParentTypes['AllAnime']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Anime']>>>, ParentType, ContextType>;
  pagination?: Resolver<Maybe<ResolversTypes['Pagination']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Anime'] = ResolversParentTypes['Anime']> = {
  aired?: Resolver<ResolversTypes['Aired'], ParentType, ContextType>;
  airing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  approved?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  background?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  demographics?: Resolver<Array<ResolversTypes['DataSet']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  episodes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  explicit_genres?: Resolver<Array<ResolversTypes['DataSet']>, ParentType, ContextType>;
  favorites?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  genres?: Resolver<Array<ResolversTypes['DataSet']>, ParentType, ContextType>;
  images?: Resolver<ResolversTypes['Images'], ParentType, ContextType>;
  licensors?: Resolver<Array<ResolversTypes['DataSet']>, ParentType, ContextType>;
  mal_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  members?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  popularity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  producers?: Resolver<Array<ResolversTypes['DataSet']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  scored_by?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  season?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  studios?: Resolver<Array<ResolversTypes['DataSet']>, ParentType, ContextType>;
  synopsis?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  themes?: Resolver<Array<ResolversTypes['DataSet']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title_english?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title_japanese?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title_synonyms?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  titles?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  trailer?: Resolver<ResolversTypes['Trailer'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnimeOrMangaByPersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnimeOrMangaByPerson'] = ResolversParentTypes['AnimeOrMangaByPerson']> = {
  anime?: Resolver<ResolversTypes['Anime'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DataSetResolvers<ContextType = any, ParentType extends ResolversParentTypes['DataSet'] = ResolversParentTypes['DataSet']> = {
  mal_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Date'] = ResolversParentTypes['Date']> = {
  day?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenresResolvers<ContextType = any, ParentType extends ResolversParentTypes['Genres'] = ResolversParentTypes['Genres']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mal_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  large_image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  small_image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImagesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Images'] = ResolversParentTypes['Images']> = {
  jpg?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  webp?: Resolver<ResolversTypes['Image'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  per_page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MagazinesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Magazines'] = ResolversParentTypes['Magazines']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mal_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pagination'] = ResolversParentTypes['Pagination']> = {
  has_next_page?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  items?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  last_visible_page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonFullByIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonFullById'] = ResolversParentTypes['PersonFullById']> = {
  about?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  anime?: Resolver<Array<ResolversTypes['AnimeOrMangaByPerson']>, ParentType, ContextType>;
  manga?: Resolver<Array<ResolversTypes['AnimeOrMangaByPerson']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PropResolvers<ContextType = any, ParentType extends ResolversParentTypes['Prop'] = ResolversParentTypes['Prop']> = {
  from?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  string?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  animeSearch?: Resolver<Maybe<ResolversTypes['AllAnime']>, ParentType, ContextType>;
  animeStreaming?: Resolver<Maybe<Array<Maybe<ResolversTypes['StreamingData']>>>, ParentType, ContextType>;
};

export type StreamingDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['StreamingData'] = ResolversParentTypes['StreamingData']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrailerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Trailer'] = ResolversParentTypes['Trailer']> = {
  embed_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  youtube_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Aired?: AiredResolvers<ContextType>;
  AllAnime?: AllAnimeResolvers<ContextType>;
  Anime?: AnimeResolvers<ContextType>;
  AnimeOrMangaByPerson?: AnimeOrMangaByPersonResolvers<ContextType>;
  DataSet?: DataSetResolvers<ContextType>;
  Date?: DateResolvers<ContextType>;
  Genres?: GenresResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  Images?: ImagesResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  Magazines?: MagazinesResolvers<ContextType>;
  Pagination?: PaginationResolvers<ContextType>;
  PersonFullById?: PersonFullByIdResolvers<ContextType>;
  Prop?: PropResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  StreamingData?: StreamingDataResolvers<ContextType>;
  Trailer?: TrailerResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
};

import { ObjectId } from 'mongodb';