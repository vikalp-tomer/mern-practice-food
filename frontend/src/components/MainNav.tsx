import { Button } from "./ui/button";

const MainNav = () => {
  return (
    <Button
      variant={"ghost"}
      className="hover:text-orange-500 hover:bg-white font-bold tracking-tight"
    >
      Log In
    </Button>
  );
};

export default MainNav;
