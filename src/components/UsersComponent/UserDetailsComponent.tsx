import {Link, useLocation, useNavigate} from "react-router-dom";
import {IUser} from "../../models/IUser.ts";

const UserDetailsComponent = () => {
    const {state} = useLocation()
    const user = state as IUser
    // const navigate = useNavigate()
    // const onUserDetailsClick = () =>{
    //     navigate('user')
    // }
    return (
        <div>
            {user &&
                <Link to={'user'}>
                    {user.email}
                    <hr/>
                    {user.firstName}
                    <hr/>
                    {user.gender}
                    <hr/>
                    {/*<button onClick={onUserDetailsClick}*/}
                    {/*        className={'border-2 border-amber-500 pl-2 pr-2'}>*/}
                    {/*    user posts*/}
                    {/*</button>*/}
                </Link>
            }
        </div>
    );
};

export default UserDetailsComponent;