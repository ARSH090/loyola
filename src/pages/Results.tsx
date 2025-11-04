import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trophy, Search, Download, TrendingUp, Award } from "lucide-react";

const Results = () => {
  const yearlyResults = [
    { year: "2025", board: "ICSE", passPercentage: "100%", topScore: "100%", toppers: 5 },
    { year: "2024", board: "ISC", passPercentage: "98.5%", topScore: "98.2%", toppers: 8 },
    { year: "2024", board: "ICSE", passPercentage: "99.8%", topScore: "99.4%", toppers: 12 },
    { year: "2023", board: "ISC", passPercentage: "97.9%", topScore: "97.6%", toppers: 6 },
  ];

  const achievements = [
    { icon: Trophy, label: "National Toppers", value: "15+" },
    { icon: Award, label: "State Toppers", value: "50+" },
    { icon: TrendingUp, label: "Avg Pass %", value: "98.5%" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-block mb-6"
            >
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                <Trophy className="w-16 h-16 text-white" />
              </div>
            </motion.div>
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6">
              Examination Results
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Celebrating Academic Excellence - ICSE & ISC Board Results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300 border-2 hover:border-accent/50">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  >
                    <achievement.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="font-heading font-bold text-4xl text-primary mb-2"
                  >
                    {achievement.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="p-8 hover:shadow-elegant transition-all duration-300">
              <h3 className="font-heading font-bold text-2xl text-primary mb-6 text-center">
                Check Your Result
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Admission Number</label>
                  <Input
                    placeholder="Enter your admission number"
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Date of Birth</label>
                  <Input
                    type="date"
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent-glow">
                    <Search className="mr-2 w-5 h-5" />
                    Search Result
                  </Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Yearly Results */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
              Year-wise Results
            </h2>
            <p className="text-lg text-muted-foreground">
              A legacy of consistent academic excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {yearlyResults.map((result, index) => (
              <motion.div
                key={`${result.year}-${result.board}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group p-6 hover:shadow-elegant transition-all duration-500 border-2 hover:border-accent/50 cursor-pointer overflow-hidden relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-heading font-bold text-2xl text-primary">
                          {result.board} {result.year}
                        </h3>
                      </div>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="p-2 bg-accent/20 rounded-full"
                      >
                        <Trophy className="w-6 h-6 text-accent" />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Pass %</div>
                        <div className="font-bold text-lg text-foreground">
                          {result.passPercentage}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Top Score</div>
                        <div className="font-bold text-lg text-foreground">
                          {result.topScore}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Toppers</div>
                        <div className="font-bold text-lg text-foreground">
                          {result.toppers}
                        </div>
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="mt-4"
                    >
                      <Button variant="ghost" className="w-full justify-between group/btn">
                        View Detailed Results
                        <Download className="w-4 h-4 group-hover/btn:translate-y-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
