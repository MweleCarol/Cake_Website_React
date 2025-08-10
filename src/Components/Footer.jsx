import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="px-6 pt-10 md:px-16 lg:px-36 w-full text-white bg-gray-800">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-300 pb-10">
        <div className="md:max-w-md">
          <div className="flex items-center gap-3">
            <img
              className="w-14 h-14 md:w-[75px] md:h-[75px] rounded-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
              src={assets.logo}
              alt="Cake Spot Logo"
            />
            <span className="font-bold text-2xl md:text-4xl text-white cursor-pointer  transition-colors duration-300">
              Cake Spot
            </span>
          </div>
          <p className="mt-6 text-sm text-white leading-relaxed">
            Cake Spot is your ultimate destination for delightful and beautifully crafted cakes, treats, and drinks. From weddings to birthdays, we help you celebrate every moment with sweetness.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg"
              alt="Google Play"
              className="h-10 w-auto border border-gray-200 rounded hover:shadow"
            />
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg"
              alt="App Store"
              className="h-10 w-auto border border-gray-200 rounded hover:shadow"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col sm:flex-row md:justify-end gap-10 md:gap-32">
          <div>
            <h2 className="font-semibold text-white mb-5">Company</h2>
            <ul className="text-sm space-y-2 text-white">
              <li><a href="#" className="hover:text-amber-600 transition">Home</a></li>
              <li><a href="#" className="hover:text-amber-600 transition">About us</a></li>
              <li><a href="#" className="hover:text-amber-600 transition">Contact us</a></li>
              <li><a href="#" className="hover:text-amber-600 transition">Privacy policy</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-white mb-5">Get in touch</h2>
            <div className="text-sm space-y-2 text-white">
              <p>+1-234-567-890</p>
              <p>contact@cakespot.co.ke</p>
            </div>
          </div>
        </div>
      </div>

      <p className="pt-4 text-center text-sm text-gray-500 pb-5">
        &copy; {new Date().getFullYear()} Cake Spot Ke. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
