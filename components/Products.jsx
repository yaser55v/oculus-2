import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { BsCart } from "react-icons/bs";
gsap.registerPlugin(ScrollTrigger);
const Products = () => {
  const titleRef = useRef(null);
  const imgRef = useRef(null);
  let elements = gsap.utils.selector(imgRef);
  useEffect(() => {
    const el = titleRef.current;
    const img = imgRef.current;
    gsap.fromTo(
      el,
      { x: "-300", opacity: 0, ease: "sine.inOut" },
      {
        x: "0",
        stagger: 1,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: el,
          toggleActions: "restart none none none",
        },
      }
    );
   /*  gsap.fromTo(
      text,
      { y: "-300", opacity: 0 },
      {
        y: "0",
        stagger: 1,
        opacity: 1,
        delay: 0.5,
        duration: 1.5,
        scrollTrigger: {
          trigger: el,
          toggleActions: "restart none none none",
        },
      }
    ); */

    elements(".fade").forEach((item) =>
      gsap.fromTo(
        item,
        { autoAlpha: 0, y: "+=300" },
        {
          y: "0",
          stagger: 0.25,
          autoAlpha: 1,
          duration: 1.3,
          scrollTrigger: {
            trigger: img,
            toggleActions: "restart none none none",
          },
        }
      )
    );
  }, []);
  return (
    <section className="bg-gray-100 relative w-screen z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center flex-col py-24">
        <div ref={titleRef} className="text-center my-4 flex items-center justify-center flex-col w-3/4 lg:w-[40%] ">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-miedinger text-gray-900">
            other products
          </h2>
          <p className="mt-4 md:mt-8 mb-14 md:mb-24 text-gray-800 font-neomRegular text-base md:text-lg lg:text-2xl ">
            Enhance your experience with accessories designed for the Quest 2
          </p>
        </div>
        <div ref={imgRef} className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-7 gap-5 w-full">
          <div className="fade col-span-1 md:col-span-4 lg:col-span-4 bg-white rounded-3xl w-full h-96 md:h-[40rem] bg-[url('/images/item-1.jpg')] bg-contain bg-bottom md:bg-contain bg-no-repeat shadow-xl">
            <div className="flex flex-col justify-between h-full p-8">
              <p className="font-neomMedium text-sm md:text-base text-gray-900 md:w-32 bg-gray-100 md:bg-transparent p-1 rounded-full w-full text-center md:text-start">
                Quest 2 Carrying case
              </p>
              <div className="flex justify-between items-center bg-gray-100 md:bg-transparent p-1 rounded-full">
                <span className="text-sm md:text-base text-gray-900 font-neomRegular">
                  $49 USD
                </span>
                <div className="flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-full border border-blue-700 bg-blue-700 text-white hover:bg-white hover:text-blue-700 transition-colors cursor-pointer">
                  <BsCart className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
          <div className="fade col-span-1 md:col-span-4 lg:col-span-3 bg-white rounded-3xl w-full h-96 md:h-full bg-[url('/images/item-2.png')] bg-contain bg-bottom md:bg-auto bg-no-repeat shadow-xl">
            <div className="flex flex-col justify-between h-full p-8">
              <p className="font-neomMedium text-sm md:text-base text-gray-900 md:w-32 bg-gray-100 md:bg-transparent p-1 rounded-full w-full text-center md:text-start">
                Logitech G333 VR Gaming Earphones for Quest 2
              </p>
              <div className="flex justify-between items-center bg-gray-100 md:bg-transparent p-1 rounded-full">
                <span className="text-base text-gray-900 font-neomRegular">
                  $50 USD
                </span>
                <div className="flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-full border border-blue-700 bg-blue-700 text-white hover:bg-white hover:text-blue-700 transition-colors cursor-pointer">
                  <BsCart className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
          <div className="fade col-span-1 md:col-span-4 lg:col-span-3 bg-white rounded-3xl w-full h-96 md:h-[40rem] bg-[url('/images/item-3.png')] bg-contain bg-bottom md:bg-auto bg-no-repeat shadow-xl">
            <div className="flex flex-col justify-between h-full p-8">
              <p className="font-neomMedium text-sm md:text-base text-gray-900 md:w-32 bg-gray-100 md:bg-transparent p-1 rounded-full w-full text-center md:text-start">
                Oculus Link Cable
              </p>
              <div className="flex justify-between items-center bg-gray-100 md:bg-transparent p-1 rounded-full">
                <span className="text-base text-gray-900 font-neomRegular">
                  $79 USD
                </span>
                <div className="flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-full border border-blue-700 bg-blue-700 text-white hover:bg-white hover:text-blue-700 transition-colors cursor-pointer">
                  <BsCart className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
          <div className="fade col-span-1 md:col-span-4 lg:col-span-4 bg-white rounded-3xl w-full h-96 md:h-full bg-[url('/images/item-4.png')] bg-contain bg-center md:bg-contain lg:bg-auto bg-no-repeat shadow-xl">
            <div className="flex flex-col justify-between h-full p-8">
              <p className="font-neomMedium text-sm md:text-base text-gray-900 md:w-40 bg-gray-100 md:bg-transparent p-1 rounded-full w-full text-center md:text-start">
                Logitech G PRO Gaming Headset for Quest 2
              </p>
              <div className="flex justify-between items-center bg-gray-100 md:bg-transparent p-1 rounded-full">
                <span className="text-base text-gray-900 font-neomRegular">
                  $100 USD
                </span>
                <div className="flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-full border border-blue-700 bg-blue-700 text-white hover:bg-white hover:text-blue-700 transition-colors cursor-pointer">
                  <BsCart className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="font-neomRegular inline-block rounded-full border border-blue-600 bg-blue-600 px-6 py-2 lg:px-12 lg:py-3 mt-8 text-sm lg:text-base text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 transition-colors"
        >
          SEE ALL
        </button>
      </div>
    </section>
  );
};
export default Products;
