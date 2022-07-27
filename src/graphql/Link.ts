// // import { extendType, objectType } from 'nexus';
// import { NexusGenObjects } from '../../nexus-typegen';
// import { extendType, intArg, nonNull, objectType, stringArg } from 'nexus';
// import { MainAPI } from '../datasources/MainApi';
// console.log(MainAPI);
// export const Link = objectType({
// 	name: 'Link', // 1
// 	definition(t) {
// 		// 2
// 		t.int('id'); // 3
// 		t.nonNull.string('description'); // 4
// 		t.nonNull.string('url'); // 5
// 	},
// });
// let links: NexusGenObjects['Link'][] = [MainAPI.arguments.getAnimeSearch()];
// // 	// 1
// // 	{
// // 		id: 1,
// // 		url: 'www.howtographql.com',
// // 		description: 'Fullstack tutorial for GraphQL',
// // 	},
// // 	{
// // 		id: 2,
// // 		url: 'graphql.org',
// // 		description: 'GraphQL official website',
// // 	},
// // ];

// export const LinkQuery = extendType({
// 	// 2
// 	type: 'Query',
// 	definition(t) {
// 		t.list.field('feeds', {
// 			// 3
// 			type: 'Link',
// 			resolve(parent, args, ctx, info) {
// 				return links;
// 			},
// 		});
// 		// t.nonNull.list.nonNull.field('feeds', {
// 		// 	// 3
// 		// 	type: 'Link',
// 		// 	args: {
// 		// 		id: intArg(),
// 		// 	},
// 		// 	resolve(parent, args, context, info) {
// 		// 		// 4
// 		// 		return links.filter((el) => el.id === args.id);
// 		// 	},
// 		// });
// 	},
// });
// // export const LinkMutation = extendType({
// // 	// 1
// // 	type: 'Mutation',
// // 	definition(t) {
// // 		t.nonNull.field('post', {
// // 			// 2
// // 			type: 'Link',
// // 			args: {
// // 				// 3
// // 				description: nonNull(stringArg()),
// // 				url: nonNull(stringArg()),
// // 			},

// // 			resolve(parent, args, context) {
// // 				const { description, url } = args; // 4

// // 				let idCount = links.length + 1; // 5
// // 				const link = {
// // 					id: idCount,
// // 					description: description,
// // 					url: url,
// // 				};
// // 				links.push(link);
// // 				return link;
// // 			},
// // 		});
// // 		t.nonNull.field('updateLink', {
// // 			type: 'Link',
// // 			args: {
// // 				id: intArg(),
// // 				description: nonNull(stringArg()),
// // 				url: nonNull(stringArg()),
// // 			},

// // 			resolve(parent, args, context) {
// // 				const { id, description, url } = args; // 4
// // 				const link = {
// // 					id,
// // 					description,
// // 					url,
// // 				};
// // 				links.push(link);
// // 				return link;
// // 			},
// // 		});
// // 		t.field('deleteLinks', {
// // 			type: 'Link',
// // 			args: {
// // 				id: intArg(),
// // 			},
// // 			resolve(_, args) {
// // 				links = links.filter((el) => el.id !== args.id);
// // 				return links;
// // 			},
// // 		});
// // 	},
// // });
