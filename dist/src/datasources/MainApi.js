"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
class MainAPI extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.jikan.moe/v4';
    }
    getAnimeSearch() {
        return this.get('/anime');
    }
}
exports.default = MainAPI;
//# sourceMappingURL=MainApi.js.map