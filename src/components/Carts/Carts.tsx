import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {userService} from "../../services/api.services.ts";
import {ICart} from "../../models/ICarts.ts";
import Cart from "./Cart.tsx";

const Carts = () => {
    const {id} = useParams()
    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
        if (id) userService.getCart(id).then(({carts}) => setCarts(carts))
    }, [id])
    console.log(id)
    return (
        <div>
            {carts.map(cart => (<Cart key={cart.id} cart={cart}/>))}
        </div>
    );
};

export default Carts;