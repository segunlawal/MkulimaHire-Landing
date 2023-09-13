import farm_one from "./assets/farm-one.jpg";

const Intro = () => {
  return (
    <div
      className="relative py-20 bg-cover bg-center text-[#f2f2f2]"
      style={{
        backgroundImage: `url(${farm_one})`,
      }}
    >
      <div className="flex gap-x-2 justify-center relative z-20">
        <hr className="border-2 border-[#f2f2f2] w-1/3 my-auto" />
        <p className="text-2xl whitespace-nowrap">WELCOME TO</p>
        <hr className="border-2 border-[#f2f2f2] w-1/3 my-auto z-20" />
      </div>
      <p className="text-center font-bold text-5xl text-[#f2f2f2] z-20 relative">
        MKULIMA HIRE
      </p>
      <p className="text-center text-base text-[#f2f2f2] w-[60%] mx-auto z-20 relative">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsum
        iste provident exercitationem ut vel eum saepe dolores eveniet facilis,
        animi non ducimus? Voluptates cumque nulla cum commodi, enim eaque.
      </p>

      <div className="flex justify-center relative z-20">
        <button
          type="submit"
          className="bg-[#74c116] text-[#f2f2f2] px-10 py-2 sm:w-[30rem] w-80 mx-auto rounded-lg mt-5"
        >
          JOIN THE COMMUNITY
        </button>
      </div>

      <div className="absolute w-full h-full bg-[#000000] bg-opacity-70 top-0"></div>
    </div>
  );
};

export default Intro;
