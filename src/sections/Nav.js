import React from 'react';

// Styles
// import './Nav.scss';

// Assets
import logo from '../assets/images/watertree.png';

class Nav extends React.Component {
	render() {
		return (
			<div className='w-nav'>
				<div className='w-nav__left'>
					<p className='w-nav__link'>Our Products</p>
					<p className='w-nav__link'>About Us</p>
					<p className='w-nav__link'>Community</p>
				</div>
				<img className='w-nav__logo' src={logo} alt='WaterTree' />
				<div className='w-nav__right'>
					<p className='w-nav__link'>News &amp; Events</p>
					<p className='w-nav__link'>Contact</p>
					<p className='w-nav__link'>Shop</p>
				</div>
			</div>
		);
	}
}

export default Nav;
