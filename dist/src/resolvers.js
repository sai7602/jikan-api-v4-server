"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        animeSearch: (_, __, { dataSources }) => {
            return dataSources.mainAPI.getAnimeSearch();
        },
    },
};
//# sourceMappingURL=resolvers.js.map