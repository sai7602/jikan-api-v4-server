const { RESTDataSource } = require('apollo-datasource-rest');

class CatAPI extends RESTDataSource {
	constructor() {
		super();
		// the Cat catalog is hosted on this server
		this.baseURL = 'https://api.thecatapi.com';
	}

	}

	getAllBreeds({ attachBreed = 0, page = 1, limit = 20 }) {
		return this.get('/v1/breeds', { attachBreed, page, limit });
	}

	searchBreeds({ query }) {
		const response = this.get('/v1/breeds/search', { query });

		return response;
	}

	getAllImages({ breedId, limit = 5, page = 1, order = Order.RANDOM }) {
		console.log(breedId);
		const requestObject = {
			limit,
			page,
			order,
		};
		if (breedId) {
			requestObject.breed_id = breedId;
		}
		const response = this.get('/v1/images/search', requestObject);

		return this.get('/v1/images/search', requestObject);
	}

	getImages({ imgId = 'MjAzMDMwMg' }) {
		console.log(imgId);
		const requestObject = {
			limit,
			page,
			order,
			breed_id,
		};
		if (breedId) {
			requestObject.breed_id = breedId;
		}

		//api.thecatapi.com/v1/images/:image_id
		https: return this.get(`/v1/images/${imgId}`, requestObject);
	}
	vote({ imageId, voteType }) {
		const response = this.post('/v1/votes', {
			imageId,
			voteType,
		});

		if (response && response.imageId) {
			const vote = this.get(`/v1/votes/${response.imageId}`);
			return vote;
		}

		return null;
	}
}

module.exports = CatAPI;
