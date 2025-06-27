import LunicoLogo from "./icons/Logo";
import LogoFacebook from "./icons/LogoFacebook";
import LogoInst from "./icons/LogoInst";
import InlineButton from "./InlineButton";
import Input from "./Input";
import MainButton from "./MainButton";

const Footer = () => {
  return (
    <footer className="bg-black w-full min-h-[20rem] py-12 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-0">
        {/* Left Column */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="ml-56 md:ml-0">
            <LunicoLogo width={170} height={100}/>
          </div>
          <div className="flex flex-col space-y-4 mt-6 items-center md:items-start">
            <InlineButton link="#">Private Events</InlineButton>
            <InlineButton link="#">Press Enquiries</InlineButton>
          </div>
          <div className="flex justify-center md:justify-start space-x-6 mt-8">
            <a href="https://www.facebook.com/lunicoae " target="_blank" rel="noopener noreferrer">
              <LogoFacebook className="w-8 h-8" />
            </a>
            <a href="https://www.instagram.com/lunico_ae/ " target="_blank" rel="noopener noreferrer">
              <LogoInst className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-[#DEBC63] text-2xl font-bold">Join the Lúnico guest list</h3>
          <p className="text-white mt-2 mb-4">
            Sign up with your e-mail address and don't miss the LÚNICO news & special offers
          </p>
          <div className="flex flex-col space-y-4 max-w-md mx-auto md:mx-0">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="E-mail address" />
            <MainButton>Joins us</MainButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;