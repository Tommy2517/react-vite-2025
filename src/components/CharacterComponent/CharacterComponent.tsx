import {FC, ReactNode} from 'react';
import {ISimpson} from "../../modules/simpson.ts";
type CharacterType = {
    character:ISimpson;
    children:ReactNode;
}
const CharacterComponent:FC<CharacterType> = ({character, children}) => {
    return (
        <div className={"bg-gray-200 shadow-md rounded-lg p-6 m-4 max-w-sm flex flex-col items-center space-y-4"}>
            <h1 className={"text-xl font-bold text-gray-800 text-center"}>{character.name} {character.surname}</h1>
            <h2 className={"text-md text-gray-600"}>age - {character.age}</h2>
            <img
                src={character.photo}
                alt={character.name}
                className={"w-32 h-32 object-cover object-top rounded-full border-2 border-gray-800"}
            />
            <p className={"text-gray-800 text-sm text-center"}>{children}</p>
        </div>

    );
};

export default CharacterComponent;

//!!! просили писати якщо використовуемо chatGPT так от, оскільки тейлвінг не дуже маленька ліба, то я просив побудувати стилі до мого вже готового компоненту. він дав тільки className внурищі яки зібрав за моёми вимогами а далі мені вже навіть самому легше орієнтуватися у тейлвинді.