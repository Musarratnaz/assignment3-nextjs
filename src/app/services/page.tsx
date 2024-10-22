import Image from "next/image";
import service1 from "../../../public/service1.png";
import service2 from "../../../public/service2.jpg";
import eyebrow3 from "../../../public/eyebrow.jpg";
import service5 from "../../../public/service5.jpg";
import service6 from "../../../public/service6.jpg";
import service7 from "../../../public/service7.jpg";
const Services = () => {
  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-[2rem] pt-1 mt-4 bg-gradient-to-r from-violet-500 to-fuchsia-500">
          OUR SERVICES
        </h1>
      </div>
      <main className="grid grid-cols-3 gap-y-4 bg-gradient-to-r from-fuchsia-500 to-violet-500 ">
        <div className=" h-[22rem] w-[20rem] relative  p-[0.70rem] border-[0.25rem] text-lg ml-10">
          <Image
            className="absolute gap-px p-[0.70rem] inset-0 w-full h-full object-cover"
            src={service1}
            alt=" fasc"
          />
        </div>
        <div className="h-[22rem] w-[20rem] gap-px p-[0.70rem]  border-[0.25rem] text-lg ml-10">
          <Image
            className="gap-px p-[0.70rem] inset-0 w-full h-full object-cover"
            src={service2}
            alt=" fasc"
          />
        </div>
        <div className="h-[22rem] w-[20rem] gap-px p-[0.60rem] border-[0.25rem] text-lg ml-10">
          <Image
            className="gap-px p-[0.70rem] inset-0 w-full h-full object-cover"
            src={eyebrow3}
            alt=" fasc"
          />
        </div>
        <div className="h-[22rem] w-[20rem] gap-px p-[0.70rem] border-[0.25rem] text-lg ml-10">
          <Image
            className="gap-px p-[0.70rem] inset-0 w-full h-full object-cover"
            src={service5}
            alt=" fasc"
          />
        </div>
        <div className="h-[22rem] w-[20rem] gap-px p-[0.70rem] border-[0.25rem] text-lg ml-10">
          <Image
            className="gap-px p-[0.70rem] inset-0 w-full h-full object-cover"
            src={service6}
            alt=" fasc"
          />
        </div>
        <div className="h-[22rem] w-[20rem] gap-px p-[0.70rem] border-[0.25rem] text-lg ml-10">
          <Image
            className="gap-px p-[0.70rem] inset-0 w-full h-full object-cover"
            src={service7}
            alt=" fasc"
          />
        </div>
      </main>
    </div>
  );
};

export default Services;
