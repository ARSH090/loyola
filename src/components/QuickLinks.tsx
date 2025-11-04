import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, FileText, Image, Phone, Award, Users } from "lucide-react";

const QuickLinks = () => {
  const links = [
    {
      title: "Admissions",
      description: "Apply for admission to Loyola School",
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
      path: "/admission",
    },
    {
      title: "Results",
      description: "Check ICSE/ISC examination results",
      icon: Award,
      color: "from-green-500 to-green-600",
      path: "/results",
    },
    {
      title: "Gallery",
      description: "Explore our photo and video gallery",
      icon: Image,
      color: "from-purple-500 to-purple-600",
      path: "/gallery",
    },
    {
      title: "Alumni",
      description: "Connect with our alumni network",
      icon: Users,
      color: "from-orange-500 to-orange-600",
      path: "/alumni",
    },
    {
      title: "Downloads",
      description: "Access forms and documents",
      icon: FileText,
      color: "from-pink-500 to-pink-600",
      path: "/downloads",
    },
    {
      title: "Contact Us",
      description: "Get in touch with us",
      icon: Phone,
      color: "from-teal-500 to-teal-600",
      path: "/contact",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            Quick Access
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need, just a click away
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {links.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="group h-full hover:shadow-elegant transition-all duration-300 cursor-pointer border-2 hover:border-accent/50 overflow-hidden">
                <div className="p-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                    <link.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2 text-foreground group-hover:text-primary transition-smooth">
                    {link.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {link.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
