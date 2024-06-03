import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        to={"/user-profile"}
        className="hover:text-orange-500 font-bold tracking-tight"
      >
        User Profile
      </Link>
      <Button className="" onClick={() => logout()}>
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;
