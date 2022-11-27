import { BsGear, BsPlayCircle, BsChevronRight } from "react-icons/bs";
import { GrGamepad } from "react-icons/gr";

const features = [
  {
    name: "Easy Setup",
    icon: BsGear,
  },
  {
    name: "Blazing Performance",
    icon: BsPlayCircle,
  },
  {
    name: "Games, Fitness And More",
    icon: GrGamepad,
  },
];
const Feature = () => {
  return (
    <>
      <section
        id="feature"
        className="bg-gray-100 relative w-screen h-screen"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-20 relative pt-16">
          <div className="text-start md:text-center my-4 flex items-start md:items-center justify-center flex-col mix-blend-plus-lighter relative">
            <h2 className="text-lg md:text-2xl lg:text-3xl font-miedinger bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Unlike anything <br /> you've ever seen.
            </h2>
            <p className="mt-4 text-sky-900 font-neomRegular text-sm md:text-lg lg:text-2xl ">
              A blazing fast processor <br /> and next-generation graphics.
            </p>
            <p className="mt-4 font-neomRegular text-sm md:text-lg lg:text-2xl text-blue-700 cursor-pointer hover:underline flex items-center justify-center ">
              Learn More <BsChevronRight className="md:w-5 md:h-5 ml-2 w-3 h-3" />
            </p>
          </div>

          <div className="mt-10 mix-blend-plus-lighter">
            <dl className="space-y-10 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 md:space-y-0 lg:flex-none flex flex-col items-start">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt className="items-center justify-center flex">
                    <div className="flex h-8 w-8 lg:h-12 lg:w-12 items-center justify-center rounded-full border border-blue-700">
                      <feature.icon
                        className="h-4 w-4 text-gray-900"
                        aria-hidden="true"
                      />
                    </div>
                    <p className=" ml-1 lg:ml-4 font-neomRegular text-sm lg:text-xl  text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
};
export default Feature;
