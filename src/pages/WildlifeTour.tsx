import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Camera } from "lucide-react";
import Footer from "@/components/Footer";

const WildlifeTour = () => {
  const wildlifeDestinations = [
    {
      id: 1,
      name: "Jim Corbett National Park",
      location: "Uttarakhand",
      image: "/lovable-uploads/jim.webp",
      highlights: ["Tiger Safari", "Elephant Safari", "Bird Watching", "Nature Walks"],
      bestTime: "November to June",
      duration: "3-4 Days"
    },
    {
      id: 2,
      name: "Kaziranga National Park",
      location: "Assam",
      image: "/lovable-uploads/kaziranga.webp",
      highlights: ["One-horned Rhinoceros", "Tiger Spotting", "Elephant Safari", "Bird Watching"],
      bestTime: "November to April",
      duration: "2-3 Days"
    },
    {
      id: 3,
      name: "Gir National Park",
      location: "Gujarat",
      image: "/lovable-uploads/gir.jpeg",
      highlights: ["Asiatic Lions", "Leopard Spotting", "Crocodile Sanctuary", "Bird Watching"],
      bestTime: "December to March",
      duration: "2-3 Days"
    },
    {
      id: 4,
      name: "Bandhavgarh National Park",
      location: "Madhya Pradesh",
      image: "/lovable-uploads/bandhavgarh.webp",
      highlights: ["Tiger Safari", "Ancient Caves", "Bird Watching", "Nature Photography"],
      bestTime: "October to June",
      duration: "3-4 Days"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Wildlife Tours</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Explore India's
            <span className="block bg-gradient-nature bg-clip-text text-transparent">
              Wildlife Sanctuaries
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the thrill of spotting majestic tigers, one-horned rhinoceros, and Asiatic lions in their natural habitat
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {wildlifeDestinations.map((destination) => (
            <Card key={destination.id} className="group overflow-hidden hover:shadow-lg transition-all">
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90">
                    {destination.location}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{destination.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Best Time: {destination.bestTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Duration: {destination.duration}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {destination.highlights.map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button variant="nature" className="w-full" asChild>
                  <a href="/quote">
                    <Camera className="mr-2 h-4 w-4" />
                    Book Safari
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Wildlife Tours?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Camera className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Expert Guides</h3>
              <p className="text-muted-foreground">Professional naturalists with years of experience</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Best Locations</h3>
              <p className="text-muted-foreground">Carefully selected parks with highest wildlife density</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Small Groups</h3>
              <p className="text-muted-foreground">Intimate group sizes for better wildlife viewing</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WildlifeTour;