import { motion } from "framer-motion";

function FrontPageText() {
  return (
    <div className="flex flex-col">
      <motion.h1
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{ duration: 1 }}
        className="text-white text-6xl FrontPageFont font-bold text-center mt-20"
      >
        STAY
      </motion.h1>
      <motion.h1
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{ duration: 2 }}
        className="text-white text-6xl FrontPageFont font-bold text-center mt-20"
      >
        EAT
      </motion.h1>
      <motion.h1
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{ duration: 3 }}
        className="text-white text-6xl FrontPageFont font-bold text-center mt-20"
      >
        CELEBRATE
      </motion.h1>
      <motion.h1
        initial={{ x: -100 }}
        animate={{ x: 100 }}
        transition={{ duration: 4 }}
        className="text-white text-6xl FrontPageFont font-bold text-center mt-20"
      >
        ZEN
      </motion.h1>
    </div>
  );
}

export default FrontPageText;
