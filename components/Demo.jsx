import { useEffect, useRef } from "react";
import Image from "next/image";
import { BsChevronRight } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);
const Demo = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);
  let elements = gsap.utils.selector(imgRef);
  useEffect(() => {
    const el = titleRef.current;
    const text = textRef.current;
    const img = imgRef.current;
    gsap.fromTo(
      el,
      { x: "-300", opacity: 0 },
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
    gsap.fromTo(
      text,
      { x: "-300", opacity: 0 },
      {
        x: "0",
        stagger: 1,
        opacity: 1,
        delay: 0.5,
        duration: 1.5,
        scrollTrigger: {
          trigger: el,
          toggleActions: "restart none none none",
        },
      }
    );

    elements("img").forEach((item) =>
      gsap.fromTo(
        item,
        { autoAlpha: 0, x: "+=300" },
        {
          x: "0",
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
    <>
      <section className="grid place-items-center min-h-screen py-12 relative bg-white z-20 overflow-hidden">
        <div
          ref={imgRef}
          className="p-4 max-w-7xl grid gap-4 xs:grid-cols-2 xs:p-8 md:grid-cols-4 lg:gap-6"
        >
          <h1
            ref={titleRef}
            className="text-lg md:text-2xl lg:text-5xl font-miedinger font-extrabold xs:col-span-2 xs:grid xs:gap-2 xs:grid-cols-2 md:col-span-3 md:grid-cols-2"
          >
            <span className="col-span-2 lg:col-span-1">
              Create, Play, Explore
            </span>
          </h1>
          <p
            ref={textRef}
            className="text-sm lg:text-lg xs:row-start-2 font-neomRegular xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-12 "
          >
            Conquer Leaderboards, crush workouts, create with friends and more.
            Get lost in a growing library of VR classics and all-new
            experiences.
          </p>

          <Image
            src="/images/2.jpg"
            alt=""
            width={700}
            height={700}
            priority
            className="xs:h-auto xs:square rounded-md object-cover shadow-xl h-56"
          />
          <Image
            src="/images/1.jpg"
            alt=""
            width={700}
            height={700}
            priority
            className="xs:h-auto xs:square rounded-md object-cover shadow-xl h-56"
          />
          <Image
            src="/images/3.jpg"
            alt=""
            width={700}
            height={700}
            priority
            className="xs:h-auto xs:square rounded-md object-cover shadow-x h-56"
          />
          <Image
            src="/images/4.jpg"
            alt=""
            width={700}
            height={700}
            priority
            className="xs:h-auto xs:square md:col-start-2 rounded-md object-cover shadow-xl h-56"
          />
          <Image
            src="/images/5.jpg"
            alt=""
            width={700}
            height={700}
            priority
            className="xs:h-auto xs:square rounded-md object-cover shadow-xl h-56"
          />
          <Image
            src="/images/6.jpg"
            alt=""
            width={700}
            height={700}
            priority
            className="xs:h-auto xs:square rounded-md object-cover shadow-xl	h-56"
          />
          <Image
            src="/images/7.jpg"
            alt=""
            width={700}
            height={700}
            priority
            className="xs:h-auto xs:square rounded-md object-cover shadow-xl	h-56"
          />
          <Image
            src="/images/8.jpg"
            alt=""
            width={700}
            height={700}
            priority
            className="xs:h-auto xs:square rounded-md object-cover shadow-xl	h-56"
          />
          <p className="self-center  md:col-span-2 md:text-center md:px-4 mt-4 font-neomRegular text-lg lg:text-2xl text-blue-700 cursor-pointer hover:underline flex items-center justify-center">
            Discover all Titles{" "}
            <BsChevronRight className="w-4 h-4 ml-2 lg:w-5 lg:h-5" />
          </p>
        </div>
      </section>
    </>
  );
};
export default Demo;
