import express from 'express';
import http from 'http'; 
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import { promises } from 'dns';
import { resolve } from 'path';
import FakeData from './FakeData/index.js';

const app = express();
const httpServer = http.createServer(app);

const typeDefs = `#graphql

type Folder {
    id: String,
    name: String,
    createAt: String,
    author: Author
}

type Author {
    id: String,
    name: String
}

type Query {
    name: String,
    folders: [Folder]
}

`;
const resolvers = {
    Query: {
        name: () => { return 'Suc vat chin rach' },
        folders: () => { return FakeData.folders }
    }

};

// resolvers - schema
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
})

await server.start();

app.use(cors(), bodyParser.json(), expressMiddleware(server));

await new Promise((resolve) => httpServer.listen({ port: 8079 }, resolve ));

console.log(' Server ready at http://localhost:8079 ');