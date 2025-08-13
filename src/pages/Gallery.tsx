import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: "/lovable-uploads/kerala.png",
      alt: "Kerala Backwaters",
      category: "Kerala"
    },
    {
      id: 2,
      src: "/lovable-uploads/goa-tourism.jpg",
      alt: "Goa Beaches",
      category: "Goa"
    },
    {
      id: 3,
      src: "/lovable-uploads/kashmir valley.jpg",
      alt: "Kashmir Valley",
      category: "Kashmir"
    },
    {
      id: 4,
      src: "/lovable-uploads/Andaman package.jpg",
      alt: "Andaman Islands",
      category: "Andaman"
    },
    {
      id: 5,
      src: "/lovable-uploads/vietnam.webp",
      alt: "Vietnam",
      category: "International"
    },
    {
      id: 6,
      src: "/lovable-uploads/Mauritius.jpg",
      alt: "Mauritius",
      category: "International"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Photo Gallery</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Our
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Travel Destinations
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the beauty of our carefully curated destinations through these stunning photographs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <Card key={image.id} className="group overflow-hidden hover:shadow-lg transition-all">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90">
                      {image.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{image.alt}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;