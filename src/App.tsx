import './App.css'
import {products} from "./data/productsList.ts";
import {IProduct} from "./modules/product.ts";
import MyProduct from "./components/my-product/MyProduct.tsx";
import Counter from "./components/MyCounter/counter.tsx";
import Users from "./components/users/Users.tsx";
//branch lesson 2
function App() {

  return (
    <>
      {/*{products.map((product:IProduct, index)=><MyProduct key={index} product={product}/>)}*/}

      {/*1.1 useState*/}
      <Counter/>
        <Users/>
    </>
  )
}

export default App