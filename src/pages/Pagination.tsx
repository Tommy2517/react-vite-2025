import PaginationButtons from "../components/pagination/paginationButton.tsx";
import {Outlet} from "react-router-dom";
import {useState} from "react";

const Pagination = () => {
    const [totalPages, setTotalPages] = useState(1)
    return (
        <div>
            <PaginationButtons total_pages={totalPages}/>
            <Outlet context={{setTotalPages}}/>
        </div>
    );
};

export default Pagination;