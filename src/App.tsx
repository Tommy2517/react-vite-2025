import './App.css'
import {products} from "./data/productsList.ts";
import {IProduct} from "./modules/product.ts";
import MyProduct from "./components/my-product/MyProduct.tsx";
import Counter from "./components/MyCounter/counter.tsx";
import Users from "./components/users/Users.tsx";
import FloorTop from "./components/lifting/floorTop.tsx";

//branch lesson 2
function App() {

    return (
        <>
            {/*{products.map((product:IProduct, index)=><MyProduct key={index} product={product}/>)}*/}

            {/*2.1 useState*/}
            <Counter/>

            {/*2.2 useEffect*/}
            <Users/>

            {/*2.5 stateLift*/}
            <FloorTop/>
        </>
    )
}

export default App