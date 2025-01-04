import {} from 'react';
import {products} from "../../data/productsList.ts";
import Product from "./Product.tsx";

const Products = () => {
    return (
        <div>
            {products.map((product, index)=><Product key={index} product={product}>{product.title}</Product>)}

        </div>
    );
};

export default Products;