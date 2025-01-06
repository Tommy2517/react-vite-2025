import {FC} from 'react';
import {IUser} from "../../models/users/IUser.ts";

type FloorPropType = {
    item: IUser;
    elevator: (item: IUser) => void;
}
const FloorBottom: FC<FloorPropType> = ({item, elevator}) => {
    return (
        <>
            <div>{item.name}</div>
            <button onClick={() => {
                elevator(item)
            }
            }>details
            </button>
        </>
    );
};

export default FloorBottom;