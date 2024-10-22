import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-[520px] mx-auto bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className=" w-full max-w-7xl flex flex-col justify-between md:items-centerlg: max-auto h-full lg:flex-row px-4 sm:px-6 md:px-8 xl:px-4 gap-20 lg:gap-0 mt-2">
        {/*punch line */}
        <div className="w-[429px] h-[343.5px] flex flex-col gap-5">
          <h1 className="text-[50px] font-bold text-[solid black] leading- ml-8">
            <span className="text-[fuchsia] text-[6rem] hover:text-red-700 cursor-pointer">
              Women's
            </span>{" "}
            Salon & Spa Services
          </h1>
          <p className=" text-[20px] font-medium text-[solid black] ml-7">
            We are image crafters in the relm of beauty and wellness. We look
            forward to serving you safely, and with care!
          </p>
          <button
            className="rounded-full w-[200px] h-[60.21px] bg-fuchsia-600 hover:bg-violet-600 p-3 
                font-bold text-[20px] ml-12"
          >
            Click for booking
          </button>
        </div>
        {/*Image*/}
        <Image
          className="rounded-full mr-[8rem]"
          src={"/beauty-salon1.jpg"}
          alt="model pic"
          height={514}
          width={513}
        />
      </div>
    </section>
  );
};

export default Hero;
