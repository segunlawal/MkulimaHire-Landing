import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-[100] bg-[#ffffff] shadow-md">
      <p className="absolute top-6 left-5 sm:block hidden">Mkulima-Hire</p>
      <div className="flex justify-center gap-x-11 sm:gap-x-20 py-6">
        <Link to="/#intro">
          <button>Intro</button>
        </Link>
        <Link to="/#features">
          <button>Features</button>
        </Link>
        <Link to="/#about">
          <button>About</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
