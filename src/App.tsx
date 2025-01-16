import './App.css'
import {products} from "./data/productsList.ts";
import {IProduct} from "./models/product.ts";
import MyProduct from "./components/my-product/MyProduct.tsx";
//branch lesson 1
function App() {

  return (
    <>
      {products.map((product:IProduct, index)=><MyProduct key={index} product={product}/>)}
    </>
  )
}

export default App
