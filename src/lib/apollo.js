import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: 'http://trainer.ansbeyla.com/graphql',
	cache: new InMemoryCache(),
});

export default client;
