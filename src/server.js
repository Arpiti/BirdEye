import express from "express";
import { ApolloServer } from "apollo-server-express";
import { constraintDirective } from "graphql-constraint-directive";
import { context, dataSources, schema } from "./schema";
import { getCurrentLocalTime } from "./utility";

const getServer = () => {
    //console.log(getCurrentLocalTime(), schemaObject.dataSources().CountryDB.addCountry);
    let server = new ApolloServer({
        schema: constraintDirective()(schema),
        context,
        dataSources
    });
    return server;
}


const startServer = async () => {
    // dotenv.config({ path: './src/.env' });
    const app = express();

    //  app.use(express);

    const apolloServer = getServer();
    await apolloServer.start();
    apolloServer.applyMiddleware({ app: app, path: '/bizztm' });
    const PORT = process.env.PORT || 4002;
    app.listen(PORT, () =>  console.log(getCurrentLocalTime(), `
    🚀  Server ${process.pid} is running!
    🔉  Listening on port ${PORT}
    📭  Query at http://localhost:4002/bizztm`
    
    ));
}
      
startServer();



