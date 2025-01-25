import {useState} from "react";
import {Outlet} from "react-router-dom";
import PaginationButtons from "../components/PaginationButtons.tsx";

const PaginationPage = () => {
    const [totalPages, setTotalPages] = useState(1)
    const qwe = (q) => {
        setTotalPages(q)
    }
    return (
        <div>
            <PaginationButtons total_pages={totalPages}/>
            <Outlet context={{qwe}}/>
        </div>
    );
};

export default PaginationPage;