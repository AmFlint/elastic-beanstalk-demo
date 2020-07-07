import { ApolloServer } from 'apollo-server';

import { typeDefs } from './typedefs';
import { resolvers } from './resolvers';
import { setConfiguration } from './db';

// Set up environment variables from Elastic Beanstalk's RDS environment
setConfiguration({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DB_NAME,
  port: parseInt(process.env.RDS_PORT, 0) || 3306,
});

const server = new ApolloServer({ typeDefs, resolvers });
server.listen({ port: process.env.PORT || 8080 }).then(() => console.log('Server listening'));
