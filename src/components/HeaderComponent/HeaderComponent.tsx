import {FC} from 'react';

type HeaderPropType = {
    onToggle: () => void;
}
const HeaderComponent:FC<HeaderPropType> = ({onToggle}) => {
    return (
        <header className="bg-gray-300 shadow-lg rounded-b-lg p-4 w-full flex items-center justify-between">
            <nav className="flex space-x-24">
                <button
                    onClick={onToggle}
                    className={'px-4 py-2 bg-gray-400 text-gray-200 hover:bg-gray-200 hover:text-gray-700 font-medium rounded transition-all duration-300'}>
                    JSON Placeholder Todos
                </button>
                <button
                    onClick={() => {

                    }}
                    className={
                        'px-4 py-2 bg-gray-400 text-gray-200 ' +
                        'hover:bg-gray-200 ' +
                        'hover:text-gray-700 font-medium rounded transition-all duration-300'}>
                    Dummy JSON Todos
                </button>
            </nav>
        </header>
    );
};

export default HeaderComponent;