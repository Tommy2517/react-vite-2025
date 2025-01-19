import {useLocation, useNavigate} from "react-router-dom";
import {IUser} from "../../models/IUser.ts";

const UserDetailsComponent = () => {
    const {state} = useLocation()
    const user = state as IUser
    const navigate = useNavigate()
    const onUserDetailsClick = () =>{
        navigate('user', {state: state})
    }
    return (
        <div>
            {user &&
                <div>
                    {user.email}
                    <hr/>
                    {user.firstName}
                    <hr/>
                    {user.gender}
                    <hr/>
                    <button onClick={onUserDetailsClick}
                            className={'border-2 border-amber-500 pl-2 pr-2'}>
                        user posts
                    </button>
                </div>
            }
        </div>
    );
};

export default UserDetailsComponent;