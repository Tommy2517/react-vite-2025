import {UserComponent} from "./userComponent.tsx";
import useDummyResponse from "../../hooks/useDummyResponse.ts";
import {IDummyResponse} from "../../models/IDummyResponse.ts";
import {IUser} from "../../models/IUser.ts";

export const UsersComponent = () => {
    const {data} = useDummyResponse<IDummyResponse & { users:IUser[] }>('/users')
    if (!data) return <div>wait</div>
    return <div>
        {data.users.map(user => <UserComponent key={user.id} user={user}/>)}
    </div>;
}