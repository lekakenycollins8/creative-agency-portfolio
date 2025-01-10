import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { Icon: Facebook, href: "https://facebook.com" },
    { Icon: Instagram, href: "https://instagram.com" },
    { Icon: Linkedin, href: "https://linkedin.com" },
    { Icon: Twitter, href: "https://twitter.com" },
    { Icon: Youtube, href: "https://youtube.com" }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10" />
      <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
      <div className="absolute w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Contact us today and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
            <div className="flex items-start space-x-4 group hover:bg-white/50 p-4 rounded-xl transition-all duration-300">
              <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">Email Us</h3>
                <p className="text-gray-600">lemisogideon@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group hover:bg-white/50 p-4 rounded-xl transition-all duration-300">
              <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">Call Us</h3>
                <p className="text-gray-600">+254 745 113 186 or +254 702 274 352</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group hover:bg-white/50 p-4 rounded-xl transition-all duration-300">
              <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">Visit Us</h3>
                <p className="text-gray-600">Pena Towers Kitengela, Nairobi, Kenya</p>
              </div>
            </div>

            <div className="pt-8 border-t">
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <social.Icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className="space-y-6 bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white/50 backdrop-blur-sm transition-all duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white/50 backdrop-blur-sm transition-all duration-300"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white/50 backdrop-blur-sm transition-all duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;