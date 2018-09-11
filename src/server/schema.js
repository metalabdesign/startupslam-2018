import * as AppInfo from './service/AppInfo';
import * as Account from './service/Account';
import * as Card from './service/Card';
import * as Price from './service/Price';

export const typeDefs = [
  AppInfo.typeDefs,
  Account.typeDefs,
  Card.typeDefs,
  Price.typeDefs,
  /* Add other `typeDefs` entries here. */
];
export const resolvers = [
  AppInfo.resolvers,
  Account.resolvers,
  Card.resolvers,
  Price.resolvers,
  /* Add other `resolvers` entries here. */
];
