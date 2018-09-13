//
// See docs and examples at https://github.com/apollographql/awesome-launchpad

import {makeExecutableSchema} from 'graphql-tools';
import movieData from '../data/movies';
import actorData from '../data/actors';

// Construct a schema, using GraphQL schema language
const typeDefs = `
	# ================================================
  # BEGIN WORKSHOP
  # ================================================

  """
  Movie type.
  """
  type Movie {
    id: ID
    title: String
    cover: String
		wide: String
		detail: String
    actors: [Actor]
    genres: [String]
    reviews: [Review]
    rating: Float
    reviewCount: Int
		category: String
  }

  """
  User type.
  """
  type User {
    id: ID
    name: String
    photo: String
  }

  """
  Actor type.
  """
  type Actor {
		id: ID
    name: String
  }

  """
  Review type.
  """
  type Review {
    id: ID
    user: User
    rating: Int
    content: String
  }

  # ================================================
  # END WORKSHOP
  # ================================================

  type Query {
    appVersion: String
		movie(id: ID!): Movie
		moviesByCategory(category: String!): [Movie]
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    appVersion: () => {
      return 'metaflix-0.1.0';
    },
    movie: (_, args) => {
      return movieData.find((movie) => movie.id == args.id);
    },
    moviesByCategory: (_, args) => {
      const movies = movieData
        .filter((movie) => movie.category == args.category)
        .map((movie) => {
          movie.actors = movie.actors.map((actor) => {
            return actorData.find((a) => a.id == actor);
          });
          return movie;
        });

      return movies;
    },
  },
};

// Required: Export the GraphQL.js schema object as "schema"
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Optional: Export a function to get context from the request. It accepts two
// parameters - headers (lowercased http headers) and secrets (secrets defined
// in secrets section). It must return an object (or a promise resolving to it).
export function context(headers, secrets) {
  return {
    headers,
    secrets,
  };
}

// Optional: Export a root value to be passed during execution
// export const rootValue = {};

// Optional: Export a root function, that returns root to be passed
// during execution, accepting headers and secrets. It can return a
// promise. rootFunction takes precedence over rootValue.
// export function rootFunction(headers, secrets) {
//   return {
//     headers,
//     secrets,
//   };
// };
