import {Link, Outlet} from "react-router-dom";
import {AppRoutes} from "../routes/constants.ts";

const HomePage = () => {
    return (
        <div>
            <Outlet/>
            <br/>
            <Link to={AppRoutes.users}> users</Link>
        </div>
    );
};

export default HomePage;