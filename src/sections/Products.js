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
import g from '../assets/images/gallon.png';
import pdumbbell from '../assets/images/pdumbbell.png';
import container from '../assets/images/container.png';

const Products = () => {
	return (
		<div>
			<div className='w-products__card reverse'>
				<img src={stix} className='w-products__img-stix' alt='stix' />
				<div>
					<h4 className='w-products__card--product-title'>Portable Filtration Power Stix</h4>
					<p className='w-products__card--description--price'>
						<b>$60</b>
					</p>
					<p className='w-products__card--description--p'>
						This portable Silver Power Stick has many uses and is portable so you can take it with you everywhere you go. You
						can even use them around the house because of a new addition to what this little dynamo will do. It will create
						Alkaline Antioxidant water, but the new version will also create anti-bacterial water when it is left in the water
						for more than an hour. This creates a whole new product for you to benefit from. You can clean this with water, and
						you can use them to wash your skin and much more. The best part is that you can still drink the water and there is
						no chemical smell when you're cleaning around the house, imagine the possibilites!
					</p>
				</div>
			</div>
			<div className='w-products__card row'>
				<img src={lufe} className='w-products__img-lufe' alt='lufe' />
				<div>
					<h4 className='w-products__card--product-title'>All-Natural Toothpaste</h4>
					<p className='w-products__card--description--price'>
						<b>$10</b>
					</p>
					<p className='w-products__card--description--p'>
						Luf&eacute; Herbal Mint All-Natural toothpaste has an herbal mint flavor with Essential Oils, Enzymes,
						Flouride-Free, No Triclosan, Peroxide, or SLS! This toothpaste promotes healthy oral hygiene, freshens breath,
						combats plaque, prevents tooth decay, &amp; whitens teeth naturally.
					</p>
				</div>
			</div>
			<div className='w-products__card reverse'>
				<img src={orbs} className='w-products__img-orbs' alt='orbs' />
				<div>
					<h4 className='w-products__card--product-title'>Antioxidant Purifying Orbs</h4>
					<p className='w-products__card--description--price'>
						<b>$20/pack</b>
					</p>
					<p className='w-products__card--description--p'>
						Boost your water with the Alkaline, Antioxidant, Mineral power of Antiox Orbs! Antioxiodant orbs give water an
						antioxidant boost by addign vital minerals &amp; raising your water as high as a pH of 9.5! Encased in shatter
						resistant, BPA-free Tritan plastic our proprietary Ceramic Technology is able to unfuse water with ionized minerals
						like Magnesium, Potassium, &amp; Calcium (just to name a few). For best results, use with purified water, orbs
						should never be used with non-potable water.*
					</p>
				</div>
			</div>
			<div className='w-products__card row'>
				<img src={oil} className='w-products__img-oil' alt='oil' />
				<div>
					<h4 className='w-products__card--product-title'>Magnesium Oil</h4>
					<p className='w-products__card--description--price'>
						<b>$12</b>
					</p>
					<p className='w-products__card--description--p'>
						Magnesium Oil is great for daily use in reducing joint and muscle aches, soreness, &amp; cramps while also acting as
						a skin softening agent!* Rub it directly onto the affected areas and relax.
					</p>
					<p className='w-products__card--description--p'>
						How to use: Following a shower or cleaning area, pour the Magnesium Oil into your hands and rub directly onto
						desired area for relief -- NOT FOR INTERNAL USE.
					</p>
				</div>
			</div>
			<div className='w-products__card reverse'>
				<img src={ionic} className='w-products__img-ionic' alt='ionic' />
				<div>
					<h4 className='w-products__card--product-title'>Ionic Magnesium</h4>
					<p className='w-products__card--description--price'>
						<b>$7</b>
					</p>
					<p className='w-products__card--description--p'>
						Ionic Magnesium Drops are an all-natural, perfectly balanced, and low-sodium. They contain 79 minerals &amp; trace
						elements from Utah's Great Salt Lake, made through a proprietary solar evaporation and precipitation process.*
					</p>
					<p className='w-products__card--description--p'>
						How to use: Add 2-3 drops into 8oz of water to transform empty, bland water into tasty mineral water(20 drops =
						1mL). The drops are also great to add minerals to other foods and beverages such as coffee and soups!
					</p>
					<br />
					<p className='w-products__card--description--warning'>
						<b>Warning:</b> Consuming the full daily dose at one time may have a laxative effect.
					</p>
				</div>
			</div>
			<div className='w-products__card row'>
				<img src={salt} className='w-products__img-salt' alt='salt' />
				<div>
					<h4 className='w-products__card--product-title'>Himalayan Salt</h4>
					<p className='w-products__card--description--price'>
						<b>$20</b>
					</p>
					<p className='w-products__card--description--p'>
						Himalayan salt has become well known for its amazing health benefits. It re-mineralizes the body with minerals and
						trace elements essential to our health and wellbeing. Our Himalayan pink salt is rich in trace minerals - including
						Calcium, Magnesium, Potassium, Copper and Iron.
					</p>
					<p className='w-products__card--description--p'>
						Our 100% pure Himalayan Pink Salt is the perfect addition to any meal! Sherpa Pink Himalayan salt is great for
						seasoning meats, grilled vegetables, a variety of salads (such as pasta, egg or potato salads), soups &amp; stews
						and blends well into recipes when baking.
					</p>
				</div>
			</div>
			<div className='w-products__card reverse'>
				<img src={shots} className='w-products__img-shots' alt='shots' />
				<div>
					<h4 className='w-products__card--product-title'>B12 shots</h4>
					<p className='w-products__card--description--price'>
						<b>$3/each or $5/pair</b>
					</p>
					<p className='w-products__card--description--p'>
						Rapid Charge is a healthy way to add a delicious dose of flavor &amp; vitamins to liven up your Alkaline water! It
						is sweetened with Stevia (a natural plant-based sweetner) for minimal calories, and is a more wholesome alternative
						to sugar and processed, chemical sweetners. It is SAFE for Diabetics!*
					</p>
					<p className='w-products__card--description--p'>
						These shots contain 3 of the main B vitamins: B3, B6, &amp; B12 - vitamins your body does not produce on its own. B
						vitamins are an excellent way to give you a boost of energy without the jittery feeling of caffeine. Available in
						Wild Berry &amp; Cherry.
					</p>
					<p className='w-products__card--description--warning'>
						<b>Warning:</b> This contains B vitamins and herbs with natural caffeine. If you’re on prescription medication,
						don’t take this product without first consulting your primary care physician
					</p>
				</div>
			</div>
			<div className='w-products__card row'>
				<div className='w-products__img--container'>
					<img src={container} className='w-products__img-tub' alt='container' />
					<img src={g} className='w-products__img-2g' alt='2 gallon' />
					<img src={pdumbbell} className='w-products__img-pdumbbell' alt='pink dumbbell' />
				</div>
				<div>
					<h4 className='w-products__card--product-title'>Containers</h4>
					<p className='w-products__card--description--container-price'>*priced with 9.5ph initial fill up</p>
					<p className='w-products__card--description--container-prices'>
						1 Gallon: <b>$5</b>
					</p>
					<p className='w-products__card--description--container-prices'>
						2 Gallon: <b>$9 ($11 w/ spout or handle)</b>
					</p>
					<p className='w-products__card--description--container-prices'>
						3 Gallon: <b>$12 ($14 w/ spout)</b>
					</p>
					<p className='w-products__card--description--container-prices'>
						5 Gallon: <b>$15 ($17 w/ spout)</b>
					</p>
					<p className='w-products__card--description--container-prices'>
						5 Liter: <b>$7</b>
					</p>
					<p className='w-products__card--description--container-prices'>
						2.2 Liter Dumbbells: <b>$15</b>
					</p>
					<p className='w-products__card--description--container-p'>Also bring your own containers and fill up by the gallon!</p>
				</div>
			</div>
			<div className='w-products__prices'>
				{/* REFILLS */}
				<p className='w-products__prices--table-title'>Refills &#40;per gallon&#41;</p>
				<table className='w-products__prices--table'>
					<thead className='w-products__prices--table--header'>
						<tr className='w-products__prices--table--row'>
							<th />
							<th className='w-products__prices--table--row--title'>Price &#40;per gallon&#41;</th>
							<th className='w-products__prices--table--row--title'>2.2L Dumbbell</th>
						</tr>
					</thead>
					<tbody className='w-products__prices--table--body'>
						<tr className='w-products__prices--table--row'>
							<th className='w-products__prices--table--row__head'>Classic</th>
							<td>$1</td>
							<td>50&#162;</td>
						</tr>
						<tr className='w-products__prices--table--row'>
							<th className='w-products__prices--table--row__head'>Premium</th>
							<td>$2</td>
							<td>$1</td>
						</tr>
						<tr className='w-products__prices--table--row'>
							<th className='w-products__prices--table--row__head'>Hydro Classic</th>
							<td>$4</td>
							<td>$2</td>
						</tr>
						<tr className='w-products__prices--table--row'>
							<th className='w-products__prices--table--row__head'>Hydro Premium</th>
							<td>$5</td>
							<td>$2.50</td>
						</tr>
					</tbody>
				</table>

				{/* CASES */}
				<p className='w-products__prices--table-title'>Cases &#40;24 Bottles&#41;</p>
				<table className='w-products__prices--table'>
					<thead className='w-products__prices--table--header'>
						<tr className='w-products__prices--table--row'>
							<th />
							<th className='w-products__prices--table--row--title'>Individual &#40;1-4&#41;</th>
							<th className='w-products__prices--table--row--title'>Bulk &#40;5+&#41;</th>
						</tr>
					</thead>
					<tbody className='w-products__prices--table--body'>
						<tr className='w-products__prices--table--row'>
							<th className='w-products__prices--table--row__head'>Classic</th>
							<td>$15</td>
							<td>$12</td>
						</tr>
						<tr className='w-products__prices--table--row'>
							<th className='w-products__prices--table--row__head'>Premium</th>
							<td>$20</td>
							<td>$18</td>
						</tr>
					</tbody>
				</table>

				{/* CONTAINERS */}
				<p className='w-products__prices--table-title'>Containers &#40;Classic 9.5pH Fill-Up&#41;</p>
				<table className='w-products__prices--table'>
					<thead className='w-products__prices--table--header'>
						<tr className='w-products__prices--table--row'>
							<th />
							<th className='w-products__prices--table--row--title'>Regular</th>
							<th className='w-products__prices--table--row--title'>Spout</th>
							<th className='w-products__prices--table--row--title'>Handle</th>
						</tr>
					</thead>
					<tbody className='w-products__prices--table--body'>
						<tr className='w-products__prices--table--row'>
							<th className='w-products__prices--table--row__head'>1 Gallon</th>
							<td className='w-products__prices--table--row--bpa '>$3 &#40;BPA Free $5&#41;</td>
							<td className='w-products__prices--table--row__empty' />
							<td className='w-products__prices--table--row__empty' />
						</tr>
						<tr className='w-products__prices--table--row'>
							<th className='w-products__prices--table--row__head'>2 Gallon</th>
							<td>$20</td>
							<td>$11</td>
							<td>$11</td>
						</tr>
						<tr className='w-products__prices--table--row'>
							<th className='w-products__prices--table--row__head'>3 Gallon</th>
							<td>$12</td>
							<td>$14</td>
							<td>$14</td>
						</tr>
						<tr className='w-products__prices--table--row'>
							<th className='w-products__prices--table--row__head'>5 Gallon</th>
							<td>$15</td>
							<td>$17</td>
							<td>$20 &#40;Wide&#41;</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Products;
