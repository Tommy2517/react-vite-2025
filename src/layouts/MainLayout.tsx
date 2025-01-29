import {Outlet} from "react-router-dom";
import Menu from "../components/Menu/Menu.tsx";
import {useState} from "react";
import {ContextLevelOne} from "../context/ContextLevelOne.tsx";
import './mainLayout.scss'
const MainLayout = () => {
    const [theme, setTheme] = useState<boolean>(true);
    const themeColor = () =>  theme ? 'dark': 'light'


    return (
        <div className={`h-screen ${themeColor()}`}>
            <ContextLevelOne.Provider value={
                {
                    status: theme,
                    changeTheme: (status) => {
                        setTheme(!status)
                    }
                }
            }>

                <Menu/>
                <Outlet/>
            </ContextLevelOne.Provider>
        </div>
    );
};

export default MainLayout;