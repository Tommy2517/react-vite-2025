import {Link} from "react-router-dom";
import {AppRoutes} from "../routes/constants.ts";
import UsersReqRes from "../components/UsersReqRes/UsersReqRes.tsx";

const UsersPageReqRes = () => {
    return (
        <div>
            <UsersReqRes/>
            <br/>
            <Link to={AppRoutes.root}>back</Link>
        </div>
    );
};

export default UsersPageReqRes;