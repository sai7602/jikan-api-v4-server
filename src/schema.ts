import { gql } from 'apollo-server';
import { makeSchema } from 'nexus';
import { join } from 'path';
import * as types from './graphql';
// export const schema = makeSchema({
// 	types,
// 	outputs: {
// 		schema: join(process.cwd(), 'schema.graphql'), // 2
// 		typegen: join(process.cwd(), 'nexus-typegen.ts'), // 3
// 	},
// });

// export const typeDefs = gql`
// 	type Query {
// 		allAnime: AllAnime
// 	}

// 	type AllAnime {
// 		data: [Anime]
// 		pagination: Pagination
// 	}
// 	type Pagination {
// 		last_visible_page: Int!
// 		has_next_page: Boolean
// 		items: Item
// 	}

// 	type Item {
// 		count: Int
// 		total: Int
// 		per_page: Int
// 	}
// 	type PersonFullById {
// 		"Biography"
// 		about: String
// 		"Array of Anime"
// 		anime: [AnimeOrMangaByPerson!]!
// 		"Array of Manga"
// 		manga: [AnimeOrMangaByPerson!]!
// 	}
// 	type AnimeOrMangaByPerson {
// 		"Person's position"
// 		position: String!
// 		anime: Anime!
// 	}
// 	type Anime {
// 		"integer MyAnimeList ID"
// 		mal_id: ID!
// 		"MyAnimeList URL"
// 		url: String!
// 		"Anime Images"
// 		images: Images!
// 		"Title"
// 		title: String!
// 		"English Title"
// 		title_english: String
// 		"Japanese Title"
// 		title_japanese: String
// 		"All titles"
// 		titles: [String]
// 		"Other Titles"
// 		title_synonyms: [String]!
// 		"Anime Type"
// 		type: String
// 		"Original Material/Source adapted from"
// 		source: String
// 		"Episode count"
// 		episodes: Int
// 		"Airing status"
// 		status: String
// 		"Airing boolean"
// 		airing: Boolean
// 		"Score"
// 		score: Float
// 		"Number of users"
// 		scored_by: Int
// 		"Ranking"
// 		rank: Int
// 		"Popularity"
// 		popularity: Int
// 		"Number of users who have added this entry to their list"
// 		members: Int
// 		"Number of users who have favorited this entry"
// 		favorites: Int
// 	}
// 	enum AnimeType {
// 		TV
// 		OVA
// 		MOVIE
// 		SPECIAL
// 		ONA
// 		MUSIC
// 	}

// 	enum AiringStatus {
// 		AIRING
// 		COMPLETE
// 		UPCOMING
// 	}
// 	type Images {
// 		"Available images in JPG"
// 		jpg: Image!
// 		"Available images in WEBP"
// 		webp: Image!
// 	}
// 	type Image {
// 		"Image URL JPG, WEBP"
// 		image_url: String
// 		"Small Image URL JPG, WEBP"
// 		small_image_url: String
// 		"Large Image URL JPG, WEBP"
// 		large_image_url: String
// 	}
// 	type Genres {
// 		"integer MyAnimeList ID"
// 		mal_id: ID!
// 		"Genre Name"
// 		name: String!
// 		"MyAnimeList URL"
// 		url: String!
// 		"Genre's entry count"
// 		count: Int!
// 	}

// 	type Magazines {
// 		"integer MyAnimeList ID"
// 		mal_id: ID!
// 		"Magazine Name"
// 		name: String!
// 		"MyAnimeList URL"
// 		url: String!
// 		"Magazine's manga count"
// 		count: Int!
// 	}
// `;

// module.exports = typeDefs;
