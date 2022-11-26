import usePokemonPreview from "../hooks/usePokemonPreview";
import colors from "../misc/colors";
import { motion } from "framer-motion";
import Link from "next/link";

const PokemonDexItem = ({ entry_number, name, species_url }) => {
  const { id, image, types, isLoading } = usePokemonPreview(species_url);

  return (
    <Link href={`/pokemon/${id}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        className="flex items-center bg-white space-x-2 shadow rounded overflow-hidden relative hover:cursor-pointer hover:bg-neutral-100 hover:shadow-2xl"
      >
        {isLoading ? (
          <div className="bg-neutral-200 w-20 h-20 animate-pulse" />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.03 }}
            style={{ backgroundColor: colors[`${types[0]}`] }}
            className="w-20 h-20"
          >
            <img src={image} alt={name} />
          </motion.div>
        )}
        <div className="flex flex-col space-y-1">
          <p className="font-bold text-xl capitalize">{name}</p>
          {!isLoading && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.03 }}
              className="flex items-center space-x-1"
            >
              {types.map((type) => {
                return (
                  <span
                    style={{ backgroundColor: colors[`${type}`] }}
                    className="px-2 py-0.5 rounded text-white capitalize"
                    key={type}
                  >
                    {type}
                  </span>
                );
              })}
            </motion.div>
          )}
        </div>
        <span className="absolute right-2 top-2 text-xs font-semibold text-neutral-400">
          # {entry_number}
        </span>
      </motion.div>
    </Link>
  );
};

export default PokemonDexItem;
