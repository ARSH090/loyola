import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Trophy, Star } from "lucide-react";

const Toppers = () => {
  const toppers = [
    {
      name: "Shambhavee Jayaswaal",
      percentage: "100%",
      rank: "FIRST",
      badge: "National Topper",
      color: "from-amber-500 to-yellow-600",
    },
    {
      name: "Prachi Sinha",
      percentage: "97.8%",
      rank: "SECOND",
      color: "from-slate-400 to-slate-500",
    },
    {
      name: "Shaunak Gorai",
      percentage: "97.8%",
      rank: "SECOND",
      color: "from-slate-400 to-slate-500",
    },
    {
      name: "Ashwarya Gupta",
      percentage: "97.6%",
      rank: "THIRD",
      color: "from-orange-400 to-amber-600",
    },
    {
      name: "Kanav Chaudhary",
      percentage: "97.6%",
      rank: "THIRD",
      color: "from-orange-400 to-amber-600",
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
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
            <Trophy className="w-5 h-5" />
            <span className="font-semibold">ICSE 2025</span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            Celebrating Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our students continue to set new benchmarks of academic achievement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {toppers.map((topper, index) => (
            <motion.div
              key={topper.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-elegant transition-all duration-300 overflow-hidden cursor-pointer border-2 hover:border-accent/50">
                <div className="p-6 text-center relative">
                  {/* Rank Badge */}
                  <div className={`absolute top-4 right-4 bg-gradient-to-br ${topper.color} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                    {topper.rank}
                  </div>

                  {/* Avatar placeholder with gradient */}
                  <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${topper.color} flex items-center justify-center`}>
                    <Star className="w-12 h-12 text-white" />
                  </div>

                  {/* National Topper Badge */}
                  {topper.badge && (
                    <div className="mb-3">
                      <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {topper.badge}
                      </span>
                    </div>
                  )}

                  {/* Name */}
                  <h3 className="font-heading font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-smooth">
                    {topper.name}
                  </h3>

                  {/* Percentage */}
                  <div className="text-3xl font-bold text-primary mb-1">
                    {topper.percentage}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    ICSE 2025
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toppers;
