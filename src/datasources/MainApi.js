const { RESTDataSource } = require('apollo-datasource-rest');

class MainAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://api.jikan.moe/v4';
	}
}
