import React from 'react';

// Styles
import './Footer.scss';

// Assets
import logo from '../assets/images/watertreelogo.png';

class Footer extends React.Component {
	render() {
		return (
			<div className='w-footer'>
				<div className='w-footer__contact'>
					<span className='w-footer__contact--number'>
						<a href='tel:+1-469-263-5333' className='w-footer__contact--number'>
							<b>&#40; 469 &#41; 263 - 5333</b>{' '}
						</a>
					</span>
					<span className='w-footer__contact--address'>
						<b>17721 Dallas Pkwy #108, Dallas, TX 75287</b>
					</span>
				</div>
				<div className='w-footer__center'>
					<img className='w-footer__center--logo' src={logo} alt='WaterTree' />
					<span className='w-footer__center--alkaline-water'>Alkaline Antioxidant Water</span>
				</div>
				<div className='w-footer__wick'>
					<span className='w-footer__wick--copyright'>
						&copy; 2019 WaterTree USA - Website by{' '}
						<a href='https://ericwick.github.io/portfolio-page/' className='w-footer__wick--copyright-link'>
							Wick
						</a>
					</span>
				</div>
			</div>
		);
	}
}

export default Footer;
