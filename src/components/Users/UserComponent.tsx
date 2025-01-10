import {IUser} from "../../models/IUser.ts";
import {FC} from "react";
import {Link, useNavigate} from "react-router-dom";

type UserPropType = {
    user:IUser
}
const UserComponent:FC<UserPropType> = ({user}) => {
    const navigate = useNavigate()
    const onclickHandler = () => {
        navigate('details', {state: user})
    }
    return (
        <div>
            <Link to={'details'} state={user}>{user.name}</Link>
            {/*<button onClick={onclickHandler}> button</button>*/}
        </div>
    );
};

export default UserComponent;