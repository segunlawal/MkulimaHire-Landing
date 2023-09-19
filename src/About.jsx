import { FaQuoteLeft } from "react-icons/fa";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import bonii from "./assets/bonii.jpeg";
import segun from "./assets/segun.jpg";

const About = () => {
  const aboutUs = [
    {
      name: "Boniface Mbogho",
      title: "Backend Developer",
      twitter: "https://twitter.com/Cabon_Bonii_",
      linkedin: "https://linkedin.com/in/boniface-mbogho-66242a243",
      github: "https://github.com/CABON-TECH",
      profilePic: bonii,
    },
    {
      name: "Segun Lawal",
      title: "Frontend Developer",
      twitter: "https://twitter.com/Segun__Lawal",
      linkedin: "https://www.linkedin.com/in/olusegun-lawal-3b6488242/",
      github: "https://github.com/segunlawal",
      profilePic: segun,
    },
  ];

  return (
    <div className="py-5" id="about">
      <p className="text-center sm:text-2xl text-lg text-[#74c116] font-semibold">
        About This Project
      </p>
      <div className="flex justify-center gap-x-1 items-center sm:w-[60%] w-[90%] mx-auto pt-3 pb-7">
        <FaQuoteLeft className="text-4xl" />
        <p className="text-center ">
          This is a portfolio project for Holberton School. It aims to solve the
          problem of connecting worker and farmers. Developed and maintained by
          a team of two developers.
        </p>
      </div>

      <Link
        to="https://github.com/CABON-TECH/Mkulima-Hire"
        className="text-center flex justify-center text-[#74c116] pb-5"
        target="__blank"
      >
        A link to the repository for this project
      </Link>

      <div className="sm:flex justify-center sm:gap-x-20 lg:gap-x-40 gap-x-10">
        {aboutUs.map((person) => (
          <div
            key={person.name}
            className="bg-[#f3f3f2] p-10 sm:mx-0 mx-20 sm:mb-0 mb-5"
          >
            <div className=" mx-auto bg-opacity-70">
              <img
                src={person.profilePic}
                alt="dev"
                className="w-40 h-40 object-cover mx-auto rounded-full"
              />
            </div>
            <p className="text-center font-semibold text-2xl pt-2">
              {person.name}
            </p>
            <p className="text-center">{person.title}</p>
            <div className="flex gap-x-4 justify-center mt-3">
              <a
                href={person.linkedin}
                target="__blank"
                className="bg-[#74c116] rounded-full sm:p-3 p-2"
              >
                <AiFillLinkedin />
              </a>
              <a
                href={person.github}
                target="__blank"
                className="bg-[#74c116] rounded-full sm:p-3 p-2"
              >
                <AiFillGithub />
              </a>
              <a
                href={person.twitter}
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
