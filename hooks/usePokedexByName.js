import { useEffect, useState } from "react";
import P from "../lib/PokeApi";

const usePokedexByName = (selectedDex) => {
  const [list, setList] = useState([]); // Pokemon list

  // Counters
  const [currentLength, setCurrentLength] = useState(0);
  const [overallLength, setOverallLength] = useState(0);

  // Limit and offset
  const limit = 30;
  const [offset, setOffset] = useState(0);

  // Loading states
  const [isLoading, setLoading] = useState(false);
  const [isLoadingMore, setLoadingMore] = useState(false);

  // Render list of pokemon on first load
  useEffect(() => {
    (async () => {
      // Reset to 0 and empty array to avoid issues
      setList([]);
      setCurrentLength(0);
      setOverallLength(0);
      setOffset(0);

      setLoading(true);

      // Fetch
      const dex = await P.resource(selectedDex);
      setOverallLength(dex.pokemon_entries.length);
      setList(dex.pokemon_entries.splice(offset, limit));
      setCurrentLength(dex.pokemon_entries.splice(offset, limit).length);

      setLoading(false);
    })();
  }, [selectedDex]);

  // Handle loading more pokemon
  const handleLoadMore = () => setOffset(offset + limit);

  // Render more list of pokemon when offset is changed (button clicked)
  useEffect(() => {
    (async () => {
      setLoadingMore(true);

      // Fetch
      const dex = await P.resource(selectedDex);
      let moreList = dex.pokemon_entries.splice(offset, limit);
      setList([...list, ...moreList]);
      setCurrentLength([...list, ...moreList].length)

      setLoadingMore(false);
    })();
  }, [offset]);

  return { list, isLoading, isLoadingMore, handleLoadMore, currentLength, overallLength };
};

export default usePokedexByName;
