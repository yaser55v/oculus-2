import Image from "next/image";

const WhatIn = () => {
  return (
    <div className="bg-white  relative w-screen  z-30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center flex-col py-24">
        <div className="lg:text-center my-4 flex items-center justify-center flex-col">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-miedinger bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            What’s included
          </h2>
        </div>
        <Image
          src="/images/12.jpg"
          alt="What’s included"
          width={1196}
          height={510}
        />
        <button
          type="button"
          className="font-neomRegular inline-block rounded-full border border-blue-600 bg-blue-600 px-6 py-2 lg:px-12 lg:py-3 mt-8 text-sm lg:text-base text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 transition-colors"
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
};
export default WhatIn;
