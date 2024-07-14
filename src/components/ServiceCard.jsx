import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    // rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, }}  
      variants={cardVariants}
      className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 "
    >
      <div className=" flex w-11 h-11 justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} width={24} height={24} alt={label} />
      </div>
      <h3 className="mt-5 font-palanquin font-bold text-3xl leading-normal">
        {label}
      </h3>
      <p className="mt-3 font-montserrat break-words leading-normal text-lg text-slate-gray">
        {subtext}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
