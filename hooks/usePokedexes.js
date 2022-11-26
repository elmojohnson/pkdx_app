import { useContext, useEffect, useState } from 'react'
import { DexEntriesContext } from '../contexts/DexEntriesContext';
import P from "../lib/PokeApi";

const usePokedexes = () => {
    const { currentDex, handleChange } = useContext(DexEntriesContext); // Use context
    
    const [value, setValue] = useState(currentDex);
    const [pokedexes, setPokedexes] = useState([]);
    const [isLoading, setLoading] = useState(false);

    // Load all Poxedexes
    useEffect(() => {
        (async () => {
            setLoading(true);

            const dexes = await P.resource("https://pokeapi.co/api/v2/pokedex?offset=0&limit=29");
            setPokedexes(dexes.results);

            setLoading(false);
        })()
    }, [currentDex])

    // Handle change on select
    const handleChangeDex  = e => {
        setValue(e.target.value);
        handleChange(e.target.value)

        if(window !== undefined) {
            localStorage.setItem("last_dex_selected", e.target.value);
        }
    }

    return { pokedexes, isLoading, value, handleChangeDex };
}

export default usePokedexes