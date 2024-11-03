"use client"
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductsList';


const HomePage: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>CRUD App with Next.js and Redux</h1>
        <ProductForm />
        <ProductList />
      </div>
    </Provider>
  );
};

export default HomePage;
