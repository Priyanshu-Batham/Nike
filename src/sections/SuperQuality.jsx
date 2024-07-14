import { shoe8 } from "../assets/images";
import Button from "../components/Button";
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

const SuperQuality = () => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, }}
      variants={cardVariants}
      id="about-us"
      className="flex justify-between items-center 
      max-lg:flex-col 
      
      gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You{" "}
          <span className="text-coral-red mt-3 inline-block">Super</span>
          <span className="text-coral-red mt-3 inline-block">Quality</span>{" "}
          Shoes
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Enusring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>

        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center ">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </motion.section>
  );
};

export default SuperQuality;
