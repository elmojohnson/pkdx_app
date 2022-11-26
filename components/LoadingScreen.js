import { TbPokeball } from "react-icons/tb";
import {motion} from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{scale: 0}}
    transition={{delay: 0.5}}
    className="absolute w-screen flex items-center bg-neutral-100 justify-center h-screen top-0 right-0">
      <TbPokeball className="text-7xl animate-spin text-red-600" />
    </motion.div>
  );
};

export default LoadingScreen;
