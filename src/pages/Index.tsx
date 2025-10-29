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
      <section className="relative overflow-hidden py-8 px-6 md:py-12 md:px-4 min-h-[85vh] flex items-center">
        {/* Background Layer - Lowest z-index */}
        <div className="absolute inset-0 z-0">
          <HeroBackground />
        </div>

        {/* Animated Background Elements - Above 3D background */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/15 via-background/70 to-secondary/15" />
        <div className="absolute inset-0 z-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iaHNsKHZhcigtLXByaW1hcnkpKSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

        {/* Floating Orbs - Behind content */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl animate-float z-30" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-secondary/25 to-accent/25 rounded-full blur-lg animate-float-delayed z-30" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-md animate-pulse z-30" />

        {/* Content Layer - Highest z-index */}
        <div className="relative z-50 max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-3 rounded-full border-2 border-primary/40 bg-background/80 backdrop-blur-md animate-glow-pulse shadow-xl text-visible">
            <div className="w-2 h-2 bg-primary rounded-full animate-smooth-pulse" />
            <span className="text-primary text-xs md:text-sm font-bold tracking-wide">🎯 CAMPUS ADVENTURE CHALLENGE</span>
            <div className="w-2 h-2 bg-secondary rounded-full animate-smooth-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Main Title */}
          <div className="relative mb-6 opacity-100">
            {/* Text Shadow Background for Better Contrast */}
            <div className="absolute inset-0 bg-background/20 rounded-3xl blur-3xl" />

            <h1 className="relative text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-3 gradient-text tracking-tight drop-shadow-2xl animate-fade-in-up text-visible px-2">
              Scavenger Hunt
            </h1>

            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 text-primary animate-spin-slow drop-shadow-lg">
              ⭐
            </div>
            <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-5 h-5 md:w-7 md:h-7 text-secondary animate-bounce drop-shadow-lg">
              🎯
            </div>
          </div>

          {/* Subtitle */}
          <div className="relative mb-8 opacity-100">
            <div className="absolute inset-0 bg-background/10 rounded-2xl blur-2xl" />
            <p className="relative text-base sm:text-lg md:text-xl lg:text-2xl text-foreground mb-0 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg animate-fade-in-up text-visible px-4" style={{ animationDelay: '0.4s' }}>
              Explore your campus, discover hidden gems, and compete with your team in the ultimate adventure challenge!
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-8 text-visible animate-fade-in-up px-4" style={{ animationDelay: '0.6s' }}>
            <div className="text-center bg-background/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-primary/20 min-w-[80px]">
              <div className="text-2xl md:text-3xl font-bold gradient-text drop-shadow-lg">50+</div>
              <div className="text-xs text-foreground/80 font-medium">Locations</div>
            </div>
            <div className="text-center bg-background/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-primary/20 min-w-[80px]">
              <div className="text-2xl md:text-3xl font-bold gradient-text drop-shadow-lg">2-5</div>
              <div className="text-xs text-foreground/80 font-medium">Team Size</div>
            </div>
            <div className="text-center bg-background/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-primary/20 min-w-[80px]">
              <div className="text-2xl md:text-3xl font-bold gradient-text drop-shadow-lg">60min</div>
              <div className="text-xs text-foreground/80 font-medium">Time Limit</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center text-visible animate-fade-in-up px-4" style={{ animationDelay: '0.8s' }}>
            <Button
              onClick={() => navigate("/game")}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-background font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 glow-primary group relative overflow-hidden border-2 border-primary/20 order-2 sm:order-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                🚀 Start Your Adventure
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary/60 text-primary hover:bg-primary/20 hover:text-white font-semibold text-base px-6 py-6 rounded-full bg-background/80 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-primary shadow-lg order-1 sm:order-2"
              onClick={() => document.getElementById('instructions')?.scrollIntoView({ behavior: 'smooth' })}
            >
              📖 How to Play
            </Button>
          </div>

          {/* Scroll Indicator */}

        </div>
      </section>

      {/* Instructions Section */}
      <section id="instructions" className="py-20 px-4 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-2xl" />

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16 text-visible">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-visible">
              <span className="text-primary text-sm font-semibold">📚 GAME INSTRUCTIONS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text text-visible">
              How to Play
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-visible">
              Follow these simple steps to participate in the ultimate campus scavenger hunt adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructions.map((instruction, index) => {
              const Icon = instruction.icon;
              return (
                <Card
                  key={index}
                  className="card-gaming p-8 text-visible animate-fade-in-up group relative overflow-hidden border-2 hover:border-primary/50"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Card Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-background font-bold text-sm text-visible">
                    {index + 1}
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative text-visible">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-xl gradient-text text-visible">{instruction.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-visible">{instruction.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 text-visible">
            <Button
              onClick={() => navigate("/game")}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-background font-bold text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 text-visible"
            >
              🎮 Ready to Start?
            </Button>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="card-gaming p-8 border-accent/30 text-visible">
            <h3 className="text-2xl font-bold mb-4 gradient-text flex items-center gap-2 text-visible">
              <AlertCircle className="w-6 h-6" />
              Important Rules
            </h3>
            <ul className="space-y-3 text-muted-foreground text-visible">
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
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iaHNsKHZhcigtLXByaW1hcnkpKSIgb3BhY2l0eT0iMC4zIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2RvdHMpIi8+PC9zdmc+')] opacity-50" />

        <div className="max-w-5xl mx-auto text-center relative text-visible">
          <div className="mb-8">
            <span className="text-6xl md:text-8xl">🏆</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-8 gradient-text leading-tight text-visible">
            Ready for the Ultimate
            <br />
            <span className="text-5xl md:text-7xl">Challenge?</span>
          </h2>

          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed text-visible">
            Gather your team, explore your campus, and compete for amazing prizes in this epic adventure!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-visible">
            <Button
              onClick={() => navigate("/game")}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-background font-bold text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-110 glow-secondary group relative overflow-hidden text-visible"
            >
              <span className="relative z-10 flex items-center gap-3">
                🚀 Begin Your Adventure
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>


          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
