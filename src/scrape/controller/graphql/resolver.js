
export const resolvers = {
    Query: {
        // Gets all the reviews from the given source URL
        getAllReviews: async(_, {sourceURL, sourceName, inputDate}, {dataSources}) => {
            return  dataSources.ReviewAPI.getAllReviews(sourceURL, sourceName, inputDate);
        },

        
    },

    Mutation: {
        // Insert any Create/Update Query here
    }
}

