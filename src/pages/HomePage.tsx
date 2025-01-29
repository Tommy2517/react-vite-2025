import {useContext} from "react";
import {ContextLevelOne} from "../context/ContextLevelOne.tsx";

const HomePage = () => {
    const {changeTheme,status} = useContext(ContextLevelOne)
    const click = ()=>{
        console.log('click')
        changeTheme(status)
    }
    return (

        <div>
            <div>HomePage</div>
            <button onClick={click}>click</button>
        </div>
    );
};

export default HomePage;