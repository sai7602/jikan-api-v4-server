"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const fs_1 = require("fs");
const resolvers_1 = require("./resolvers");
const typeDefs = (0, apollo_server_1.gql)((0, fs_1.readFileSync)('./schema.graphql', { encoding: 'utf-8' }));
const MainApi_1 = __importDefault(require("../src/datasources/MainApi"));
async function startApolloServer(typeDefs, resolvers) {
    const server = new apollo_server_1.ApolloServer({
        typeDefs,
        resolvers,
        dataSources: () => {
            return {
                mainAPI: new MainApi_1.default(),
            };
        },
    });
    const { url, port } = await server.listen({
        port: process.env.PORT || 4000,
    });
    console.log(`
      🚀  Server is running
      🔉  Listening on port ${port}
      📭  Query at ${url}
    `);
}
startApolloServer(typeDefs, resolvers_1.resolvers);
//# sourceMappingURL=index.js.map