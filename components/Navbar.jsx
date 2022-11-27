import Image from "next/image";
import { HiOutlineUser, HiOutlineShoppingCart } from "react-icons/hi";

const Navbar = () => {
  return (
    <header aria-label="Site Header" className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 my-4">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block" href="/">
              <span className="sr-only">Home</span>
              <Image
                src="/logo.svg"
                alt="logo"
                width={150}
                height={45}
                priority
              />
            </a>
          </div>
          <div className="hidden md:block">
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-9 text-sm">
                <li className="text-gray-900 transition hover:text-gray-900/75 uppercase cursor-pointer font-medium font-neomMedium">
                  Products
                </li>
                <li className="text-gray-900 transition hover:text-gray-900/75 uppercase cursor-pointer font-medium font-neomMedium">
                  Apps & Games
                </li>
                <li className="text-gray-900 transition hover:text-gray-900/75 uppercase cursor-pointer font-medium font-neomMedium">
                  Support
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <ul className="flex items-center gap-9 text-sm">
                <li className="text-gray-900 transition hover:text-gray-900/75 cursor-pointer">
                  <HiOutlineUser className="h-6 w-6" />
                </li>
                <li className="text-gray-900 transition hover:text-gray-900/75 cursor-pointer">
                  <HiOutlineShoppingCart className="h-6 w-6" />
                </li>
              </ul>
            </div>
            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
