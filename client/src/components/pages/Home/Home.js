import React from 'react';

import CarouselComponent from '../../features/CarouselComponent/CarouselComponent';

const Home = () => (
  <div>
    <CarouselComponent
      image_1={`${process.env.PUBLIC_URL}/images/carousel/bakery1.jpg`}
      image_2={`${process.env.PUBLIC_URL}/images/carousel/bakery2.jpg`}
      image_3={`${process.env.PUBLIC_URL}/images/carousel/bakery3.jpg`}
      title={'Sweet Delights'}
      describe={'bakery - cakes and pastries to order'}
    />
  </div>
);

export default Home;
