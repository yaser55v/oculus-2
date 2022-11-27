import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Oculus from "./Oculus";
const Hero = () => {
  const lineH1 = useRef(null);
  useEffect(() => {
    const line1 = lineH1.current;
    /* const line2 = lineP.current; */
    const tl = gsap.timeline({ defaults: { ease: "sine.inOut" } });
    tl.fromTo(
      line1,
      { opacity: 0, filter: "blur(30px)" },
      {
        filter: "blur(0px)",
        delay: 0.3,
        opacity: 1,
        duration: 1,
      }
    );
  }, []);
  return (
    <>
      <div id="hero" className="bg-transparent">
        <div className="mx-auto h-[calc(100vh-64px)] max-w-screen-xl px-8 sm:px-6 lg:px-8 my-4 z-20 relative">
          <div ref={lineH1} className="text-center">
            <h2 className="text-xl lg:text-3xl font-semibold text-gray-900 font-miedinger">
              Oculus
            </h2>
            <p className="text-4xl lg:text-7xl font-semibold text-gray-900 font-miedinger my-4">
              Quest 2
            </p>
            <p className="mt-8  text-base lg:text-xl text-gray-900 font-neomRegular">
              FROM $299 USD
            </p>
            <button
              type="button"
              className="font-neomRegular inline-block rounded-full border border-blue-600 bg-blue-600 px-6 py-2 lg:px-12 lg:py-3 mt-8 text-sm lg:text-base text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 transition-colors"
            >
              BUY NOW
            </button>
          </div>
          {/*  <Oculus /> */}
        </div>
      </div>
    </>
  );
};
export default Hero;

/* const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const HeroText = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  padding: 4rem 0;
  line-height: 58px;
  font-weight: bold;
  font-family: "MiedingerW01-Bold";
  span {
    font-size: 26px;
  }
`; */
