import { MessageSquare, Heart, Shield, Users } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Meaningful Conversations",
    description: "Start genuine conversations based on shared interests and values."
  },
  {
    icon: Heart,
    title: "Personality First",
    description: "Get to know people for who they are before seeing their photos."
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your privacy and security are our top priorities."
  },
  {
    icon: Users,
    title: "Quality Matches",
    description: "Connect with people who share your values and interests."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose <span className="text-love-500">LoveIsBlind</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-100 hover:border-love-200 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="h-10 w-10 text-love-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;