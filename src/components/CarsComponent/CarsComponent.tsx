import CarComponent from "./CarComponent.tsx";
import {useCarsList} from "./useCarsList.ts";

const CarsComponent = () => {
    const {cars, loading, error} = useCarsList<ICar[]>()
    if (loading) return <div>Load data...</div>
    if (error) return <div>{error}</div>

    return (
        <div>
            {cars.reverse().map(car => <CarComponent key={car.id} car={car}/>)}
        </div>
    );
};

export default CarsComponent;