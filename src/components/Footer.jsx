import LunicoLogo from "./icons/Logo";
import LogoFacebook from "./icons/LogoFacebook";
import LogoInst from "./icons/LogoInst";
import InlineButton from "./InlineButton";
import Input from "./Input";
import MainButton from "./MainButton";

const Footer = () => {
  return (
    <footer className="bg-black w-full min-h-[20rem] py-12 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 pr-4">
          <LunicoLogo />
          <div className="flex flex-col space-y-4 mt-6">
            <InlineButton link="#">Private Events</InlineButton>
            <InlineButton link="#">Press Enquiries</InlineButton>
          </div>
          <div className="flex space-x-6 mt-8">
            <LogoFacebook className="w-8 h-8" />
            <LogoInst className="w-8 h-8" />
          </div>
        </div>

        {/* Правая часть */}
        <div className="md:w-1/2 pl-4">
          <h3 className="text-[#DEBC63] text-2xl font-bold">Join the Lúnico guest list</h3>
          <p className="text-white mt-2 mb-4">
            Sign up with your e-mail address and don't miss the LÚNICO news & special offers
          </p>
          <div className="flex flex-col space-y-4 max-w-md">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="E-mail address" />
            <MainButton className=''>Joins us</MainButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;