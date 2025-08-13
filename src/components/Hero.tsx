import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/kerala-hero.jpg";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Kerala Backwaters - JV Holidays" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Discover
            <span className="block bg-gradient-sunset bg-clip-text text-transparent">
              World's Magic
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Embark on unforgettable journeys to the world's most breathtaking destinations. 
            <span className="block mt-2">Experience luxury travel with personalized itineraries.</span>
            <span className="block mt-2">Create memories that last a lifetime with JV Holidays.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="sunset" size="lg" className="group" asChild>
              <a href="#packages">
                View World Tours
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <a href="/quote">Get Custom Quote</a>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 mb-2 text-accent" />
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-white/80">Destinations</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 mb-2 text-accent" />
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-white/80">Happy Travelers</div>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="h-8 w-8 mb-2 text-accent" />
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>;
};
export default Hero;