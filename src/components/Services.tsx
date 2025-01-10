import { Briefcase, Megaphone, Computer, Target } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Strategic Consulting",
    description: "Expert guidance to help your business grow and succeed in today's competitive market."
  },
  {
    icon: Computer,
    title: "Web Development",
    description: "Custom websites and applications built with cutting-edge technologies and best practices."
  },
  {
    icon: Target,
    title: "Brand Strategy",
    description: "Comprehensive brand development to help you stand out in your industry."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50 -z-10" />
      <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -top-48 -right-48 animate-pulse" />
      <div className="absolute w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -bottom-48 -left-48 animate-pulse" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of services to help your business thrive in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;