import { motion } from "framer-motion";

function CareerCard({ title, description, emoji }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="bg-white text-gray-800 shadow-xl rounded-2xl p-6 w-full sm:w-72 cursor-pointer transition-all"
    >
      <div className="text-4xl mb-2">{emoji}</div>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm mt-2 text-gray-600">{description}</p>
    </motion.div>
  );
}

export default CareerCard;
