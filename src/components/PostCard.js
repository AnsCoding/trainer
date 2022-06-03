import React from 'react';

export default function PostCard({ post }) {
	const { title, content } = post;

	return (
		<div className='text-box'>
			<h3>{title}</h3>
			<p>{content}</p>
			<a href='/#'>
				<button>Kontakt os</button>
			</a>
		</div>
	);
}
