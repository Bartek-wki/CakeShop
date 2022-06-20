import axios from 'axios';
import { API_URL } from '../config';
import shortid from 'shortid';

/* SELECTORS */
export const getCart = ({ orders }) => orders.cart;

/* ACTIONS */

//action name creator
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const ADD_PRODUCT_TO_CART = createActionName('ADD_PRODUCT_TO_CART');
const EDIT_PRODUCT_QUANTITY = createActionName('EDIT_PRODUCT_QUANTITY');

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

export const addProductToCart = payload => ({ payload, type: ADD_PRODUCT_TO_CART });
export const editProductQuantity = payload => ({ payload, type: EDIT_PRODUCT_QUANTITY });

/* THUNKS */


/* INITIAL STATE */
const initialState = {
  cart: [
    {
      name: 'Pavlova',
      product: 'cakes',
      category:'standard cakes',
      price: 89,
      image: 'pavlova1.jpg',
      taste: ['chocolate', 'strawberry'],
      size:'small',
      quantity:1,
      productColor:'As shown',
      decorationColor:'As shown',
      inscription:'I KOMUNIA ŚWIĘTA',
      id:'KnTWoS',
    },
    {
      name: 'Pavlova',
      product: 'cakes',
      category:'communion cakes',
      price: 89,
      image: 'pavlova1.jpg',
      taste: ['Lorem impsum Lorem impsum Lorem impsum Lorem impsum'],
      size:'small',
      quantity:1,
      productColor:'As shown',
      decorationColor:'As shown',
      inscription:'I KOMUNIA ŚWIĘTA',
      id:'Qk8KnTWo',
    },
  ],
  orders: [],
};

/* REDUCER */
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case START_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: true, error: null, success: false } } };
    case END_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: null, success: true } } };
    case ERROR_REQUEST:
      return { ...statePart, requests: { ...statePart.requests, [action.payload.name]: { pending: false, error: action.payload.error, success: false } } };
    case ADD_PRODUCT_TO_CART:
      return { ...statePart, cart: [...statePart.cart, {...action.payload, id: shortid()}] };
    case EDIT_PRODUCT_QUANTITY:
      return { ...statePart, cart: statePart.cart.map(product => product.id === action.payload.id ? { ...product, quantity: action.payload.quantity } : product) };
    default:
      return statePart;
  }
}
