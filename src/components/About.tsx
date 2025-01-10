import Image1 from "../images/image1.jpg"
import Image2 from "../images/image2.jpg"

const teamMembers = [
  {
    name: "Gideon Lemiso",
    role: "Full-Stack developer/Mobile app develpoer",
    image: {Image1}
    // image: "https://1drv.ms/i/c/69e420f736ee1cfb/ESBr7STmcNBHkyQeV2IslMABaOwJfaCA3YTVKWG3Zz-cqw?e=r237H9",
  },
  {
    name: "Collins Lekakeny",
    role: "Junior Backend Developer/Full-Stack Developer",
    image: {Image2}
    // image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10" />
      <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're a team of passionate creators, innovators, and problem solvers dedicated to delivering exceptional digital solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;