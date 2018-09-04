import {ApolloServer} from 'apollo-server';
import {typeDefs, resolvers} from './schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: /.*/,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'X-Apollo-Tracing'],
  },
});

server.listen(process.env.PORT || 4000).then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
