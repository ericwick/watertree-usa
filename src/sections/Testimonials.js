import React from 'react';

// MaterialUI
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Styles
// import './Testimonials.scss';

// Assets
import logo from '../assets/images/watertreelogo.png';

const Testimonials = () => {
	return (
		<div className='w-testimonials'>
			<i className='fas fa-angle-double-left blue fa-2x margin-right' />
			<div className='w-testimonials__scrolling-wrapper'>
				<div className='w-testimonials__quote'>
					<div className='w-testimonials__quote--block'>
						<i className='fas fa-quote-left blue fa-2x' />
						<span className='w-testimonials__quote--block-quotation'>
							Impossible is just a big word thrown around by small men who find it easier to live in the world they’ve been
							given than to explore the power they have to change it. Impossible is not a fact. It’s an opinion. Impossible is
							not a declaration. It’s a dare. Impossible is potential. Impossible is temporary. Impossible is nothing.
						</span>
						<i className='fas fa-quote-right blue fa-2x' />
					</div>
				</div>
				<div className='w-testimonials__quote'>
					<div className='w-testimonials__quote--block'>
						<i className='fas fa-quote-left blue fa-2x' />
						<span className='w-testimonials__quote--block-quotation'>
							Impossible is just a big word thrown around by small men who find it easier to live in the world they’ve been
							given than to explore the power they have to change it. Impossible is not a fact. It’s an opinion. Impossible is
							not a declaration. It’s a dare. Impossible is potential. Impossible is temporary. Impossible is nothing.
						</span>
						<i className='fas fa-quote-right blue fa-2x' />
					</div>
				</div>
				<div className='w-testimonials__quote'>
					<div className='w-testimonials__quote--block'>
						<i className='fas fa-quote-left blue fa-2x' />
						<span className='w-testimonials__quote--block-quotation'>
							Impossible is just a big word thrown around by small men who find it easier to live in the world they’ve been
							given than to explore the power they have to change it. Impossible is not a fact. It’s an opinion. Impossible is
							not a declaration. It’s a dare. Impossible is potential. Impossible is temporary. Impossible is nothing.
						</span>
						<i className='fas fa-quote-right blue fa-2x' />
					</div>
				</div>
				<div className='w-testimonials__quote'>
					<div className='w-testimonials__quote--block'>
						<i className='fas fa-quote-left blue fa-2x' />
						<span className='w-testimonials__quote--block-quotation'>
							Impossible is just a big word thrown around by small men who find it easier to live in the world they’ve been
							given than to explore the power they have to change it. Impossible is not a fact. It’s an opinion. Impossible is
							not a declaration. It’s a dare. Impossible is potential. Impossible is temporary. Impossible is nothing.
						</span>
						<i className='fas fa-quote-right blue fa-2x' />
					</div>
				</div>
			</div>
			<i className='fas fa-angle-double-right blue fa-2x margin-left' />
		</div>
	);
};

export default Testimonials;
