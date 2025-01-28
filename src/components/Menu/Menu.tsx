import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>home</Link></li>
            </ul>
            <ul>
                <li><Link to={'/login'}>login</Link></li>
            </ul>
            <ul>
                <li><Link to={'/auth/resources'}>auth res page</Link></li>
            </ul>
        </div>
    );
};

export default Menu;