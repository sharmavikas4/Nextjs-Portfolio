import images from "@/constants/images";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="mb-20 flex justify-between py-6">
      <div className="flex flex-shrink-0 items-center ">
        <img src={images.logo} alt="Vs." className="mx-2 h-14 w-14"></img>
      </div>
      <div className=" flex gap-4 items-center justify-center m-8 text-2xl">
        <a href="https://www.linkedin.com/in/vikas-sharma-263b24232/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/sharmavikas4">
          <FaGithub />
        </a>
        <a href="https://x.com/SharmaVikas_1">
          <FaXTwitter />
        </a>
        <a href="https://www.instagram.com/sharma.vikas1/">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};
export default Navbar;
