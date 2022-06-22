import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getSingleCake, loadSingleCakeRequest } from '../../../redux/cakesRedux';
import { getSinglePastry, loadSinglePastryRequest } from '../../../redux/pastriesRedux';

import SingleProductPage from '../../pages/SingleProductPage/SingleProductPage';


const SingleProduct = () => {

  const { id, product } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cartData, setCartData] = useState({});
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    if (product === 'cakes') {
      dispatch(loadSingleCakeRequest(id));
    } else if (product === 'pastries') {
      dispatch(loadSinglePastryRequest(id));
    } else {
      navigate('/');
    }
  }, [dispatch, id, product, navigate]);

  const productData = useSelector(state => {
    if (product === 'cakes') {
      return getSingleCake(state);
    } else if (product === 'pastries') {
      return getSinglePastry(state);
    }
  });

  useEffect(() => {
    if (productData.length !== 0) {
      setCartData({
        name: productData.name,
        product: product,
        category: productData.category,
        taste: productData.taste,
        price: productData.basePrice,
        totalPrice: productData.basePrice,
        image: productData.images[0],
        size: '',
        quantity: 1,
        productColor: 'As shown',
        decorationColor: 'As shown',
        inscription: '',
        comments: '',
      });
    }
  },[productData, product]);


  return (
    <>
      { productData.length !== 0 && <SingleProductPage {...productData} cartData={cartData} setCartData={setCartData} confirm={confirm} setConfirm={setConfirm} /> }
    </>
  );
};

export default SingleProduct;
