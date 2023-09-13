const Navbar = () => {
  return (
    <div>
      <p className="absolute top-6 left-5 sm:block hidden">Mkulima-Hire</p>
      <div className="flex justify-center gap-x-11 sm:gap-x-20 py-6">
        <button>Intro</button>
        <button>Features</button>
        <button>About</button>
      </div>
    </div>
  );
};

export default Navbar;
