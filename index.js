import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./modules/UserSchema";
import { resolvers } from "./modules/resolvers";

const app = express();

/**
 * Creates a basis for app listening
 * Uses ES6 with esm for imports
 */

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello world! This is codelingo!");
});

/**
 * Apollo server
 */

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({app});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  err => {
    console.log(`Server faile to connect`);
  };
});
