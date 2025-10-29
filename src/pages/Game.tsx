import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { ZoomIn, Upload, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Placeholder images - will be replaced later
const PLACEHOLDER_IMAGES = [
  "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=400&h=300&fit=crop",
];

const GROUPS = ["A", "B", "C", "D", "E", "F", "G", "H"];

const getRandomImages = (count: number) => {
  const shuffled = [...PLACEHOLDER_IMAGES].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const Game = () => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [groupImages] = useState<Record<string, string[]>>(
    GROUPS.reduce((acc, group) => {
      acc[group] = getRandomImages(3);
      return acc;
    }, {} as Record<string, string[]>)
  );
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

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
                  Group {selectedGroup} - Your Spots
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                  {groupImages[selectedGroup].map((image, idx) => (
                    <div
                      key={idx}
                      className="relative group overflow-hidden rounded-lg border border-border hover:border-primary transition-all"
                    >
                      <img
                        src={image}
                        alt={`Spot ${idx + 1}`}
                        className="w-full h-48 md:h-64 object-cover transition-transform group-hover:scale-110"
                      />
                      <button
                        onClick={() => setZoomedImage(image)}
                        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                      >
                        <ZoomIn className="w-8 h-8 text-primary" />
                      </button>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                        <p className="text-sm font-semibold text-visible">Spot {idx + 1}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 text-visible">
                  <Button
                    onClick={() => window.open('https://docs.com/hame', '_blank')}
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
        <DialogContent className="max-w-4xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="gradient-text text-visible">Spot Detail</DialogTitle>
          </DialogHeader>
          {zoomedImage && (
            <img
              src={zoomedImage}
              alt="Zoomed spot"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Game;
