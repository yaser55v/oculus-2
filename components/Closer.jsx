import { useEffect, useRef } from "react";
import gsap from "gsap";
import { BsChevronRight } from "react-icons/bs";
const Closer = () => {
  const clipBg = useRef(null);
  useEffect(() => {
    const ele = clipBg.current;

    gsap.fromTo(
      ele,
      {
        clipPath: "circle(15% at 77% 40%)",
      },
      {
        clipPath: "circle(75% at 50% 50%)",
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: ele,
          scrub: 3,
          start: "top+=200 center",
          end: "top center-=100",
        },
      }
    );
  }, []);

  return (
    <>
      <section className="bg-gray-900 overflow-hidden z-20 relative">
        <div
          ref={clipBg}
          className="h-screen flex items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  bg-[url('/images/ocu-1.png')] bg-[length:79%] bg-right bg-no-repeat"
        >
          <div className="text-left w-1/2">
            <h2 className="text-xl md:text-4xl lg:text-7xl font-miedinger font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-900">
              TAKE A CLOSER LOOK
            </h2>
            <p className="mt-6 font-neomRegular text-base md:text-xl lg:text-2xl text-gray-300 hover:text-gray-200 flex items-center justify-start cursor-pointer ">
              Quest 2 Details <BsChevronRight className="w-3 h-3 md:w-5 md:h-5 ml-2 " />
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Closer;
