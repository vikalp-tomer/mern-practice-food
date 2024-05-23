import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="flex justify-between container mx-auto py-5 border-b-2 border-orange-500 items-center">
      <Link
        to={"/"}
        className="text-3xl font-bold tracking-tight text-orange-500"
      >
        Merneats.com
      </Link>
      <div className="hidden md:block">
        <MainNav />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
};

export default Header;
