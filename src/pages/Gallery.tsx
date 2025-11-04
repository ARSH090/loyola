import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Image, Video, X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const categories = ["All", "Events", "Sports", "Cultural", "Academic", "Infrastructure"];
  const [activeCategory, setActiveCategory] = useState("All");

  // Placeholder gallery items
  const galleryItems = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    type: i % 4 === 0 ? "video" : "image",
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
    title: `Gallery Item ${i + 1}`,
    year: 2024,
  }));

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
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
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-6">
              Photo & Video Gallery
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Capturing memories and milestones of the Loyola journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-secondary sticky top-0 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-accent text-accent-foreground shadow-accent-glow"
                    : "bg-background text-foreground hover:bg-accent/20"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
              >
                <Card
                  className="group cursor-pointer overflow-hidden border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-elegant"
                  onClick={() => setSelectedImage(item.id)}
                >
                  <div className="relative aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="text-muted-foreground"
                    >
                      {item.type === "video" ? (
                        <Video className="w-16 h-16" />
                      ) : (
                        <Image className="w-16 h-16" />
                      )}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/50 flex items-center justify-center"
                    >
                      <span className="text-white font-semibold">View</span>
                    </motion.div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-smooth mb-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{item.category}</span>
                      <span>{item.year}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="absolute top-4 right-4 text-white p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </motion.button>
          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            className="max-w-4xl w-full bg-gradient-to-br from-primary/20 to-accent/20 aspect-video rounded-lg flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image className="w-32 h-32 text-white/50" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
