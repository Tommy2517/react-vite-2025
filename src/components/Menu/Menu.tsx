import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>HomePage</Link></li>
                <li><Link to={'/users'}>link a</Link></li>
                <li><Link to={'/posts'}>link b</Link></li>
            </ul>
        </div>
    );
};

export default Menu;