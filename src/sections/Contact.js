import React from 'react';

// Styles
import './Contact.scss';

const Contact = () => {
	return (
		<div className='w-contact__container'>
			<p className='w-contact__title'>How to Find Us</p>
			<hr className='horizontal-divider' />
			<div className='w-contact__info'>
				<div className='w-contact__information'>
					<span className='w-contact__information--subtitle'>Address</span>
					<span className='w-contact__information--info'>
						<b>17721 Dallas Pkwy #108, Dallas, TX 75287</b>
					</span>
					<br />
					<span className='w-contact__information--subtitle'>
						{' '}
						Hydration Hours
					</span>
					<span className='w-contact__information--info'>
						{' '}
						Monday - Saturday: <b>Noon - 7pm</b>
					</span>
					<span className='w-contact__information--info'>
						{' '}
						Sunday: <b>Closed</b>
					</span>
					<br />
					<span className='w-contact__information--subtitle'>Store</span>
					<span className='w-contact__information--info'>
						<a
							href='tel:+1-214-238-2690'
							className='w-contact__information--tel'>
							<b>&#40;214&#41; 238 - 2690</b>
						</a>
					</span>
					<br />
					<span className='w-contact__information--subtitle'>
						Business Mobile
					</span>
					<span className='w-contact__information--info'>
						<a
							href='tel:+1-469-263-5333'
							className='w-contact__information--tel'>
							<b>&#40;469&#41; 263 - 5333</b>
						</a>
					</span>
				</div>
				<div>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.487858948856!2d-96.83301768449499!3d32.990911180355056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c23f9a219271b%3A0xcf92adeec8eddca5!2s17721+Dallas+Pkwy+%23108%2C+Dallas%2C+TX+75287!5e0!3m2!1sen!2sus!4v1566011190890!5m2!1sen!2sus'
						height='450'
						frameBorder='0'
						allowFullScreen
						title='Directions to watertree'
						className='iframe'
					/>
				</div>
			</div>
		</div>
	);
};

export default Contact;
