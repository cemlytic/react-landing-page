import { Menu, X } from "lucide-react";
import { useState } from "react";
import NavLink from "../common/NavLink";
import Button from "../UI/Button";
import { navLinks } from "../../constants";

const Navbar = () => {
  const [openMobile, setOpenMobile] = useState(false);

  const toggleNavbar = () => {
    setOpenMobile(!openMobile);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 font-poppins">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="uppercase text-lg">
              Logo
            </a>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navLinks.map((navLink, index) => (
              <NavLink key={index} href={navLink.href} label={navLink.label} />
            ))}
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-12">
            <Button href="#" className="border py-2 px-3">
              Sign In
            </Button>
            <Button
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3"
            >
              Create an account
            </Button>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {openMobile ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {openMobile && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navLinks.map((navLink, index) => (
                <NavLink
                  key={index}
                  href={navLink.href}
                  label={navLink.label}
                  className="py-4"
                />
              ))}
            </ul>
            <div className="flex space-x-6">
              <Button href="#" className="border py-2 px-3">
                Sign In
              </Button>
              <Button
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3"
              >
                Create an account
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
