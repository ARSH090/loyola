import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-campus.jpg";

const Hero = () => {
  const stats = [
    { icon: Award, label: "Years of Excellence", value: "75+" },
    { icon: Users, label: "Students", value: "3000+" },
    { icon: BookOpen, label: "Courses", value: "50+" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Loyola School Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Welcome to<br />
              <span className="text-accent">Loyola School</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-serif italic">
              In Caritate et Justitia
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Nurturing minds and building character since 1949. Join India's premier ICSE/ISC institution 
              committed to academic excellence and holistic development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent-glow">
                Apply for Admission
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
                Explore Campus
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-accent mb-2 mx-auto" />
                <div className="font-heading font-bold text-3xl text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
