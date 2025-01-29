import {Outlet} from "react-router-dom";
import Menu from "../components/Menu/Menu.tsx";
import {useState} from "react";
import {ContextLevelOne} from "../context/ContextLevelOne.tsx";
import './mainLayout.scss'
const MainLayout = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    return (
        <div className={`h-screen ${theme}`}>
            <ContextLevelOne.Provider value={
                {
                    changeTheme: () => {
                        theme === 'light' ? setTheme('dark') : setTheme('light')
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