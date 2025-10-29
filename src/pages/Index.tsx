import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, MapPin, Camera, Clock, Trophy, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBackground from "@/components/HeroBackground";

const Index = () => {
  const navigate = useNavigate();

  const instructions = [
    {
      icon: Users,
      title: "Form Teams",
      description: "Create teams of 2-5 members to participate together",
    },
    {
      icon: MapPin,
      title: "Locate Spots",
      description: "Find the campus locations shown in your assigned pictures",
    },
    {
      icon: Camera,
      title: "Take Selfies",
      description: "Click a team selfie at each identified spot",
    },
    {
      icon: Clock,
      title: "Time Limit",
      description: "Complete tasks within the given time period",
    },
    {
      icon: Trophy,
      title: "Win Rewards",
      description: "Team with maximum correct spots wins!",
    },
    {
      icon: AlertCircle,
      title: "No Late Submissions",
      description: "Late submissions lead to disqualification",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 min-h-[80vh] flex items-center">
        <HeroBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 animate-glow-pulse">
            <span className="text-primary text-sm font-semibold">Campus Adventure Challenge</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-slide-up">
            Scavenger Hunt
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up">
            Explore your campus, find hidden spots, and compete with your team to win!
          </p>
          
          <Button
            onClick={() => navigate("/game")}
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all text-lg px-8 py-6 glow-primary animate-slide-up"
          >
            Start Hunt
          </Button>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            How to Play
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Follow these simple steps to participate in the scavenger hunt
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructions.map((instruction, index) => {
              const Icon = instruction.icon;
              return (
                <Card
                  key={index}
                  className="card-gaming p-6 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 glow-primary">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{instruction.title}</h3>
                      <p className="text-sm text-muted-foreground">{instruction.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="card-gaming p-8 border-accent/30">
            <h3 className="text-2xl font-bold mb-4 gradient-text flex items-center gap-2">
              <AlertCircle className="w-6 h-6" />
              Important Rules
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Teams must have minimum 2 and maximum 5 members</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Each team will receive pictures of different campus locations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Take a team selfie at each correctly identified location</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Submit all photos within the given time period</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span className="text-accent font-semibold">Late submissions will lead to disqualification</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Ready for the Challenge?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Gather your team and start exploring!
          </p>
          <Button
            onClick={() => navigate("/game")}
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all text-lg px-8 py-6 glow-secondary"
          >
            Begin Adventure
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
