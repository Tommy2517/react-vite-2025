import {ICart} from "../../models/ICarts.ts";
import {FC} from "react";

type Props = {
    cart: ICart
}
const Cart: FC<Props> = ({cart}) => {
    return (
        <div>
            {cart.products.map(product =>
            <div className="max-w-sm mx-auto border rounded-lg shadow-lg overflow-hidden bg-white">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-48 object-contain"
                />
                <div className="p-4">
                    <h2 className="text-lg font-bold text-gray-800">{product.title}</h2>
                    <p className="text-sm text-gray-500">Price: ${product.price}</p>
                    <p className="text-sm text-gray-500">Discount: {product.discountPercentage}%</p>
                    <p className="text-sm text-gray-500">
                        Discounted Price: ${product.discountedTotal}
                    </p>
                    <p className="text-sm text-gray-500">Quantity: {product.quantity}</p>
                    <p className="text-sm text-gray-500">Total: ${product.total}</p>
                </div>
            </div>
            )}

        </div>
    )
};

export default Cart;