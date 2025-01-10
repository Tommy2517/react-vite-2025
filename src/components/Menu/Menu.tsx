import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>HomePage</Link></li>
                <li><Link to={'/a'}>link a</Link></li>
                <li><Link to={'/b'}>link b</Link></li>
            </ul>
        </div>
    );
};

export default Menu;