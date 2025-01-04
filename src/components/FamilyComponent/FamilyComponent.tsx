import {FC} from 'react';
import {ISimpson} from "../../modules/simpson.ts";
import CharacterComponent from "../CharacterComponent/CharacterComponent.tsx";
import {simpsonsList} from "../../data/simpsonsList.ts";

type FamilyComponentType = {
    SimpsonsFamily: ISimpson
}
const FamilyComponent = () => {
    return (
        <div>
            {simpsonsList.map((character: ISimpson, index) =>
                <CharacterComponent key={index} character={character}>
                    {character.info}
                </CharacterComponent>
            )}
        </div>
    );
};

export default FamilyComponent;