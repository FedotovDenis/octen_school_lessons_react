import React, { FC, useEffect, useState } from 'react';
import Product from '../product/Product';

interface ProductType {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
}

const Products: FC = () => {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data.products);
            })
            .catch(error => {
                console.error('Error fetching the products:', error);
            });
    }, []);

    return (
        <div className="Products">
            {products.map(product => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    );
};

export default Products;
