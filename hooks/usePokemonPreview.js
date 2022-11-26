import { useEffect, useState } from "react";
import P from "../lib/PokeApi";

const usePokemonPreview = (species_url) => {
  const [id, setId] = useState(0);
  const [image, setImage] = useState("");
  const [types, setTypes] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // Get species and pokemon
  useEffect(() => {
    (async () => {
      setLoading(true);

      // Species
      const species = await P.resource(species_url);
      let pokemonUrl = species.varieties.find((el) => el.is_default === true)
        .pokemon.url;

      // Pokemon
      const pokemon = await P.resource(pokemonUrl);
      setImage(pokemon.sprites.front_default);
      setTypes(pokemon.types.map((type) => type.type.name));
      setId(pokemon.id);

      setLoading(false);
    })();
  }, []);

  return { id, image, types, isLoading };
};

export default usePokemonPreview;
