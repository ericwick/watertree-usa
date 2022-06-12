import React from 'react';

// Styles
import './HomeNav.scss';

// Scrolling
import { Link } from 'react-scroll';

const HomeNav = (props) => {
	let { sections, setNavBarLinks } = props;
	return (
		<nav className='w-home-nav'>
			{sections.map((e, i) => {
				return (
					<Link key={i} className='w-home-nav__link' to={e.name} spy={true} smooth={true} duration={500}>
						{setNavBarLinks(e.name)}
					</Link>
				);
			})}
		</nav>
	);
};

export default HomeNav;
