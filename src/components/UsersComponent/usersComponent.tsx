import {UserComponent} from "./userComponent.tsx";
import useDummyResponse from "../../hooks/useDummyResponse.ts";
import {IDummyResponse} from "../../models/IDummyResponse.ts";
import {IUser} from "../../models/IUser.ts";

export const UsersComponent = () => {
    const {data} = useDummyResponse<IDummyResponse & { users:IUser[] }>('users')

    return <div>
        {data.users.map(user => <UserComponent key={user.id} user={user}/>)}
    </div>;
}