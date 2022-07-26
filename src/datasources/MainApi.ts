import { RESTDataSource } from 'apollo-datasource-rest';

export default class MainAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://api.jikan.moe/v4';
	}

	getAnimeSearch() {
		return this.get('/anime');
	}
}
