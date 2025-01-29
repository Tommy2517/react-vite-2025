import {createContext} from "react";

export type LevelOneContextType = {
    changeTheme: () => void
}

const init = {
    changeTheme: () => {}
}

export const ContextLevelOne = createContext<LevelOneContextType>(init)