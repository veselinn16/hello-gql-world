const { makeExecutableSchema } = require("graphql-tools"); // binds schema to resolvers
const { graphql } = require("graphql"); // returns Promise

const typeDefs = `
schema {
    query: Query
}
type Query {
    hello: String
    name: String
}
`;

const resolvers = {
  Query: {
    hello: () => "World",
    name: () => "James"
  }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const query = process.argv[2]; // for command line node index.js query...

graphql(schema, query).then(res => console.log(JSON.stringify(res, null, 2))); // JSON stringify makes it more readable by adding 2 whitespaces
