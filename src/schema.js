const { gql } = require('apollo-server');

const typeDefs = gql`
	type Query {
		breeds(attachBreed: Int = 0, page: Int = 1, limit: Int = 20): [Breed!]!
		searchBreeds(query: String): [Breed!]!
		images(page: Int = 1, limit: Int = 20, order: Order = RANDOM): [Image!]!
		image(page: Int = 1, limit: Int = 20, order: Order = RANDOM): [Image!]!
	}

	type Mutation {
		vote(imageId: ID!, type: VoteType!): Vote!
	}
	type PersonFullById {
		"Biography"
		about: String
		"Array of Anime"
		anime: [AnimeOrMangaByPerson!]!
		manga: [AnimeOrMangaByPerson!]!
	}
	type AnimeOrMangaByPerson {
		"Person's position"
		position: String!
		anime: Anime!
	}
	type Anime {
		"integer MyAnimeList ID"
		mal_id: ID!
		"MyAnimeList URL"
		url: String!
		"Anime Images"
		images: Images!
		"Entry title"
		title: String!
	}
	type Images {
		"Available images in JPG"
		jpg: Image!
		"Available images in WEBP"
		webp: Image!
	}
	type Image {
		"Image URL JPG, WEBP"
		image_url: String
		"Small Image URL JPG, WEBP"
		small_image_url: String
		"Large Image URL JPG, WEBP"
		large_image_url: String
	}
	type Genres {
		"integer MyAnimeList ID"
		mal_id: ID!
		"Genre Name"
		name: String!
		"MyAnimeList URL"
		url: String!
		"Genre's entry count"
		count: Int!
	}

	type Magazines {
		"integer MyAnimeList ID"
		mal_id: ID!
		"Magazine Name"
		name: String!
		"MyAnimeList URL"
		url: String!
		"Magazine's manga count"
		count: Int!
	}
`;

module.exports = typeDefs;
