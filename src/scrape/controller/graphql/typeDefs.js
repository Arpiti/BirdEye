 import { gql} from 'apollo-server-express';


export const typeDefs = gql`
   

    extend type Query {
         "Get All Reviews and the count"                
         getAllReviews(sourceURL: String, sourceName: String, inputDate: String): AggregateReviewResponse
     }

    type Reviews {
        comment: String
        date: String
        reviewerName: String
        rating: String
        errorResponse: String
    }

    type AggregateReviewResponse {  
        "Gets the total count of Reviews"
        totalCount: Int
        "List of Reviews"
        reviews: [Reviews]
        "Success Message for the API - True or False."
        success: Boolean
    }


`;
