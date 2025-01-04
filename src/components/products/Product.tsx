import {FC, ReactNode} from 'react';
import {IProduct} from "../../modules/IProduct.ts";
type ProductType = {
    product:IProduct;
    children:ReactNode;
}
const Product:FC<ProductType> = ({product,children}) => {
    return (
        <div className={'bg-gray-200 shadow-md rounded-lg p-6 m-4 max-w-sm flex flex-col items-center space-y-4'}>
            <h1>{children} - {product.price} uah</h1>
            <img className={"w-32 h-32 object-cover object-top border-2 border-gray-800"} src={product.image} alt={product.title}/>
        </div>
    );
};

export default Product;