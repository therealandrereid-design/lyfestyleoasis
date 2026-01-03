import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import graduationCut from "@/assets/gallery/graduation-cut.jpg";
import curlyDesign from "@/assets/gallery/curly-design.jpg";
import kidsFade from "@/assets/gallery/kids-fade.jpg";
import cleanWaves from "@/assets/gallery/clean-waves.jpg";
import beardTrim from "@/assets/gallery/beard-trim.jpg";
import lineDesign from "@/assets/gallery/line-design.jpg";

const galleryImages = [
  {
    src: graduationCut,
    alt: "Clean fade with beard trim - graduation look",
    title: "Graduation Ready"
  },
  {
    src: curlyDesign,
    alt: "Curly top with geometric line design",
    title: "Curly Design"
  },
  {
    src: kidsFade,
    alt: "Kids fade with clean shape-up",
    title: "Kids Fade"
  },
  {
    src: cleanWaves,
    alt: "Clean waves with beard trim",
    title: "Clean Waves"
  },
  {
    src: beardTrim,
    alt: "Professional beard trim and shape",
    title: "Beard Trim"
  },
  {
    src: lineDesign,
    alt: "Creative line design fade",
    title: "Line Design"
  }
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-charcoal">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Our Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Style <span className="text-gradient-gold">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our latest cuts and styles. Each one crafted with precision and care.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="font-display text-lg font-semibold text-foreground">
                  {image.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl w-full p-0 bg-background/95 backdrop-blur-xl border-border overflow-hidden">
          {selectedIndex !== null && (
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/80 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/80 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="w-full max-h-[80vh] object-contain"
              />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {galleryImages[selectedIndex].title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {selectedIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
