import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className=" w-[90%] max-w-7xl flex flex-col justify-between md:items-centerlg: max-auto h-[80vh] lg:flex-row-reverse px-4 sm:px-6 md:px-8 xl:px-4 gap-20 lg:gap-0 mt-2">
        {/*punch line */}
        <div className="w-[429px] h-[343.5px] flex flex-col gap-5">
          <h2 className="text-[23px] font-sb  text-[solid black]  ml-8">
            WELCOME TO MY SALON
          </h2>
          <h1 className="text-[30px] font-bold text-[solid black] ml-8">
            Salons where working beauty from the inside out.
          </h1>

          <p className=" text-[1.15rem] font-medium text-[solid black] ml-3">
            At My Salon,we believe in the power of beauty to transform and
            uplift.Our expert team is dedicated to offering personalized
            services that enhance your natural glow,using only premium products
            and techniques.we ensure every visit is a relaxing and rejuvenating
            experience. Our mission is to make you feel confident, pampered, and
            ready to shine
          </p>
          <button
            className="rounded-full w-[200px] h-[60.21px] bg-fuchsia-600 hover:bg-violet-600 p-3 
                font-bold text-[20px] ml-12"
          >
            Book Today
          </button>
        </div>
        {/*Image*/}
        <Image
          className=""
          src={"/about -pic.jpg"}
          alt="products"
          height={800}
          width={513}
        />
      </div>
      <div>
        <h1 className="text-center font-bold text-[2rem] pb-6 mt-4 bg-gradient-to-r from-violet-500 to-fuchsia-500">
          Our clients say things like
        </h1>
      </div>
      <main className="grid grid-cols-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 h-[18rem]">
        <div className=" h-[15rem] w-[20rem] gap-px p-[0.70rem] border-[0.25rem] text-lg ml-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minus
            porro voluptates, perferendis laudantium, incidunt impedit quia sed
            voluptatum est natus doloribus possimus! Ipsa beatae dolor quos
            distinctio at tenetur. <br />
          </p>
          <p className="text-center">MIDHAT FATIMA</p>
        </div>
        <div className="h-[15rem] w-[20rem] gap-px p-[0.70rem]  border-[0.25rem] text-lg ml-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minus
            porro voluptates, perferendis laudantium, incidunt impedit quia sed
            voluptatum est natus doloribus possimus! Ipsa beatae dolor quos
            distinctio at tenetur.
            <br />
          </p>
          <p className="text-center">OMEMA Naz</p>
        </div>
        <div className="h-[15rem] w-[20rem] gap-px p-[0.70rem] border-[0.25rem] text-lg ml-10">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minus
            porro voluptates, perferendis laudantium, incidunt impedit quia sed
            voluptatum est natus doloribus possimus! Ipsa beatae dolor quos
            distinctio at tenetur.
            <br />
          </p>
          <p className="text-center">SADIA BASHEER</p>
        </div>
      </main>
    </div>
  );
};

export default About;
