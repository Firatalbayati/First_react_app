import { createContext } from "react"

export interface IContext {
    title: string,
    color: string
}

const contextData: IContext = {
    title: "App Title",
    color: "#ff00ff"
}

export const data = {
    getItem: contextData,
    setItem: (obj: IContext) => data.getItem = obj
}

export const DataContext = createContext(data)