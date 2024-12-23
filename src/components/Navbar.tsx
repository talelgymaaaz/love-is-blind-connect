import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-love-500" />
            <span className="text-xl font-semibold text-gray-900">LoveIsBlind</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it Works</a>
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <Button className="bg-love-500 hover:bg-love-600">Get Started</Button>
          </div>
          <Button className="md:hidden bg-love-500 hover:bg-love-600">Menu</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;