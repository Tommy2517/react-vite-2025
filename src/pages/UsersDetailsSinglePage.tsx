import {useLocation, useNavigate} from "react-router-dom";
import {IUser} from "../models/IUser.ts";

const UsersDetailsSinglePage = () => {
    const {state} = useLocation()
    const user   = state as IUser

    const navigate = useNavigate()
    const fooBack = () => {
        navigate(-1)
    }
    return (
        <div>
            {user.company.name}
            <br/>
            <button onClick={fooBack}>back</button>
        </div>
    );
};

export default UsersDetailsSinglePage;