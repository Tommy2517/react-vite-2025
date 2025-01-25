import {Link, Outlet} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <Link to={'/users'}>home</Link>
            <Outlet/>
        </div>
    );
};

export default HomePage;