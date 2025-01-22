import {Link} from "react-router-dom";
import {AppRoutes} from "../routes/constants.ts";

const HomePage = () => {
    return (
        <div>
            Home
            <br/>
            <Link to={AppRoutes.users}> users</Link>
        </div>
    );
};

export default HomePage;