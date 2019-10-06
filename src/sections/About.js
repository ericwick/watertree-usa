import React from 'react';

// // Styles
import './About.scss';

const About = () => {
	return (
		<div className='w-about__container'>
			<p className='w-about__title'> Why Drink Alkaline Antioxiodant Water?</p>
			<hr className='horizontal-divider' />
			<div className='w-about__flex'>
				<div className='w-about__flex--container'>
					<p className='w-about__goal'>
						Our goal is to nurture healthier lives with the highest-quality alkaline antioxidant H<sub>2</sub>O. The main focus
						of WaterTree USA is to educate communities on the importance of water purity and its effects on the human body in
						addition to overall health awareness. We're working to help everyone drink exceptionally every single day, because
						The WaterTree is a choice for a lifetime of health.
					</p>
				</div>
				<div className='w-about__flex-container'>
					<ul className='w-about__list'>
						<li>
							<i class='fas fa-tint fa-2x blue' />
							<p className='w-about__subtitle'>A clean and refreshing taste</p>
						</li>
						<li>
							<i class='fas fa-tint fa-2x blue' />
							<p className='w-about__subtitle'> A variety of natural minerals</p>
						</li>
						<li>
							<i class='fas fa-tint fa-2x blue' />
							<p className='w-about__subtitle'> Provides superior levels of hydration</p>
						</li>
						<li>
							<i class='fas fa-tint fa-2x blue' />
							<p className='w-about__subtitle'> Antioxidant fighting power</p>
						</li>
						<li>
							<i class='fas fa-tint fa-2x blue' />
							<p className='w-about__subtitle'> Pure &amp; balanced satisfaction</p>
						</li>
						<li>
							<i class='fas fa-tint fa-2x blue' />
							<p className='w-about__subtitle'> Support for an active lifestyle</p>
						</li>
					</ul>
				</div>
			</div>
			<p className='w-about__learn'>
				Learn the benefits of drinking alkaline antioxidant water and how to stay hydrated in a world of dehydration!
			</p>
		</div>
	);
};

export default About;
