//
// See docs and examples at https://github.com/apollographql/awesome-launchpad

import {makeExecutableSchema} from 'graphql-tools';
import movieData from '../data/movies';
import actorData from '../data/actors';
import reviewData from '../data/reviews';

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
      const movie = movieData.find((movie) => movie.id == args.id);

      // Replace actor IDs with `Actor` type objects

      movie.actors = movie.actors.map((actor) => {
        return actorData.find((a) => a.id == actor);
      });

      // Add up total rating and determine number of reviews

      movie.rating = 0;
      movie.reviewCount = 0;

      reviewData.map((review) => {
        if (review.movieID == movie.id) {
          movie.rating += review.rating;
          movie.reviewCount += 1;
        }
      });

			// Get true score by dividing total rating by number of reviews

      movie.rating = Math.round((movie.rating / movie.reviewCount) * 10) / 10;

      return movie;
    },
    moviesByCategory: (_, args) => {
      return movieData.filter((movie) => movie.category == args.category);
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
