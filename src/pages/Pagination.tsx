import PaginationButtons from "../components/pagination/paginationButton.tsx";
import {Outlet} from "react-router-dom";

const Pagination = () => {
    return (
        <div>
            <PaginationButtons total_pages={2}/>
            <Outlet/>
        </div>
    );
};

export default Pagination;