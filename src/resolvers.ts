export const resolvers = {
	Query: {
		animeSearch: (
			_: any,
			__: any,
			{ dataSources }: { dataSources: any }
		) => {
			return dataSources.mainAPI.getAnimeSearch();
		},
	},
};
