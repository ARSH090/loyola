import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Award, Heart, ArrowRight, CheckCircle2 } from "lucide-react";

const Career = () => {
  const openings = [
    {
      title: "Robotics and AI Teacher",
      department: "Technology",
      type: "Full-time",
      experience: "2-5 years",
      color: "from-blue-500 to-blue-600",
      requirements: [
        "Graduate/Post-graduate in Computer Science or related field",
        "Experience in teaching Robotics/AI to students",
        "Proficiency in programming languages (Python, C++)",
        "Excellent communication skills",
      ],
    },
    {
      title: "Physics Teacher",
      department: "Science",
      type: "Full-time",
      experience: "3-7 years",
      color: "from-purple-500 to-purple-600",
      requirements: [
        "M.Sc. in Physics or equivalent",
        "Experience teaching ICSE/ISC curriculum",
        "Strong laboratory skills",
        "Passion for teaching and student development",
      ],
    },
    {
      title: "Sports Coach",
      department: "Physical Education",
      type: "Full-time",
      experience: "2-4 years",
      color: "from-green-500 to-green-600",
      requirements: [
        "Degree in Physical Education",
        "Coaching certification in relevant sports",
        "Experience training students for competitions",
        "First aid certification preferred",
      ],
    },
  ];

  const benefits = [
    { icon: Award, title: "Competitive Salary", description: "Industry-standard compensation packages" },
    { icon: Users, title: "Collaborative Environment", description: "Work with passionate educators" },
    { icon: Heart, title: "Professional Growth", description: "Continuous learning opportunities" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-block mb-6"
            >
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                <Briefcase className="w-16 h-16 text-white" />
              </div>
            </motion.div>
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6">
              Careers at Loyola
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Join our team of dedicated educators and make a difference in young lives
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <benefit.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  </motion.div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore exciting opportunities to join the Loyola family
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group p-6 md:p-8 hover:shadow-elegant transition-all duration-500 border-2 hover:border-accent/50 overflow-hidden relative">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${job.color} opacity-0 group-hover:opacity-5`}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className={`p-2 bg-gradient-to-br ${job.color} rounded-lg`}
                          >
                            <Briefcase className="w-5 h-5 text-white" />
                          </motion.div>
                          <h3 className="font-heading font-bold text-2xl text-foreground group-hover:text-primary transition-smooth">
                            {job.title}
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                            {job.experience}
                          </span>
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button className="mt-4 md:mt-0 bg-accent text-accent-foreground hover:bg-accent/90">
                          Apply Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </motion.div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            whileHover={{ x: 10 }}
                            className="flex items-start gap-3 text-sm text-muted-foreground cursor-pointer"
                          >
                            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
                How to Apply
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 hover:shadow-elegant transition-all duration-300">
                <div className="space-y-4 text-muted-foreground">
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    Interested candidates may submit a hard copy of their CV along with relevant
                    documents at the school office during working hours (Monday to Friday, 8:00 AM - 4:00 PM).
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Please include: Updated CV, copies of educational certificates, experience
                    certificates, and passport-size photographs.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="font-semibold text-primary"
                  >
                    Preference will be given to candidates with relevant experience and qualifications.
                  </motion.p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
