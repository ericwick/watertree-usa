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
					<div className='w-about__goal'>
						<p className='w-about__goal--paragraph'>
							Our goal is to nurture healthier lives with the highest-quality
							alkaline antioxidant H<sub>2</sub>O. The main focus of WaterTree
							USA is to educate communities on the importance of water purity
							and its effects on the human body in addition to overall health
							awareness. We're working to help everyone drink exceptionally
							every single day, because The WaterTree is a choice for a lifetime
							of health.
						</p>
						<p className='w-about__goal--paragraph'>
							Our 12-step REVERSE OSMOSIS FILTRATION PROCESS ensures that our
							water is clean of harmful bacteria and total solids. We use
							MINERALS to make our water ALKALINE and we DO NOT add any
							chemicals to our water.
						</p>
						<p className='w-about__goal--paragraph'>
							In addition to our 9.5 &amp; 10.5 ph REGULAR ALKALINE WATER, we
							also have HYDROGEN MOLECULE INFUSED ALKALINE WATER, known as our
							HYDRO WATER. We take our Alkaline Water and add HYDROGEN MOLECULES
							thus making the Water more permeable to the bloodstream, allowing
							it to enhance its antioxidant activity and help remove toxins from
							cells faster. In addition to removing toxins, our HYDRO WATER also
							helps reduce the aging process, reduce inflammation throughout the
							body, and boost energy!
						</p>
						<p className='w-about__goal--paragraph'>
							WaterTree U.S.A. has filling stations that contain both 9.5 &amp;
							10.5 ph in our HYDRO and REGULAR ALKALINE Water. This allows our
							customers to fill up their containers by the gallon. Customers can
							come in and fill up their own containers and or purchase
							containers at the store.
						</p>
					</div>
				</div>
				<div className='w-about__flex-container'>
					<ul className='w-about__list'>
						<li>
							<i className='fas fa-tint fa-2x blue' />
							<p className='w-about__subtitle'>A clean and refreshing taste</p>
						</li>
						<li>
							<i className='fas fa-tint fa-2x blue' />
							<p className='w-about__subtitle'>
								{' '}
								A variety of natural minerals
							</p>
						</li>
						<li>
							<i className='fas fa-tint fa-2x blue' />
							<p className='w-about__subtitle'>
								{' '}
								Provides superior levels of hydration
							</p>
						</li>
						<li>
							<i className='fas fa-tint fa-2x blue' />
							<p className='w-about__subtitle'> Antioxidant fighting power</p>
						</li>
						<li>
							<i className='fas fa-tint fa-2x blue' />
							<p className='w-about__subtitle'>
								{' '}
								Pure &amp; balanced satisfaction
							</p>
						</li>
						<li>
							<i className='fas fa-tint fa-2x blue' />
							<p className='w-about__subtitle'>
								{' '}
								Support for an active lifestyle
							</p>
						</li>
					</ul>
				</div>
			</div>
			<p className='w-about__learn'>
				Learn the benefits of drinking alkaline antioxidant water and how to
				stay hydrated in a world of dehydration!
			</p>
		</div>
	);
};

export default About;
