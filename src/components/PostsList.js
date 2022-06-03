import React from 'react';
import PostCard from '../components/PostCard';
import { gql, useQuery } from '@apollo/client';

const GET_ALL_POSTS = gql`
	query MyQuery {
		posts {
			nodes {
				databaseId
				slug
				title
			}
		}
	}
`;

// const GET_WP_POST = gql`
// 	query MyQuery {
// 		post {
// 			databaseId
// 			title
// 			content
// 		}
// 	}
// `;

export default function PostsList() {
	const { loading, error, data } = useQuery(GET_ALL_POSTS);

	if (loading) return <p>Loader..</p>;
	if (error) return <p>Error :(</p>;

	const postsFound = Boolean(data?.posts.nodes.length);
	if (!postsFound) {
		return <p>Intet match</p>;
	}

	return (
		<div className='posts-list'>
			{data.posts.nodes.map((post) => (
				<PostCard key={post.databaseId} post={post} />
			))}
		</div>
	);
}
