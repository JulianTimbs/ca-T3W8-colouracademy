import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import { useBaseColourGlobalData } from "./baseColourContext";
import { generateTones } from "../functions/themeGenerator";

export const CurrentThemeDataContext = createContext([]);
export const CurrentThemeDispatchContext = createContext(null);

export function useCurrentThemeData(){
    return useContext(CurrentThemeDataContext);
}

export function useCurrentThemeDispatch(){
    return useContext(CurrentThemeDispatchContext)
}

export function CurrentThemeProvider({children}){
    let [currentTheme, setCurrentTheme] = useState([]);

    let [currentThemeLocalStorage, setCurrentThemeLocalStorage] = useLocalStorage("css-currenttheme", "[]");

    let baseColour = useBaseColourGlobalData();

    useEffect(() => {
        // On component load, read from local storage and set it to state
        setCurrentTheme(currentThemeLocalStorage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        // When baseColour updates, write the new value to local storage
        setCurrentThemeLocalStorage(currentTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentTheme]);

    useEffect(() => {
        setCurrentTheme(generateTones(baseColour));
    }, [baseColour])

    return (
        <CurrentThemeDataContext.Provider value={currentTheme}>
            <CurrentThemeDispatchContext.Provider value={setCurrentTheme}>
                {children}
            </CurrentThemeDispatchContext.Provider>
        </CurrentThemeDataContext.Provider>
    )
}