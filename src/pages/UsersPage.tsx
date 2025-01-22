import {Link} from "react-router-dom";
import {AppRoutes} from "../routes/constants.ts";
import Users from "../components/Users/Users.tsx";

const UsersPage = () => {
    return (
        <div>
            <Users/>
            <br/>
            <Link to={AppRoutes.root}>back</Link>
        </div>
    );
};

export default UsersPage;