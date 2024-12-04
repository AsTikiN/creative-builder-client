import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: `${import.meta.env.VITE_API_URL || "http://ec2-18-221-79-239.us-east-2.compute.amazonaws.com:9000"}/graphql`,
  cache: new InMemoryCache(),
});
