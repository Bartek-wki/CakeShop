import React from 'react';

import CarouselComponent from '../../features/CarouselComponent/CarouselComponent';

const Pastries = () => (
  <div>
    <CarouselComponent
      image_1={`${process.env.PUBLIC_URL}/images/carousel/pastries1.jpg`}
      image_2={`${process.env.PUBLIC_URL}/images/carousel/pastries2.jpg`}
      image_3={`${process.env.PUBLIC_URL}/images/carousel/pastries3.jpg`}
      title={'Pastries'}
      describe={'pastries - pies, donuts, muffins, cupcakes'}
    />
  </div>
);

export default Pastries;
