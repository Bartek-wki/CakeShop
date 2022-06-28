# Cake shop website

## Link to published website:

https://bakary-bw.herokuapp.com

## Initializing a project

After cloning the project, install the required packages with the `yarn install` (or `npm install`) command.

Now you can start working, using the prepared `yarn start` (or `npm start`) shuffle.

All the source files you need to work with are located in the `src` and `public` folders.

## About project (english)

The website of a cake shop. The frontend consists of the main page, subpages with the list of products of a given category, subpage of a single product, cart and order form.

The frontend of the application uses:

- React-Router for switching between pages,
- SCSS modules for component styles,
- redux state of the application,
- Redux-Thunk to handle communication with the application backend API,
- Axios to query the API.

Express, MongoDB and Mongoose were used to create the backend.

The backend of the application plays the role of:

- static file server to serve the frontend,
- API for frontend-backend communication,
- performing database operations.

The backend API allows for:

- get basic information about all products,
- get all information about a single product,
- save your order.

## O projekcie (polski)

Strona internetowa cukierni. Frontend składa się ze strony głównej, podstron z listą produktów danej kategorii, podstrony pojedynczego produktu, koszyka oraz formularza zamówienia.

Część frontendowa aplikacji wykorzystuje:

- React-Router do przechodzenia pomiędzy stronami,
- moduły SCSS do stylów komponentów,
- reduksowy stan aplikacji,
- Redux-Thunk do obsługi komunikacji z API backendu aplikacji,
- Axios do wykonywania zapytań do API.

Do stworzenia backendu wykorzystano Express, MongoDB oraz Mongoose.

Backend aplikacji pełni rolę:

- serwera plików statycznych do serwowania frontendu,
- API do komunikacji frontendu z backendem,
- wykonywania operacji na bazie danych.

API backendu pozwala na:

- pobranie podstawowych informacji o wszystkich produktach,
- pobranie wszystkich informacji o pojedynczym produkcie,
- zapisanie zamówienia.
