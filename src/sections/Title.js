import React from 'react';

import Collapse from '@material-ui/core/Collapse';

// Styles
import './Title.scss';

// Navigation
import HomeNav from '../sections/HomeNav';

const Title = (props) => {
	let { navStatus, sections, setNavBarLinks } = props;
	return (
		<div className='w-title__container'>
			<div className='w-title__title'>
				<span>
					<sup className='w-title__title--the'>THE</sup>
					<span className='w-title__title--water'>WATER</span>
					<span className='w-title__title--tree'>TREE</span>
					<sub className='w-title__title--tree__copy'>&reg;</sub>
				</span>
				<div>
					<i className='fas fa-slash rotate' />
					<span className='w-title__title--usa'> U.S.A.</span>
					<i className='fas fa-slash rotate' />
				</div>
				<span className='w-title__title--alkaline'>
					Alkaline Antioxidant Water
				</span>
				<span className='w-title__title--best'>
					THE BEST ALKALINE WATER IN THE DALLAS – FORT WORTH METROPLEX!!!
				</span>
			</div>
			{navStatus === 'home-nav' ? (
				<Collapse
					in={navStatus === 'home-nav' ? true : false}
					collapsedSize='40px'>
					<HomeNav sections={sections} setNavBarLinks={setNavBarLinks} />
				</Collapse>
			) : null}
		</div>
	);
};

export default Title;
