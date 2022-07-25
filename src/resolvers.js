const resolvers = {
	Query: {
		breeds(_, { attachBreed, page, limit }, { dataSources }) {
			return dataSources.catAPI.getAllBreeds({
				attachBreed,
				page,
				limit,
			});
		},
		searchBreeds(_, { query }, { dataSources }) {
			return dataSources.catAPI.searchBreeds({ query });
		},
		images(_, { limit, page, order }, { dataSources }) {
			return dataSources.catAPI.getAllImages({ limit, page, order });
		},
		image(_, { limit, page, order }, { dataSources }) {
			return dataSources.catAPI.getImage({ limit, page, order });
		},
	},
	Mutation: {
		vote(parent, { imageId, type }, { dataSources }) {
			return dataSources.catAPI.vote({ imageId, voteType: type });
		},
	},
	Breed: {
		images(parent, { limit, order }, { dataSources }) {
			return dataSources.catAPI.getAllImages({
				breedId: parent.id,
				limit,
				order,
			});
		},
	},
	VoteType: {
		UP: 1,
		DOWN: 0,
	},
};

module.exports = resolvers;
