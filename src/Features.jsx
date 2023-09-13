import worker from "./assets/worker.png";
import auth from "./assets/auth.png";
import farmer from "./assets/farmer.png";

const Features = () => {
  const aboutArr = [
    {
      title: "Create an account as a farmer or a worker",
      pic: auth,
    },
    {
      title: "Create a job posting as a farmer",
      pic: farmer,
    },
    {
      title: "Apply for jobs as a worker",
      pic: worker,
    },
  ];

  return (
    <div className="py-5 bg-[#f3f3f2] text-center" id="features">
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
            <div key={item.title} className="lg:mb-0 mb-5">
              <p className="text-left">{item.title}</p>
              <hr className="border-[#74c116] border-[1.5px] my-2 lg:w-full w-72" />
              <img
                src={item.pic}
                alt="feature"
                className="w-[305px] lg:mx-auto mt-5 shadow-lg rounded-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
