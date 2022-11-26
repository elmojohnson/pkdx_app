// Hooks
import { useState } from "react";
import Head from "next/head";
import usePokedexByName from "../hooks/usePokedexByName";

// Layout and Components
import HomeLayout from "../layouts/HomeLayout";
import LoadingScreen from "../components/LoadingScreen";
import LoadMoreBtn from "../components/LoadMoreBtn";
import PokemonDexItem from "../components/PokemonDexItem";

// Context
import { DexEntriesContext } from "../contexts/DexEntriesContext";

const Home = () => {
  // Set values for context
  const [currentDex, setCurrentDex] = useState(typeof window !== "undefined" && localStorage.getItem("last_dex_selected") || "https://pokeapi.co/api/v2/pokedex/2/");
  const handleChange = (value) => setCurrentDex(value);
  
  const { list, isLoading, isLoadingMore, handleLoadMore, currentLength, overallLength } = usePokedexByName(currentDex); // Dex hook

  return (
    <DexEntriesContext.Provider value={{ currentDex, handleChange }}>
      <Head>
        <title>Pokédex</title>
      </Head>
      <HomeLayout>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
              {list.map((pk) => {
                return (
                  <PokemonDexItem
                    key={pk.entry_number}
                    entry_number={pk.entry_number}
                    name={pk.pokemon_species.name}
                    species_url={pk.pokemon_species.url}
                  />
                );
              })}
            </div>
            <LoadMoreBtn
              handleLoadMore={handleLoadMore}
              isLoadingMore={isLoadingMore}
              listLength={currentLength}
              limit={overallLength}
            />
          </>
        )}
      </HomeLayout>
    </DexEntriesContext.Provider>
  );
};

export default Home;
