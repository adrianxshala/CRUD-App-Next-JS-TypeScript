
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/slices/productSlice';

// Define the Product type for better type safety
interface Product {
  id: number;
  title: string;
  description: string;
}

// Define the RootState type for the Redux state
interface RootState {
  products: {
    products: Product[];
  };
}

const ProductList: React.FC = () => {
  // Use the RootState type for type safety
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <button onClick={() => dispatch(deleteProduct(product.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
