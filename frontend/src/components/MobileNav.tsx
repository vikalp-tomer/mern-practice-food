import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobileNav = () => {
  return (
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
  );
};

export default MobileNav;
