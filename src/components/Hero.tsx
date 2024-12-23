import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-love-50 to-white pt-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 animate-fade-up">
          <div className="flex justify-center">
            <Heart className="h-16 w-16 text-love-500 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Find Love Beyond <span className="text-love-500">Appearances</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with people who appreciate you for who you are, not just how you look.
            Build meaningful relationships based on personality and shared values.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-love-500 hover:bg-love-600 text-lg px-8 py-6">
              Start Your Journey
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;