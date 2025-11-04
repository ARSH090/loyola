import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { BookOpen, Microscope, Calculator, Globe, Palette, Music } from "lucide-react";

const Academics = () => {
  const boards = [
    {
      name: "ICSE",
      title: "Indian Certificate of Secondary Education",
      grades: "Nursery to Class X",
      description: "Comprehensive curriculum focusing on balanced education",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "ISC",
      title: "Indian School Certificate",
      grades: "Classes XI & XII",
      description: "Advanced studies with choice of streams - Science, Commerce, Arts",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const subjects = [
    {
      icon: Microscope,
      title: "Sciences",
      description: "Physics, Chemistry, Biology with state-of-the-art laboratories",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Calculator,
      title: "Mathematics",
      description: "Comprehensive math education from basics to advanced calculus",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Globe,
      title: "Social Studies",
      description: "History, Geography, Civics, and Economics",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: BookOpen,
      title: "Languages",
      description: "English, Hindi, and additional language options",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Palette,
      title: "Arts & Crafts",
      description: "Drawing, Painting, and various art forms",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: Music,
      title: "Music & Dance",
      description: "Vocal, instrumental music, and classical dance forms",
      color: "from-indigo-500 to-purple-600",
    },
  ];

  const facilities = [
    "Well-equipped Science Laboratories",
    "Computer Lab with latest technology",
    "Comprehensive Library with 10,000+ books",
    "Smart Classrooms with digital aids",
    "Sports facilities for various games",
    "Music and Dance rooms",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-20"
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
        </motion.div>
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
              transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
              className="inline-block mb-6"
            >
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                <BookOpen className="w-16 h-16 text-white" />
              </div>
            </motion.div>
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6">
              Academic Excellence
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              A comprehensive curriculum designed to nurture curious minds and future leaders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Boards Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
              Affiliated Boards
            </h2>
            <p className="text-lg text-muted-foreground">
              Recognized by leading education boards of India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {boards.map((board, index) => (
              <motion.div
                key={board.name}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="group h-full p-8 hover:shadow-elegant transition-all duration-500 border-2 hover:border-accent/50 cursor-pointer overflow-hidden relative">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${board.color} opacity-0 group-hover:opacity-10`}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                      className={`inline-block px-6 py-2 bg-gradient-to-br ${board.color} rounded-full mb-6`}
                    >
                      <span className="text-white font-heading font-bold text-2xl">
                        {board.name}
                      </span>
                    </motion.div>

                    <h3 className="font-heading font-semibold text-xl mb-2 text-foreground group-hover:text-primary transition-smooth">
                      {board.title}
                    </h3>
                    <p className="text-accent mb-4 font-medium">{board.grades}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {board.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
              Subject Areas
            </h2>
            <p className="text-lg text-muted-foreground">
              Diverse curriculum for holistic development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="group h-full p-6 hover:shadow-elegant transition-all duration-500 border-2 hover:border-accent/50 cursor-pointer overflow-hidden relative">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-0 group-hover:opacity-5`}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`p-4 bg-gradient-to-br ${subject.color} rounded-xl inline-block mb-4`}
                    >
                      <subject.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="font-heading font-semibold text-xl mb-3 text-foreground group-hover:text-primary transition-smooth">
                      {subject.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {subject.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
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
                World-Class Facilities
              </h2>
              <p className="text-lg text-muted-foreground">
                State-of-the-art infrastructure for comprehensive learning
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {facilities.map((facility, index) => (
                <motion.div
                  key={facility}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <Card className="p-4 hover:shadow-md transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        transition={{ duration: 0.4 }}
                        className="p-2 bg-accent/20 rounded-lg flex-shrink-0"
                      >
                        <BookOpen className="w-5 h-5 text-accent" />
                      </motion.div>
                      <span className="text-foreground group-hover:text-primary transition-smooth">
                        {facility}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pedagogy Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 md:p-12 hover:shadow-elegant transition-all duration-300">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-8"
                >
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
                    Our Teaching Philosophy
                  </h2>
                </motion.div>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    At Loyola School, we believe in nurturing not just academic excellence, but
                    the complete development of each child. Our pedagogy is student-centric,
                    focusing on experiential learning and critical thinking.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    We integrate modern technology with traditional teaching methods to create
                    an engaging learning environment. Our teachers are trained to identify and
                    nurture each student's unique talents and interests.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    Beyond textbooks, we emphasize values education, sports, arts, and community
                    service to develop well-rounded individuals ready to face the challenges of
                    tomorrow.
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

export default Academics;
