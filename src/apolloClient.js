import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://moviegraphql.mordiumaco.now.sh"
});

export default client;
