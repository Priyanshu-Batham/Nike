import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
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

const SpecialOffers = () => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, }}
      variants={cardVariants}
      className="flex justify-wrap items-center max-lg:flex-col-reverse gap-10 max-container"
    >
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          alt="offer"
          className="object-contain w-full "
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red mt-3 inline-block">Special</span>{" "}
          Offer
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fullfill your unique
          desires, surpassing your loftiest expectations. Your journey with us
          is nothing short of exceptional.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            iconURL={arrowRight}
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default SpecialOffers;
