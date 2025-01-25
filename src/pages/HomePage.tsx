import {Link, Outlet} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <Link to={'/'}>home</Link>
            <br/>
            <Link to={'/users'}>users</Link>
            <Outlet/>
        </div>
    );
};

export default HomePage;