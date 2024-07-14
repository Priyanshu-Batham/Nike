import { star } from "../assets/icons";
import { motion } from "framer-motion";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col ">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full h-[120px] w-[120px] object-cover"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="flex justify-center items-center gap-2.5 mt-3">
        <motion.img
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}

          src={star}
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl font-bold">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
