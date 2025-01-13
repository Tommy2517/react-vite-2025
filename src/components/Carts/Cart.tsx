import {ICart} from "../../models/ICarts.ts";
import {FC} from "react";

type Props = {
    cart: ICart
}
const Cart: FC<Props> = ({cart}) => {
    return (
        <div>
            {cart.total}
        </div>
    )
};

export default Cart;