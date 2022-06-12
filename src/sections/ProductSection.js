import React from 'react';

import WaterSection from '../sections/WaterRefills';
import './ProductSection.scss';

export default class ProductSection extends React.Component {
  render() {
    return (
      <div className='w-product'>
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
