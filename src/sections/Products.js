import React from 'react';

// Styles
import './Products.scss';

// Assets
import stix from '../assets/images/wt-stix.png';
import lufe from '../assets/images/wt-lufe-toothpaste.png';
import ionic from '../assets/images/wt-mg-ionic.png';
import oil from '../assets/images/wt-mg-oil.png';
import salt from '../assets/images/wt-salt.png';
import orbs from '../assets/images/wt-orbs.png';
import shots from '../assets/images/wt-shots.png';

const Products = () => {
	return (
		<div>
			<div className='w-products__card reverse'>
				<img src={stix} className='w-products__img-stix' alt='stix' />
				<div>
					<h4 className='w-products__card--product-title'>
						Portable Filtration Power Stix
					</h4>
					<hr className='horizontal-divider' />
					<p className='w-products__card--description--price'>
						<b>$60</b>
					</p>
					<p className='w-products__card--description--p'>
						This portable Silver Power Stick has many uses and is portable so
						you can take it with you everywhere you go. You can even use them
						around the house because of a new addition to what this little
						dynamo will do. It will create Alkaline Antioxidant water, but the
						new version will also create anti-bacterial water when it is left in
						the water for more than an hour. This creates a whole new product
						for you to benefit from. You can clean this with water, and you can
						use them to wash your skin and much more. The best part is that you
						can still drink the water and there is no chemical smell when you're
						cleaning around the house, imagine the possibilities!
					</p>
				</div>
			</div>
			<div className='w-products__card reverse'>
				<img src={lufe} className='w-products__img-lufe' alt='lufe' />
				<div>
					<h4 className='w-products__card--product-title'>
						All-Natural Toothpaste
					</h4>
					<hr className='horizontal-divider' />
					<p className='w-products__card--description--price'>
						<b>$10</b>
					</p>
					<p className='w-products__card--description--p'>
						Luf&eacute; Herbal Mint All-Natural toothpaste has an herbal mint
						flavor with Essential Oils, Enzymes, Flouride-Free, No Triclosan,
						Peroxide, or SLS! This toothpaste promotes healthy oral hygiene,
						freshens breath, combats plaque, prevents tooth decay, &amp; whitens
						teeth naturally.
					</p>
				</div>
			</div>
			<div className='w-products__card reverse'>
				<img src={orbs} className='w-products__img-orbs' alt='orbs' />
				<div>
					<h4 className='w-products__card--product-title'>
						Antioxidant Purifying Orbs
					</h4>
					<hr className='horizontal-divider' />
					<p className='w-products__card--description--price'>
						<b>$20/pack</b>
					</p>
					<p className='w-products__card--description--p'>
						Boost your water with the Alkaline, Antioxidant, Mineral power of
						Antiox Orbs! Antioxiodant orbs give water an antioxidant boost by
						addign vital minerals &amp; raising your water as high as a pH of
						9.5! Encased in shatter resistant, BPA-free Tritan plastic our
						proprietary Ceramic Technology is able to unfuse water with ionized
						minerals like Magnesium, Potassium, &amp; Calcium (just to name a
						few). For best results, use with purified water, orbs should never
						be used with non-potable water.*
					</p>
				</div>
			</div>
			<div className='w-products__card reverse'>
				<img src={oil} className='w-products__img-oil' alt='oil' />
				<div>
					<h4 className='w-products__card--product-title'>Magnesium Oil</h4>
					<hr className='horizontal-divider' />
					<p className='w-products__card--description--price'>
						<b>$12</b>
					</p>
					<p className='w-products__card--description--p'>
						Magnesium Oil is great for daily use in reducing joint and muscle
						aches, soreness, &amp; cramps while also acting as a skin softening
						agent!* Rub it directly onto the affected areas and relax.
					</p>
					<p className='w-products__card--description--p'>
						How to use: Following a shower or cleaning area, pour the Magnesium
						Oil into your hands and rub directly onto desired area for relief --
						NOT FOR INTERNAL USE.
					</p>
				</div>
			</div>
			<div className='w-products__card reverse'>
				<img src={ionic} className='w-products__img-ionic' alt='ionic' />
				<div>
					<h4 className='w-products__card--product-title'>Ionic Magnesium</h4>
					<hr className='horizontal-divider' />
					<p className='w-products__card--description--price'>
						<b>$7</b>
					</p>
					<p className='w-products__card--description--p'>
						Ionic Magnesium Drops are an all-natural, perfectly balanced, and
						low-sodium. They contain 79 minerals &amp; trace elements from
						Utah's Great Salt Lake, made through a proprietary solar evaporation
						and precipitation process.*
					</p>
					<p className='w-products__card--description--p'>
						How to use: Add 2-3 drops into 8oz of water to transform empty,
						bland water into tasty mineral water(20 drops = 1mL). The drops are
						also great to add minerals to other foods and beverages such as
						coffee and soups!
					</p>
					<br />
					<p className='w-products__card--description--warning'>
						<b>Warning:</b> Consuming the full daily dose at one time may have a
						laxative effect.
					</p>
				</div>
			</div>
			<div className='w-products__card reverse'>
				<img src={salt} className='w-products__img-salt' alt='salt' />
				<div>
					<h4 className='w-products__card--product-title'>Himalayan Salt</h4>
					<hr className='horizontal-divider' />
					<p className='w-products__card--description--price'>
						<b>$20</b>
					</p>
					<p className='w-products__card--description--p'>
						Himalayan salt has become well known for its amazing health
						benefits. It re-mineralizes the body with minerals and trace
						elements essential to our health and wellbeing. Our Himalayan pink
						salt is rich in trace minerals - including Calcium, Magnesium,
						Potassium, Copper and Iron.
					</p>
					<p className='w-products__card--description--p'>
						Our 100% pure Himalayan Pink Salt is the perfect addition to any
						meal! Sherpa Pink Himalayan salt is great for seasoning meats,
						grilled vegetables, a variety of salads (such as pasta, egg or
						potato salads), soups &amp; stews and blends well into recipes when
						baking.
					</p>
				</div>
			</div>
			<div className='w-products__card reverse'>
				<img src={shots} className='w-products__img-shots' alt='shots' />
				<div>
					<h4 className='w-products__card--product-title'>B12 shots</h4>
					<hr className='horizontal-divider' />
					<p className='w-products__card--description--price'>
						<b>$3/each or $5/pair</b>
					</p>
					<p className='w-products__card--description--p'>
						Rapid Charge is a healthy way to add a delicious dose of flavor
						&amp; vitamins to liven up your Alkaline water! It is sweetened with
						Stevia (a natural plant-based sweetner) for minimal calories, and is
						a more wholesome alternative to sugar and processed, chemical
						sweetners. It is SAFE for Diabetics!*
					</p>
					<p className='w-products__card--description--p'>
						These shots contain 3 of the main B vitamins: B3, B6, &amp; B12 -
						vitamins your body does not produce on its own. B vitamins are an
						excellent way to give you a boost of energy without the jittery
						feeling of caffeine. Available in Wild Berry &amp; Cherry.
					</p>
					<p className='w-products__card--description--warning'>
						<b>Warning:</b> This contains B vitamins and herbs with natural
						caffeine. If you’re on prescription medication, don’t take this
						product without first consulting your primary care physician
					</p>
				</div>
			</div>
		</div>
	);
};

export default Products;
