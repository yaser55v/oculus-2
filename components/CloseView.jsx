import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
const Users = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);

  useEffect(() => {
    const Elem = sectionRef.current;
    const video1Elem = videoRef1.current;
    const video2Elem = videoRef2.current;
    const video3Elem = videoRef3.current;
    const video4Elem = videoRef4.current;
    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: `bottom bottom`,
        scrub: 2,
        pin: true,
        pinSpacing: true,
      },
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: "top-=200 top",
          end: `bottom-=100 bottom`,
          scrub: 2,
        },
      })
      .to(video1Elem, { scale: 0.4 }, "key1")
      .to(video2Elem, { scale: 0.4 }, "key1")
      .to(video3Elem, { scale: 0.6 }, "key1")
      .to(video4Elem, { scale: 0.6 }, "key1");
  }, []);
  return (
    <>
      <section
        ref={sectionRef}
        className="bg-gray-50 py-12 relative w-screen h-screen z-30 "
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div ref={videoRef3} className="grid grid-cols-2 grid-rows-2">
            <div className="w-1/2 h-[20rem]">
              <video
                autoPlay
                muted
                loop
                className="w-full h-full object-cover object-center bg-origin-content z-[2]"
              >
                <source src="/videos/woman.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="w-1/2 h-[20rem]">
              <div className="z-[2]">
                <div className="w-full h-full">
                  <h2 className="font-miedinger text-lg md:text-xl lg:text-2xl mb-8">
                    3D <br /> CINEMATIC SOUND
                  </h2>
                  <p className="font-neomRegular text-base md:text-lg lg:text-2xl">
                    Stay focused on the fight or lost in meditation with
                    built-in speakers that deliver cinematic 3D positional
                    audio.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2 h-[20rem]">
              <div className=" z-[2]">
                <div className="w-full h-full">
                  <h2 className="font-miedinger text-lg md:text-xl lg:text-2xl mb-8">
                    3D <br /> CINEMATIC SOUND
                  </h2>
                  <p className="font-neomRegular text-base md:text-lg lg:text-2xl">
                    Stay focused on the fight or lost in meditation with
                    built-in speakers that deliver cinematic 3D positional
                    audio.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2 h-[20rem]">
              <video
                autoPlay
                muted
                loop
                className="w-full h-full object-cover object-center bg-origin-content z-[2]"
              >
                <source src="/videos/woman.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Users;
