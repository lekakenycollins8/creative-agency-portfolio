import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-up">
            We Create Digital Products That Make Life Better
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-up">
            Award-winning agency crafting innovative digital experiences that help businesses grow and succeed in the modern world.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg hover:bg-accent transition-colors animate-fade-up"
          >
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;