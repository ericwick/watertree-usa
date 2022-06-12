import React from 'react';

import WaterSection from '../sections/WaterRefills';
import './ProductSection.scss';

export default class ProductSection extends React.Component {
  render() {
    return (
      <div className='w-product'>
        {/* <h2 className="w-product__our-products">
                    Health &amp; Wellness Products
                </h2> */}
        {/* <p className="w-product__our-products--paragraph">
                    In addition to distributing high-quality Alkaline
                    Antioxidant &amp; Hydrogen Water, WaterTree USA offers a
                    wide variety of products to help you on your way to a more
                    hydrated and happy body.{" "}
                </p> */}
        {/* <Products /> */}
        <WaterSection />
        <p className='w-product__disclaimer'>
          *These statements have not been evaluated by the Food &amp; Drug
          Administration. This product is not intended to diagnose, treat, cure,
          or prevent any disease.
        </p>
      </div>
    );
  }
}
