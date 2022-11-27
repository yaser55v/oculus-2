import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 relative w-screen z-30">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/images/Oculus-Emblem 1.png"
                width={138}
                height={118}
                alt="Oculus"
              />
            </div>
          </div>
          <nav className="mt-12 lg:mt-0 font-neomRegular text-xs">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-start lg:gap-12">
              <li>
                <a
                  className="text-gray-100 transition hover:text-gray-100/75"
                  href="/"
                >
                  All Products
                </a>
              </li>
              <li>
                <a
                  className="text-gray-100 transition hover:text-gray-100/75"
                  href="/"
                >
                  More Oculus
                </a>
              </li>
              <li>
                <a
                  className="text-gray-100 transition hover:text-gray-100/75"
                  href="/"
                >
                  About
                </a>
              </li>
            </ul>
            <hr className="my-7 bg-gray-600 border-t-0 h-px"/>
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-300"
                  href="/"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-300"
                  href="/"
                >
                  Legal
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-300"
                  href="/"
                >
                  United States
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-300"
                  href="/"
                >
                  English (US)
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
      </div>
    </footer>
  );
};
export default Footer;
