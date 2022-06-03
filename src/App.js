import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './lib/apollo';
import HomePage from './pages/HomePage';
import './styles.css';

export default function App() {
	return (
		<ApolloProvider client={client}>
			<Routes>
				<Route exact path='/' element={<HomePage />} />
			</Routes>
		</ApolloProvider>
	);
}
