import { typeDefs as reviewsTypeDefs} from './scrape/controller/graphql/typeDefs';
import { resolvers  as reviewsResolvers} from './scrape/controller/graphql/resolver';

import { gql } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { constraintDirectiveTypeDefs } from 'graphql-constraint-directive';

import { ReviewAPI } from './scrape/model/datasources/ReviewAPI'

const QueryMutation = gql`

    "All Queries for can be found in here"
    type Query {
        "A type cannot be empty hence this root 'param', we can ignore this for real-world usecases"
        zRoot: String
    }

    # Need to create resolvers for this
    type Mutation {
        "A type cannot be empty hence this root 'param', we can ignore this for real-world usecases"
         zRoot: String
    }
`

export const schema = makeExecutableSchema({
    typeDefs: [constraintDirectiveTypeDefs, QueryMutation, reviewsTypeDefs],
    resolvers: reviewsResolvers,
});

export const dataSources = () =>  {
  return {
    ReviewAPI: new ReviewAPI()
  }
}




