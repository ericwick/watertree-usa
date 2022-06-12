import React from 'react';

// Styles
import './WaterRefills.scss';

// Assets
import g from '../assets/images/gallon.png';
import pdumbbell from '../assets/images/pdumbbell.png';
import container from '../assets/images/container.png';

export default class WaterSection extends React.Component {
	render() {
		return (
			<div className='w-water'>
				<h2 className='w-water__title'>Cases, Containers, &amp; Refills</h2>
				<div className='w-products__prices'>
					{/* PICTURES */}
					<div className='w-product__card'>
						<div className='w-products__img--container'>
							<img
								src={container}
								className='w-products__img-tub'
								alt='container'
							/>
							<img src={g} className='w-products__img-2g' alt='2 gallon' />
							<img
								src={pdumbbell}
								className='w-products__img-pdumbbell'
								alt='pink dumbbell'
							/>
						</div>
					</div>

					{/* CONTAINERS */}
					<span className='w-products__prices--table-title'>Containers</span>
					<table className='w-products__prices--table'>
						<thead className='w-products__prices--table--header'>
							<tr className='w-products__prices--table--row'>
								<th />
								<th className='w-products__prices--table--row--title'>
									Classic 9.5ph Fill-Up
								</th>
							</tr>
						</thead>
						<tbody className='w-products__prices--table--body'>
							<tr className='w-products__prices--table--row'>
								<th className='w-products__prices--table--row__head'>
									1 Gallon
								</th>
								<td className='w-dropdown__select'>
									$4 &nbsp;&nbsp;or&nbsp;&nbsp; 2 for $7
								</td>
							</tr>
							{/* <tr className='w-products__prices--table--row'>
								<th className='w-products__prices--table--row__head'>
									2 Gallon
								</th>
								<td className='w-dropdown'>
									<div className='w-dropdown__select'>
										<p>$9</p>
										<p>Spout or Handle - $11</p>
									</div>
								</td>
							</tr> */}
							<tr className='w-products__prices--table--row'>
								<th className='w-products__prices--table--row__head'>
									3 Gallon
								</th>
								<td className='w-dropdown'>
									<div className='w-dropdown__select'>
										<p>$12</p>
										<p>Spout or Handle - $14</p>
									</div>
								</td>
							</tr>
							<tr className='w-products__prices--table--row'>
								<th className='w-products__prices--table--row__head'>
									5 Gallon
								</th>
								<td className='w-dropdown'>
									<div className='w-dropdown__select'>
										<p>$15</p>
										<p>Spout - $17</p>
										{/* <p>Wide Handle - $20</p> */}
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				{/* CASES */}
				<div className='w-cases__container'>
					<li>
						<i className='fas fa-tint fa-2x blue' />
						<div className='w-water__subtitle'>
							<p id='premium'>24 pack of Premium Water Bottles - $24</p>
							<p id='bulk'>*Contact for bulk &#40;5+&#41; pricing</p>
						</div>
					</li>
				</div>

				{/* REFILLS */}
				<p className='w-products__prices--table-title'>
					Also bring your own containers and fill up by the gallon!
				</p>
				<table className='w-products__prices--table'>
					<thead className='w-products__prices--table--header'>
						<tr className='w-products__prices--table--row'>
							<th />
							<th className='w-products__prices--table--row--title'>
								Per Gallon
							</th>
							<th className='w-products__prices--table--row--title'>
								&#60;1 Gallon
							</th>
						</tr>
					</thead>
					<tbody className='w-products__prices--table--body'>
						<tr className='w-products__prices--table--row'>
							<th className='w-products__prices--table--row__head'>
								Classic (8.5ph - 9.5ph)
							</th>
							<td>$1</td>
							<td>50&#162;</td>
						</tr>
						<tr className='w-products__prices--table--row'>
							<th className='w-products__prices--table--row__head'>
								Premium (9.5ph - 10.5ph)
							</th>
							<td>$2</td>
							<td>$1</td>
						</tr>
						<tr className='w-products__prices--table--row'>
							<th className='w-products__prices--table--row__head'>
								Hydro Classic
							</th>
							<td>$4</td>
							<td>$2</td>
						</tr>
						<tr className='w-products__prices--table--row'>
							<th className='w-products__prices--table--row__head'>
								Hydro Premium
							</th>
							<td>$5</td>
							<td>$2.50</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
