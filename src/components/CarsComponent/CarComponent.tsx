import {FC} from "react";

type CarTypeProp = {
    car:ICar
}
const CarComponent:FC<CarTypeProp> = ({car}) => {
    return (
        <div>
            {car.id}
            -
            {car.brand}
        </div>
    );
};

export default CarComponent;