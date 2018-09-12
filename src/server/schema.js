import * as AppInfo from './service/AppInfo';
import * as Movie from './service/Movie';
import * as User from './service/User';
import * as Actor from './service/Actor';
import * as Review from './service/Review';

export const typeDefs = [
  AppInfo.typeDefs,
  Movie.typeDefs,
  User.typeDefs,
  Actor.typeDefs,
  Review.typeDefs,
  /* Add other `typeDefs` entries here. */
];
export const resolvers = [
  AppInfo.resolvers,
  Movie.resolvers,
  User.resolvers,
  Actor.resolvers,
  Review.resolvers,
  /* Add other `resolvers` entries here. */
];
