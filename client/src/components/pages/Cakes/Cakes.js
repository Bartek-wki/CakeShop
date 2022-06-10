import React from 'react';

import CarouselComponent from '../../features/CarouselComponent/CarouselComponent';

const Cakes = () => (
  <div>
    <CarouselComponent
      image_1={`${process.env.PUBLIC_URL}/images/carousel/cake1.jpg`}
      image_2={`${process.env.PUBLIC_URL}/images/carousel/cake2.jpg`}
      image_3={`${process.env.PUBLIC_URL}/images/carousel/cake3.jpg`}
      title={'Torty'}
      describe={'cakes - wedding, standard, communion, baptism, children'}
    />
  </div>
);

export default Cakes;
