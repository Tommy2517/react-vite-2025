import {Link, Outlet} from "react-router-dom";
import {AppRoutes} from "../routes/constants.ts";

const HomePage = () => {
    return (
        <div>
            <Link className={'text-green-300 font-bold'} to={AppRoutes.root}>Home</Link>
            <br/>
            <Link className={'text-blue-300 font-bold'} to={AppRoutes.cars}>Show all cars</Link>
            <br/>
            <Link className={'text-red-300 font-bold'} to={AppRoutes.carCreate}>Create Car</Link>
            <br/>
            <Link className={'text-red-300 font-bold'} to={AppRoutes.carById}>Show one Car</Link>
            <br/>
            <Outlet/>
        </div>
    );
};

export default HomePage;