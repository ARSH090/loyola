import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Loyola School", "Jamshedpur, Jharkhand", "India - 831001"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91-657-2231795", "Mon-Fri: 8:00 AM - 4:00 PM"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["loyolajsr@gmail.com", "Response within 24 hours"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday", "8:00 AM - 4:00 PM", "Saturday: 8:00 AM - 12:00 PM"],
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary-dark to-primary-light overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full p-6 hover:shadow-elegant transition-all duration-500 border-2 hover:border-accent/50 cursor-pointer">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-4 bg-gradient-to-br ${info.color} rounded-xl inline-block mb-4`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="font-heading font-semibold text-xl mb-3 text-foreground group-hover:text-primary transition-smooth">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                        className="text-sm text-muted-foreground"
                      >
                        {detail}
                      </motion.p>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you shortly
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 md:p-12 hover:shadow-elegant transition-all duration-300">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        placeholder="Enter your name"
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      placeholder="What is this regarding?"
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      placeholder="Type your message here..."
                      rows={6}
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent-glow"
                    >
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden shadow-elegant">
              <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <p className="text-muted-foreground">Map Integration Placeholder</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
