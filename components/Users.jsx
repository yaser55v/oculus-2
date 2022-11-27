import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
const Users = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  /*   const videoRef3 = useRef(null);
  const videoRef4 = useRef(null); */

  useEffect(() => {
    const Elem = sectionRef.current;
    const video1Elem = videoRef1.current;
    const video2Elem = videoRef2.current;
    /*   const video3Elem = videoRef3.current;
    const video4Elem = videoRef4.current; */
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
      .to(video2Elem, { scale: 0.4 }, "key1");
    /* .to(video3Elem, { scale: 0.6 }, "key1")
      .to(video4Elem, { scale: 0.6 }, "key1"); */
  }, []);
  return (
    <>
      <section
        ref={sectionRef}
        className="bg-gray-50 py-12 relative w-screen h-screen z-30 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="w-full h-full relative">
            <video
              ref={videoRef1}
              autoPlay
              muted
              loop
              className="w-full h-screen absolute -top-8 -left-20 md:-top-16 md:-left-32 lg:-top-36 lg:-left-52 object-cover object-center bg-origin-content z-[2]  rounded-br-[10rem] rounded-tl-[10rem]"
            >
              <source src="/videos/woman.mp4" type="video/mp4" />
            </video>
            {/* <div
              ref={videoRef3}
              className="w-full h-screen absolute top-8 left-[25%] md:top-8 md:left-[35%] lg:top-0 lg:left-[40%] z-[2]"
            >
              <div className="w-60 h-64 ml-20 lg:w-80 lg:h-64 md:ml-14">
                <h2 className="font-miedinger text-lg md:text-xl lg:text-2xl mb-8">
                  3D <br /> CINEMATIC SOUND
                </h2>
                <p className="font-neomRegular text-base md:text-lg lg:text-2xl">
                  Stay focused on the fight or lost in meditation with built-in
                  speakers that deliver cinematic 3D positional audio.
                </p>
              </div>
            </div> */}
          </div>
          <div className="w-full h-full relative">
            <video
              ref={videoRef2}
              autoPlay
              muted
              loop
              className="w-full h-screen absolute top-32 left-20 md:top-40 md:left-32 lg:top-36 lg:left-52 object-cover object-top bg-origin-content z-[1] rounded-bl-[10rem] rounded-tr-[10rem]"
            >
              <source src="/videos/boy.mp4" type="video/mp4" />
            </video>
            {/* <div
              ref={videoRef4}
              className="w-full h-screen absolute top-[19rem] -left-[5.5rem] md:top-[21rem] md:-left-20 lg:top-[27rem] lg:-left-16 z-[1]"
            >
              <div className="w-60 h-64 ml-20 md:w-80 md:h-64 md:ml-14">
                <h2 className="font-miedinger text-lg md:text-xl lg:text-2xl mb-8">
                  HEADSET CASTING
                </h2>
                <p className="font-neomRegular text-base md:text-lg lg:text-2xl">
                  Bring friends into battle or to the top of an active volcano.
                  Cast directly on a compatible TV or on the Oculus app.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default Users;
