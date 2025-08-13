import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, MapPin, Heart } from "lucide-react";
import Footer from "@/components/Footer";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const About = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Family Traveler",
      rating: 5,
      text: "JV Holidays made our Kerala trip absolutely magical. The attention to detail and personalized service exceeded our expectations.",
      image: "/lovable-uploads/f1.jpg"
    },
    {
      name: "Priya Sharma",
      role: "Honeymoon Couple",
      rating: 5,
      text: "Our honeymoon in Kashmir was a dream come true. Thank you JV Holidays for creating such beautiful memories for us.",
      image: "/lovable-uploads/f2.jpg"
    },
    {
      name: "Amit Patel",
      role: "Adventure Enthusiast",
      rating: 5,
      text: "The wildlife safari was incredible! Professional guides and well-organized itinerary made it an unforgettable experience.",
      image: "/lovable-uploads/f3.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">About Us</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Trusted
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Travel Partner
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            With over 5 years of experience, JV Holidays has been creating unforgettable travel experiences for families, couples, and adventure seekers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-muted-foreground">Happy Customers</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-muted-foreground">Destinations</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">5+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">100%</h3>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At JV Holidays, we believe that travel is not just about visiting places, but about creating memories that last a lifetime. 
            Our mission is to provide exceptional travel experiences that exceed expectations while ensuring complete customer satisfaction.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;