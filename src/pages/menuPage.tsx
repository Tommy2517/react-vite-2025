import {Link} from "react-router-dom";

export const MenuPage = () => {
    return <ul>
        <li>
            <Link to={''}>Home</Link>
        </li>
        <li>
            <Link to={'users'}>Users</Link>
        </li>

    </ul>;
}