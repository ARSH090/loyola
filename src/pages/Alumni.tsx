import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Briefcase, GraduationCap, Heart, Globe, Award } from "lucide-react";

const Alumni = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Alumni Worldwide" },
    { icon: Briefcase, value: "85%", label: "Employment Rate" },
    { icon: Globe, value: "50+", label: "Countries" },
    { icon: Award, value: "200+", label: "Achievers" },
  ];

  const notableAlumni = [
    {
      name: "Dr. Rajesh Kumar",
      batch: "1995",
      achievement: "Leading Cardiologist, AIIMS",
      field: "Medicine",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Priya Sharma",
      batch: "2008",
      achievement: "CEO, Tech Innovations Ltd",
      field: "Technology",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Arjun Mehta",
      batch: "2001",
      achievement: "International Cricket Player",
      field: "Sports",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Meera Desai",
      batch: "2010",
      achievement: "Renowned Classical Dancer",
      field: "Arts",
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
        <motion.div
          animate={{
            x: [-100, 100, -100],
            y: [-100, 100, -100],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                <GraduationCap className="w-16 h-16 text-white" />
              </div>
            </motion.div>
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6">
              Loyola Alumni Network
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Once a Loyolan, Always a Loyolan - Join our global family
            </p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                Register as Alumni
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <stat.icon className="w-10 h-10 text-accent mx-auto mb-3" />
                  </motion.div>
                  <div className="font-heading font-bold text-3xl text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Alumni */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
              Distinguished Alumni
            </h2>
            <p className="text-lg text-muted-foreground">
              Inspiring success stories from our alumni family
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {notableAlumni.map((alumni, index) => (
              <motion.div
                key={alumni.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -15 }}
              >
                <Card className="group h-full p-6 hover:shadow-elegant transition-all duration-500 border-2 hover:border-accent/50 overflow-hidden relative">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${alumni.color} opacity-0 group-hover:opacity-10`}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${alumni.color} flex items-center justify-center`}
                    >
                      <GraduationCap className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="font-heading font-semibold text-xl text-center mb-1 text-foreground group-hover:text-primary transition-smooth">
                      {alumni.name}
                    </h3>
                    <p className="text-sm text-muted-foreground text-center mb-3">
                      Batch of {alumni.batch}
                    </p>
                    <div className="text-center">
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs rounded-full mb-2">
                        {alumni.field}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground text-center">
                      {alumni.achievement}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
              Alumni Benefits
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay connected and give back to your alma mater
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Networking Events",
                description: "Connect with fellow alumni through exclusive events and reunions",
              },
              {
                icon: Briefcase,
                title: "Career Support",
                description: "Access job opportunities and mentorship programs",
              },
              {
                icon: GraduationCap,
                title: "Give Back",
                description: "Contribute to scholarships and school development",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="group h-full p-8 hover:shadow-elegant transition-all duration-300 text-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block p-4 bg-accent/20 rounded-full mb-6"
                  >
                    <benefit.icon className="w-8 h-8 text-accent" />
                  </motion.div>
                  <h3 className="font-heading font-semibold text-xl mb-3 text-foreground group-hover:text-primary transition-smooth">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;
