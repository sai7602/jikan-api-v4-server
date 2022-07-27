import { ApolloServer, gql, AuthenticationError } from 'apollo-server';
const { readFileSync } = require('fs');
// import { schema as typeDefs } from './schema';
import { resolvers } from './resolvers';
const typeDefs = gql(readFileSync('./schema.graphql', { encoding: 'utf-8' }));
import { MainAPI } from './datasources/MainAPI';

async function startApolloServer(typeDefs: any, resolvers: any) {
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		dataSources: () => {
			return {
				mainAPI: new MainAPI(),
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

startApolloServer(typeDefs, resolvers);
