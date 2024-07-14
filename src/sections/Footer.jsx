import { footerLogo } from "../assets/images";
import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="text-base mt-6 font-montserrat leading-7 text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect size in store. Get Rewards.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map(item=>(
              <div key={item.alt} className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
                <img src={item.src} alt={item.alt} height={24} width={24}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
