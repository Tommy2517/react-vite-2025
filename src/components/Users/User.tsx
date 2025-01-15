import {IUser} from "../../models/IUser.ts";
import {FC} from "react";
import {useNavigate} from "react-router";

type Prop = {
    user: IUser
}

const User: FC<Prop> = ({user}) => {
    const navigate = useNavigate();

    const onClickButtonNavigate = () => {
        navigate(user.id + '/carts')
    }
    return (
        <div className={'flex'}>
            <div className={'m-5 p-1 text-white bg-teal-700 w-10 flex items-center justify-center'}>
                {user.id }
            </div>
            <div className={'m-5 p-1 text-white bg-teal-700 w-36 flex items-center justify-center'}>
                {user.firstName}
            </div>
                <button className={'text-white bg-teal-700 w-36 h-10 m-5'} onClick={onClickButtonNavigate}>carts</button>
        </div>
    );
};

export default User;