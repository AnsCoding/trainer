import React from 'react';
import PostsList from '../components/PostsList';

export default function HomePage() {
	return (
		<div className='page-container'>
			<main>
				<header>
					<div className='logo'>
						<div className='main-logo'>Dstress</div>
						<div className='slogan'>Personlig Træning & Massage</div>
					</div>
					<nav>
						<ul>
							<a href='/#'>
								<li>Prisliste</li>
							</a>
							<a href='/#'>
								<li>Kontakt os</li>
							</a>
						</ul>
					</nav>
				</header>
				<section className='hero-section'>
					<div className='left-hero'>
						<h1>Nå nye højder indenfor sundhed og velvære</h1>
						<h3>Personlig træning & massage</h3>
						<a href='/#'>
							<button>Kontakt os</button>
						</a>
					</div>
					<div className='right-hero'>
						<img src='mindfullness-img.png' alt='Mindfullness Illustration' />
					</div>
				</section>
			</main>
			<section className='services'>
				<div className='top-services'>
					<div className='img-box'>
						<img src='outdoors-training.png' alt='Outdoor Training' />
					</div>
					<div className='service-black'>
						<PostsList />
					</div>
				</div>
				<div className='bot-services'>
					<div className='service-white'>
						<PostsList />
					</div>
					<div className='img-box'>
						<img src='hotstone-massage.png' alt='Hot Stone Massage' />
					</div>
				</div>
			</section>
			<footer>
				<p>Dstress - Personlig Træning & Massage</p>
				<p>© COPYRIGHT 2022. ALL RIGHTS RESERVED.</p>
			</footer>
		</div>
	);
}
