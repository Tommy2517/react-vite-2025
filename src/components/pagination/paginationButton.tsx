import {useSearchParams} from "react-router-dom";
import {FC, useState} from "react";
type prop = {
    total_pages:number
}
const PaginationButtons:FC<prop> = ({total_pages}) => {
    const [isDisabledPrev, setIsDisabledPrev] = useState<boolean>(false)
    const [isDisabledNext, setIsDisabledNext] = useState<boolean>(false)
    const [query, setQuery] = useSearchParams({page: '1'});

    return (
        <div>
            <button disabled={isDisabledPrev} onClick={() => {
                const page = query.get('page');
                if (page) {
                    let currentPage = +page
                    setQuery({page: (--currentPage).toString()})
                    if (currentPage == 1) setIsDisabledPrev(true)
                    if (currentPage < total_pages) setIsDisabledNext(false)
                }
            }}>prew
            </button>

            <button disabled={isDisabledNext} onClick={() => {
                const page = query.get('page');
                if (page) {
                    let currentPage = +page
                    setQuery({page: (++currentPage).toString()})
                    if (currentPage > 1) setIsDisabledPrev(false)
                    if (currentPage == total_pages) setIsDisabledNext(true)
                }
            }}>next
            </button>
        </div>
    );
};

export default PaginationButtons;