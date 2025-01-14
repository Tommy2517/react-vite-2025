import {Link} from "react-router";
import './MenuComponent.css'

const btnParentStyle = 'group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75'
const btnChildStyle = 'block rounded-sm bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent'
const MenuComponent = () => {
    return (
        <ul>
            <li className={btnParentStyle}>
                <Link className={btnChildStyle} to={'users'}>users</Link>
            </li>
            <li className={btnParentStyle}>
                <Link className={btnChildStyle} to={'posts'}>posts</Link>
            </li>
        </ul>
    );
};

export default MenuComponent;