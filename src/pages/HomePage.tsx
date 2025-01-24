import {Link, Outlet} from "react-router-dom";
import {AppRoutes} from "../routes/constants.ts";

const HomePage = () => {
    return (
        <div>
            <Outlet/>
            <br/>
            <Link to={AppRoutes.usersReqRes}> users from ReqRes</Link>
            <Link to={AppRoutes.usersDummy}> users from Dummy</Link>
        </div>
    );
};

export default HomePage;