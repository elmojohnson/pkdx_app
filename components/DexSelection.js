import usePokedexes from "../hooks/usePokedexes";

const DexSelection = () => {
  const { pokedexes, isLoading, value, handleChangeDex } = usePokedexes();

  return (
    <select
      className="bg-red-500 rounded px-3 py-1 text-white capitalize hover:cursor-pointer disabled:animate-pulse"
      value={value}
      onChange={handleChangeDex}
      disabled={isLoading}
    >
      {isLoading ? (
        <option>Loading...</option>
      ) : (
        <>
          {pokedexes.map((p) => {
            return (
              <option
                className="bg-white capitalize text-black"
                key={p.name}
                value={p.url}
              >
                {p.name.replace("-", " ")}
              </option>
            );
          })}
        </>
      )}
    </select>
  );
};

export default DexSelection;
