import {createContext} from "react";

type LevelOneContextType = {
    status:boolean
    changeTheme: (obj:boolean) => void
}

const init = {
    status:true,
    changeTheme: (obj) => {
        console.log(obj)
    }
}
export const ContextLevelOne = createContext<LevelOneContextType>(init)