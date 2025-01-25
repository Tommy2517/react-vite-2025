import {useState} from "react";
import {Outlet} from "react-router-dom";
import PaginationButtons from "../components/Pagination/PaginationButtons.tsx";

const PaginationPage = () => {
    const [totalPages, setTotalPages] = useState(1)
    return (
        <div>
            <PaginationButtons total_pages={totalPages}/>
            <br/>
            <Outlet context={{setTotalPages}}/>
        </div>
    );
};

export default PaginationPage;