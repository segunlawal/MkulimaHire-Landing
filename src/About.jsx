import { FaQuoteLeft } from "react-icons/fa";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
const About = () => {
  const aboutUs = [
    { name: "Boniface Mgboho", title: "Backend Developer" },
    { name: "Segun Lawal", title: "Frontend Developer" },
  ];

  return (
    <div className="py-5" id="about">
      <p className="text-center sm:text-2xl text-lg text-[#74c116] font-semibold">
        Our Story
      </p>
      <div className="flex justify-center gap-x-1 items-center sm:w-[60%] w-[90%] mx-auto">
        <FaQuoteLeft className="text-9xl" />
        <p className="text-center ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, sed harum veniam quia a aliquam iste minima autem
          perspiciatis recusandae itaque dignissimos numquam iure, architecto
          incidunt nulla qui maxime voluptates.
        </p>
      </div>

      <p className="text-center pb-5">
        A link to the repository for this project
      </p>

      <div className="sm:flex justify-center sm:gap-x-20 lg:gap-x-40 gap-x-10">
        {aboutUs.map((person) => (
          <div
            key={person.name}
            className="bg-[#f3f3f2] p-10 sm:mx-0 mx-20 sm:mb-0 mb-5"
          >
            <div className="w-40 h-40 rounded-full mx-auto bg-[#74c116] bg-opacity-70"></div>
            <p className="text-center font-semibold text-2xl">{person.name}</p>
            <p className="text-center">{person.title}</p>
            <div className="flex gap-x-4 justify-center mt-3">
              <a
                href="/"
                target="__blank"
                className="bg-[#74c116] rounded-full sm:p-3 p-2"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="/"
                target="__blank"
                className="bg-[#74c116] rounded-full sm:p-3 p-2"
              >
                <AiFillGithub />
              </a>
              <a
                href="/"
                target="__blank"
                className="bg-[#74c116] rounded-full sm:p-3 p-2"
              >
                <AiFillTwitterCircle />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
