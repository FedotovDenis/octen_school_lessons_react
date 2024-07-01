import React, { FC } from 'react';

interface ProductProps {
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

const Product: FC<ProductProps> = ({
                                       id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail
                                   }) => {
    return (
        <div className="Product">
            <h2>{title}</h2>
            <img src={thumbnail} alt={title} />
            <p>{description}</p>
            <p>Price: ${price}</p>
            <p>Discount: {discountPercentage}%</p>
            <p>Rating: {rating}</p>
            <p>Stock: {stock}</p>
            <p>Brand: {brand}</p>
            <p>Category: {category}</p>
        </div>
    );
};

export default Product;
