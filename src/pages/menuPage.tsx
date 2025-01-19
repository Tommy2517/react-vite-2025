import {Link} from "react-router-dom";

export const MenuPage = () => {
    return <ul>
        <li>
            <Link to={''}>Home</Link>
        </li>
        <li>
            <Link to={'users'}>Users</Link>
        </li>
        <li>
            <Link to={'posts'}>Posts</Link>
        </li>

    </ul>;
}