import { motion } from "framer-motion";

const LoadMoreBtn = ({ handleLoadMore, isLoadingMore, listLength, limit }) => {
  if (listLength === limit) {
    return (
      <button
        className="px-4 py-2 bg-neutral-300 rounded text-neutral-600 font-semibold w-full mt-4 hover:cursor-not-allowed"
        onClick={handleLoadMore}
        disabled
      >
        No more data to display
      </button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1 }}
      className="px-4 py-2 bg-red-600 rounded text-white font-semibold w-full mt-4 shadow hover:cursor-pointer hover:bg-red-700 disabled:animate-pulse"
      onClick={handleLoadMore}
      disabled={isLoadingMore}
    >
      {isLoadingMore ? "Loading..." : "Load more"}
    </motion.button>
  );
};

export default LoadMoreBtn;
