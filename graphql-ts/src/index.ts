import { GraphQLServer } from "graphql-yoga";

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers: {},
  context: {},
});

server.start((config: any) => {
  console.log("started at http://localhost:" + config.port);
});
