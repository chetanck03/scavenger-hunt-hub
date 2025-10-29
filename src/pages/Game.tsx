import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { ZoomIn, Upload, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GROUPS = ["A", "B", "C", "D", "E", "F", "G", "H"];

// Original 3 images assignment for each group
const ORIGINAL_GROUP_IMAGES = {
  "A": ["/img/pic1.jpg", "/img/pic2.jpg", "/img/pic3.jpg"],
  "B": ["/img/pic4.jpg", "/img/pic5.jpg", "/img/pic6.jpg"],
  "C": ["/img/pic7.jpg", "/img/pic8.jpg", "/img/pic9.jpg"],
  "D": ["/img/pic10.jpg", "/img/pic1.jpg", "/img/pic4.jpg"],
  "E": ["/img/pic2.jpg", "/img/pic5.jpg", "/img/pic8.jpg"],
  "F": ["/img/pic3.jpg", "/img/pic6.jpg", "/img/pic9.jpg"],
  "G": ["/img/pic7.jpg", "/img/pic10.jpg", "/img/pic2.jpg"],
  "H": ["/img/pic1.jpg", "/img/pic8.jpg", "/img/pic6.jpg"],
};

// Generate combined group images: 3 old + 9 new = 12 total per group
const generateGroupImages = () => {
  const groupImages: Record<string, string[]> = {};

  GROUPS.forEach(group => {
    // Start with the 3 original images
    groupImages[group] = [...ORIGINAL_GROUP_IMAGES[group as keyof typeof ORIGINAL_GROUP_IMAGES]];

    // Add the 9 new images from group folders
    for (let i = 1; i <= 9; i++) {
      groupImages[group].push(`/img/group/group${group}/${group}${i}.jpg`);
    }
  });

  return groupImages;
};

const GROUP_IMAGES = generateGroupImages();

// Global image cache to persist across component re-renders
const globalImageCache = new Set<string>();
const imageLoadPromises = new Map<string, Promise<void>>();

// Preload function that returns a promise
const preloadImage = (src: string): Promise<void> => {
  if (globalImageCache.has(src)) {
    return Promise.resolve();
  }
  
  if (imageLoadPromises.has(src)) {
    return imageLoadPromises.get(src)!;
  }

  const promise = new Promise<void>((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      globalImageCache.add(src);
      resolve();
    };
    img.onerror = () => {
      console.warn(`Failed to preload image: ${src}`);
      reject();
    };
    img.src = src;
  });

  imageLoadPromises.set(src, promise);
  return promise;
};

const Game = () => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set(globalImageCache));

  // Memoize group images to prevent recreation
  const groupImages = useMemo(() => GROUP_IMAGES, []);

  // Aggressive preloading - load all images immediately
  useEffect(() => {
    const preloadAllImages = async () => {
      // Get all unique image URLs
      const allImages = new Set<string>();
      Object.values(groupImages).forEach(images => {
        images.forEach(img => allImages.add(img));
      });

      // Load all images in parallel with higher concurrency
      const imageArray = Array.from(allImages);
      const batchSize = 12; // Increased batch size for faster loading
      
      for (let i = 0; i < imageArray.length; i += batchSize) {
        const batch = imageArray.slice(i, i + batchSize);
        
        // Load batch in parallel
        const promises = batch.map(src => 
          preloadImage(src).then(() => {
            setLoadedImages(prev => new Set(prev).add(src));
          }).catch(() => {
            // Continue even if some images fail
          })
        );
        
        await Promise.allSettled(promises);
        
        // Small delay between batches to prevent overwhelming
        if (i + batchSize < imageArray.length) {
          await new Promise(resolve => setTimeout(resolve, 50));
        }
      }
    };

    preloadAllImages();
  }, [groupImages]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="py-8 px-4 flex-1">
        <div className="max-w-7xl mx-auto">
          {!selectedGroup ? (
            <>
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text text-visible animate-fade-in-up">
                Choose Your Group
              </h1>
              <p className="text-center text-muted-foreground mb-12 text-visible animate-fade-in-up">
                Select a group to view your assigned spots
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {GROUPS.map((group, index) => (
                  <Card
                    key={group}
                    className="card-gaming p-6 cursor-pointer text-center hover:scale-105 transition-transform text-visible animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedGroup(group)}
                  >
                    <div className="text-5xl md:text-6xl font-bold gradient-text mb-2 text-visible">
                      {group}
                    </div>
                    <p className="text-sm text-muted-foreground text-visible">Group {group}</p>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <div className="animate-fade-in">
              <Button
                variant="ghost"
                onClick={() => setSelectedGroup(null)}
                className="mb-6 text-black bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 "
              >
                <ArrowLeft className="mr-2 h-4 w-4 " />
                Back to Groups
              </Button>

              <Card className="card-gaming p-6 md:p-8 text-visible">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text text-visible">
                  Group {selectedGroup} - All Locations (12 Spots)
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
                  {groupImages[selectedGroup].map((image, idx) => {
                    const isImageCached = globalImageCache.has(image) || loadedImages.has(image);
                    
                    return (
                    <div
                      key={`${selectedGroup}-${idx}`}
                      className="relative group overflow-hidden rounded-lg border border-border hover:border-primary transition-all"
                    >
                      {/* Loading skeleton - only show if image is not cached */}
                      {!isImageCached && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                          <div className="text-gray-400 text-sm">Loading...</div>
                        </div>
                      )}
                      <img
                        src={image}
                        alt={`Group ${selectedGroup} - Location ${idx + 1}`}
                        className={`w-full h-48 md:h-56 object-cover transition-all duration-150 group-hover:scale-110 ${
                          isImageCached ? 'opacity-100' : 'opacity-0'
                        }`}
                        loading="eager"
                        decoding="sync"
                        onLoad={() => {
                          globalImageCache.add(image);
                          setLoadedImages(prev => new Set(prev).add(image));
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://via.placeholder.com/400x300/1a1a2e/16a085?text=Group+${selectedGroup}+Location+${idx + 1}`;
                        }}
                        style={{
                          backgroundColor: isImageCached ? 'transparent' : '#f3f4f6',
                        }}
                      />
                      <button
                        onClick={() => setZoomedImage(image)}
                        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                      >
                        <ZoomIn className="w-8 h-8 text-primary" />
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                        <p className="text-sm font-semibold text-white">Group {selectedGroup} - Location {idx + 1}</p>
                      </div>
                    </div>
                    );
                  })}
                </div>

                <div className="space-y-4 text-visible">
                  <Button
                    onClick={() => window.open('https://forms.gle/PQMfPwf5f9dPckiD6', '_blank')}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity glow-primary text-visible"
                    size="lg"
                  >
                    <Upload className="mr-2 h-5 w-5" />
                    Submit Task
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
      <Footer />

      <Dialog open={!!zoomedImage} onOpenChange={() => setZoomedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] bg-card border-border overflow-hidden flex flex-col">
          <DialogHeader className="flex-shrink-0">
            <DialogTitle className="gradient-text text-visible">Campus Location Detail</DialogTitle>
          </DialogHeader>
          {zoomedImage && (
            <div className="flex-1 overflow-hidden flex items-center justify-center">
              <img
                src={zoomedImage}
                alt="Campus Location Detail"
                className="max-w-full max-h-full object-contain rounded-lg"
                loading="eager"
                decoding="async"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Game;
