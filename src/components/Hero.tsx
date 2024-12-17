import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse top-0 -left-48" />
        <div className="absolute w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl animate-pulse bottom-0 -right-48" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-up">
            We Create Digital Products That Make Life Better
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-up [animation-delay:200ms] leading-relaxed">
            Award-winning agency crafting innovative digital experiences that help businesses grow and succeed in the modern world.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-up [animation-delay:400ms] group"
          >
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;