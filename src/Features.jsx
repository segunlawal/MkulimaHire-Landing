import farm_one from "./assets/farm-one.jpg";

const Features = () => {
  const aboutArr = [
    {
      title: "Create an account as a farmer or a worker",
      pic: farm_one,
    },
    {
      title: "Create a job posting as a farmer",
      pic: farm_one,
    },
    {
      title: "Apply for jobs as a worker",
      pic: farm_one,
    },
  ];

  return (
    <div className="py-5 bg-[#f3f3f2] text-center">
      <p className="text-center sm:text-2xl text-lg font-semibold">
        Discover & enjoy our{" "}
        <span className="text-[#74c116]">amazing features</span>
      </p>
      <p className="text-center text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsum
        iste provident exe
      </p>

      <div className="">
        <div className="lg:flex justify-center gap-x-12 mt-5 mx-auto w-fit">
          {aboutArr.map((item) => (
            <div key={item.title}>
              <p
                fontSize="1.2rem"
                fontWeight={500}
                className="whitespace-nowrap"
              >
                {item.title}
              </p>
              <hr className="border-[#74c116] border-[1.5px] my-2 lg:w-full w-72" />
              <img
                src={item.pic}
                alt="farm"
                className="w-[250px] lg:mx-auto mt-5"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
