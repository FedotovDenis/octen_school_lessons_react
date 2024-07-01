/*
з апі https://dummyjson.com/docs/products отримати та вивести всі елементи зі всіма полями.
    структура компонентів наступна -
App - Products - Product[]
*/


import React, { FC } from 'react';
import Products from './components/products/Products';
import './components/product/Products.module.css';

const App: FC = () => {
    return (
        <div className="App">
            <h1>Products</h1>
            <Products />
        </div>
    );
}

export default App;
