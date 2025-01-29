import {useContext} from "react";
import {ContextLevelOne} from "../context/ContextLevelOne.tsx";

const HomePage = () => {
    const {changeTheme} = useContext(ContextLevelOne)

    return (

        <div>
            <div>HomePage</div>
            <button onClick={changeTheme}>click</button>
        </div>
    );
};

export default HomePage;