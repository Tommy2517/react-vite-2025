import {FC} from "react";
import {useSearchParams} from "react-router-dom";

type props = {
    total_pages: number
}
const PaginationButtons: FC<props> = ({total_pages}) => {
    const [query, setQuery] = useSearchParams({page: '1'})
    return (
        <div className={'flex justify-center gap-10'}>
            <button onClick={() => {
                const page = query.get('page') || '1'
                let currentPage = +page

                if (page && +page > 1) setQuery({page: (--currentPage).toString()})
            }}>{'<<'}
            </button>

            <button onClick={() => {
                const page = query.get('page') || '1'
                let currentPage = +page

                if (page && +page < total_pages) setQuery({page: (++currentPage).toString()})
            }}>{'>>'}
            </button>
        </div>
    );
};

export default PaginationButtons;