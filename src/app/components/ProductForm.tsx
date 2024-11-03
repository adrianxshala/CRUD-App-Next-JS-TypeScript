
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../redux/slices/productSlice';

interface ProductFormProps {
  existingProduct?: { id: number; title: string; description: string };
}

const ProductForm: React.FC<ProductFormProps> = ({ existingProduct }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(existingProduct?.title || '');
  const [description, setDescription] = useState(existingProduct?.description || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const product = {
      id: existingProduct ? existingProduct.id : Date.now(),
      title,
      description,
    };
    
    if (existingProduct) {
      dispatch(updateProduct(product));
    } else {
      dispatch(addProduct(product));
    }
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Product Title" 
        required 
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Product Description" 
        required 
      />
      <button type="submit">{existingProduct ? 'Update' : 'Add'} Product</button>
    </form>
  );
};

export default ProductForm;
