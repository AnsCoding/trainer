import React from 'react';
import Posts from '../components/Posts';

export default function Homepage() {
	return (
		<>
			<main>
				<header>
					<div class='logo'>
						<div class='main-logo'>Dstress</div>
						<div class='slogan'>Personlig Træning & Massage</div>
					</div>
					<nav>
						<ul>
							<a href='/'>
								<li>Prisliste</li>
							</a>
							<a href='/'>
								<li>Kontakt os</li>
							</a>
						</ul>
					</nav>
				</header>
				<section class='hero-section'>
					<div class='left-hero'>
						<h1>Nå nye højder indenfor sundhed og velvære</h1>
						<h3>Personlig træning & massage</h3>
						<a href='/'>
							<button>Kontakt os</button>
						</a>
					</div>
					<div class='right-hero'></div>
				</section>
			</main>
			<section class='services'>
				<div class='top-services'>
					<div class='img-box'>
						<img src='outdoors-training.png' alt='Outdoor Training' />
					</div>
					<div class='service-black'>
						<Posts />
					</div>
				</div>
				<div class='bot-services'>
					<div class='service-white'>
						<Posts />
					</div>
					<div class='img-box'>
						<img src='hotstone-massage.png' alt='Hot Stone Massage' />
					</div>
				</div>
			</section>
			<footer>
				<p>Dstress - Personlig Træning & Massage</p>
				<p>© COPYRIGHT 2022. ALL RIGHTS RESERVED.</p>
			</footer>
		</>
	);
}
