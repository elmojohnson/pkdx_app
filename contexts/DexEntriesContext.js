import { createContext } from "react";

export const DexEntriesContext = createContext({
    currentDex: "",
    handleChange: () => {}
})