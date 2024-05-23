import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";

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
        <Button
          variant={"ghost"}
          className="hover:text-orange-500 hover:bg-white font-bold tracking-tight"
        >
          Log In
        </Button>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu className="text-orange-500" />
          </SheetTrigger>
          <SheetContent className="space-y-3">
            <SheetTitle>
              <h1>Welcome to merneats.com</h1>
            </SheetTitle>
            <Separator />
            <SheetDescription className="flex">
              <Button
                variant={"ghost"}
                className="bg-orange-500 text-white flex-1 font-bold tracking-tight hover:bg-black hover:text-white"
              >
                Log In
              </Button>
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
