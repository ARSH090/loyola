import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { BookOpen, Award, Users, Heart, Shield, Target } from "lucide-react";

const School = () => {
  const stats = [
    { icon: Award, value: "75+", label: "Years of Excellence" },
    { icon: Users, value: "3000+", label: "Students" },
    { icon: BookOpen, value: "50+", label: "Courses Offered" },
    { icon: Shield, value: "100%", label: "Safety Standards" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Caritate (In Charity)",
      description: "We foster love, compassion, and service to humanity in all our students.",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: Target,
      title: "Justitia (In Justice)",
      description: "We instill integrity, fairness, and respect for all in our community.",
      color: "from-blue-500 to-indigo-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary-dark to-primary-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6">
              About Loyola School
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-serif italic max-w-3xl mx-auto">
              In Caritate et Justitia - In Charity and Justice
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Established in 1949, Loyola School has been a beacon of excellence in education,
              shaping young minds for over seven decades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    className="mb-4"
                  >
                    <stat.icon className="w-12 h-12 text-accent mx-auto" />
                  </motion.div>
                  <div className="font-heading font-bold text-3xl text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The pillars that guide our mission and vision
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="group h-full p-8 hover:shadow-elegant transition-all duration-500 border-2 hover:border-accent/50 cursor-pointer overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-4 bg-gradient-to-br ${value.color} rounded-xl inline-block mb-6`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-heading font-semibold text-2xl mb-4 text-foreground group-hover:text-primary transition-smooth">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
                Our Legacy
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 md:p-12 hover:shadow-elegant transition-all duration-300">
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Founded in 1949 by the Society of Jesus, Loyola School Jamshedpur has stood as
                    a monument to quality education in Eastern India. Our institution was established
                    with the vision of creating responsible citizens who would contribute meaningfully
                    to society.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    Over the past 75 years, we have nurtured thousands of students who have gone on
                    to excel in various fields - from medicine and engineering to arts and sports.
                    Our alumni network spans the globe, yet they remain connected by the common thread
                    of Loyola values.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    Today, Loyola School continues to evolve, embracing modern educational practices
                    while staying true to our core values of charity and justice. We are proud to be
                    affiliated with the ICSE and ISC boards, offering comprehensive education from
                    nursery through grade XII.
                  </motion.p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden shadow-elegant">
              <div className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-full mx-auto mb-4 flex items-center justify-center"
                  >
                    <Users className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className="font-heading font-bold text-3xl text-primary mb-2">
                    Principal's Message
                  </h3>
                  <p className="text-muted-foreground">Leadership and Vision</p>
                </div>
                <div className="space-y-4 text-muted-foreground italic leading-relaxed">
                  <p>
                    "Welcome to Loyola School, where education transcends textbooks and classrooms.
                    Our mission is to nurture not just scholars, but compassionate leaders who will
                    make a difference in the world."
                  </p>
                  <p>
                    "We believe in holistic development - academic excellence combined with character
                    building, sports, arts, and community service. Each student is unique, and we
                    strive to help them discover and develop their individual talents."
                  </p>
                  <p className="font-semibold text-primary not-italic">
                    - Rev. Fr. Principal, Loyola School
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default School;
