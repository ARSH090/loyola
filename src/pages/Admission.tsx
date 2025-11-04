import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, CheckCircle2, AlertCircle, Download, ArrowRight } from "lucide-react";

const Admission = () => {
  const steps = [
    {
      icon: FileText,
      title: "Application Form",
      description: "Download and fill the admission form with all required details",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: CheckCircle2,
      title: "Document Submission",
      description: "Submit birth certificate, ID proofs, and previous school records",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Calendar,
      title: "Interview",
      description: "Attend the admission interview with parents",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Download,
      title: "Confirmation",
      description: "Receive admission confirmation and complete fee payment",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const requirements = [
    "Birth Certificate (Original & Photocopy)",
    "Transfer Certificate from previous school",
    "Aadhar Card (Student & Parents)",
    "Passport size photographs (4 copies)",
    "Medical fitness certificate",
    "Previous year's report card",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-accent via-yellow-500 to-orange-500 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-[url('/grid.svg')] bg-center"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-block mb-6"
            >
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-white font-semibold text-sm">Admissions Open 2025-2026</span>
              </div>
            </motion.div>
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6">
              Join the Loyola Family
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Begin your journey of academic excellence and character development
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-dark shadow-lg">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
              Admission Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Four simple steps to join Loyola School
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative h-full p-6 hover:shadow-elegant transition-all duration-500 border-2 hover:border-accent/50 cursor-pointer overflow-hidden">
                  <motion.div
                    className="absolute top-4 right-4 text-6xl font-bold text-accent/10"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {index + 1}
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-4 bg-gradient-to-br ${step.color} rounded-xl inline-block mb-6 relative z-10`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="font-heading font-semibold text-xl mb-3 text-foreground group-hover:text-primary transition-smooth relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                    {step.description}
                  </p>

                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5`}
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
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
                Required Documents
              </h2>
              <p className="text-lg text-muted-foreground">
                Please prepare the following documents for the admission process
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 hover:shadow-elegant transition-all duration-300">
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <motion.div
                      key={requirement}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent/5 transition-all duration-300 cursor-pointer"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      </motion.div>
                      <span className="text-foreground">{requirement}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-2 border-accent bg-accent/5 p-8 hover:shadow-accent-glow transition-all duration-500">
              <div className="flex items-start gap-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <AlertCircle className="w-8 h-8 text-accent flex-shrink-0" />
                </motion.div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-primary mb-4">
                    Important Information
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Admission is subject to availability of seats</li>
                    <li>• Age criteria must be met as per ICSE guidelines</li>
                    <li>• All documents must be original and attested</li>
                    <li>• Fee structure available on request</li>
                    <li>• For nursery admission, please refer to the separate notification</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
