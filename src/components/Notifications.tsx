import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, FileText, Calendar, ArrowRight } from "lucide-react";

const Notifications = () => {
  const notices = [
    {
      title: "Robotics and AI Teacher Required",
      date: "January 2025",
      description: "Loyola School is looking for a qualified and competent teacher to teach Robotics and AI at Std 6 to 12 level.",
      type: "recruitment",
      icon: Bell,
    },
    {
      title: "Nursery Admission 2026-2027",
      date: "December 2024",
      description: "Notice regarding Nursery Admission for 2026-2027 (for BOYS and GIRLS). Application process and important dates announced.",
      type: "admission",
      icon: FileText,
    },
    {
      title: "Notice Regarding Healthy Food",
      date: "November 2024",
      description: "Important guidelines for students and parents regarding healthy food and nutrition in school.",
      type: "general",
      icon: Calendar,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Bell className="w-5 h-5" />
            <span className="font-semibold">Important Updates</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            Latest Notifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest announcements and news from Loyola School
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {notices.map((notice, index) => (
            <motion.div
              key={notice.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full hover:shadow-elegant transition-all duration-300 cursor-pointer border hover:border-accent/50 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-accent/20 transition-smooth">
                      <notice.icon className="w-6 h-6 text-primary group-hover:text-accent transition-smooth" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-muted-foreground mb-1">{notice.date}</div>
                      <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-smooth">
                        {notice.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {notice.description}
                  </p>
                  <Button variant="ghost" className="w-full justify-between group/btn hover:bg-primary/5">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notifications;
