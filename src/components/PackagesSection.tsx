import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Star } from "lucide-react";
import wildlifeImage from "@/assets/wildlife-card.jpg";
import honeymoonImage from "@/assets/honeymoon-card.jpg";
import familyImage from "@/assets/family-card.jpg";
import { useEffect, useState } from "react";

// Improved descriptions with better readability and SEO
const improvedPackages = [
  {
    id: 1,
    title: "Kerala Tour",
    location: "Munnar, Alleppey, Kochi , Wayanad, etc",
    duration: "6 Days / 5 Nights",
    price: "₹25,000",
    originalPrice: "₹30,000",
    image: "/lovable-uploads/kerala.png",
    rating: 4.9,
    reviews: 156,
    category: "Kerala tour",
    highlights: ["Houseboat Stay", "Hill Station", "Romantic Dinners"],
    description: "Escape to Kerala's romantic backwaters. Explore misty Munnar mountains. Create perfect honeymoon memories together."
  },
  {
    id: 2,
    title: "Goa Adventure",
    location: "North Goa, South Goa",
    duration: "5 Days / 4 Nights",
    price: "₹22,000",
    originalPrice: "₹28,000",
    image: "/lovable-uploads/goa-tourism.jpg",
    rating: 4.8,
    reviews: 120,
    category: "Adventure",
    highlights: ["Beach Time", "Cultural Tours", "Water Sports"],
    description: "Experience Goa's golden beaches, ancient forts, and vibrant culture."
  },
  {
    id: 3,
    title: "Shimla & Manali 6D/5N",
    location: "Shimla, Kufri, Kullu, Manali",
    duration: "6 Days / 5 Nights",
    price: "—",
    originalPrice: "—",
    image: "/lovable-uploads/solang.webp",
    rating: 4.8,
    reviews: 98,
    category: "Hill Station",
    highlights: [
      "2N Shimla",
      "3N Manali",
      "Breakfast & Dinner",
      "AC Transfers",
      "Candle Light Dinner"
    ],
    description: "Explore Shimla, Kufri, and Manali with AC transfers, daily breakfast & dinner, and sightseeing across hills, valleys, and temples."
  },
  {
    id: 4,
    title: "Kashmir 5D/4N",
    location: "Srinagar, Gulmarg, Pahalgam, Sonamarg",
    duration: "5 Days / 4 Nights",
    price: "—",
    originalPrice: "—",
    image: "/lovable-uploads/kashmir valley.jpg",
    rating: 4.8,
    reviews: 142,
    category: "Hill Station",
    highlights: [
      "Dal Lake",
      "Mughal Gardens",
      "Gondola Ride",
      "Betaab & Aru Valleys",
      "Snow Activities"
    ],
    description: "Discover Srinagar's Dal Lake and Mughal gardens, Gulmarg Gondola, Pahalgam's valleys, and Sonamarg snow adventures."
  },
  {
    id: 5,
    title: "Andaman: Port Blair & Havelock 5D/4N",
    location: "Port Blair, Havelock (Swaraj Dweep)",
    duration: "5 Days / 4 Nights",
    price: "—",
    originalPrice: "—",
    image: "/lovable-uploads/Andaman package.jpg",
    rating: 4.7,
    reviews: 87,
    category: "Beach",
    highlights: [
      "Cellular Jail",
      "Corbyn's Cove",
      "Light & Sound Show",
      "Radhanagar Beach",
      "Elephant Beach"
    ],
    description: "Experience Port Blair's heritage and Havelock's pristine beaches including Radhanagar and Elephant Beach."
  },
  {
    id: 6,
    title: "Vietnam 7D/6N",
    location: "Hanoi, Halong Bay, Ninh Binh, Danang, Hoi An, HCMC, Mekong, Cu Chi",
    duration: "7 Days / 6 Nights",
    price: "—",
    originalPrice: "—",
    image: "/lovable-uploads/vietnam.webp",
    rating: 4.8,
    reviews: 105,
    category: "International",
    highlights: [
      "Halong Bay Cruise",
      "Ninh Binh Caves",
      "Ba Na Hills & Golden Bridge",
      "Coconut Village",
      "Hoi An Ancient Town",
      "Mekong Delta",
      "Cu Chi Tunnels"
    ],
    description: "From Hanoi’s heritage to Halong Bay, Ninh Binh’s karsts, Ba Na Hills, Hoi An, and HCMC with Mekong & Cu Chi."
  },
  {
    id: 7,
    title: "Mauritius 7D/6N",
    location: "Mauritius (North, South, Ile Aux Cerfs)",
    duration: "7 Days / 6 Nights",
    price: "—",
    originalPrice: "—",
    image: "/lovable-uploads/Mauritius.jpg",
    rating: 4.8,
    reviews: 96,
    category: "International",
    highlights: [
      "North Tour",
      "South Tour",
      "Ile Aux Cerfs",
      "Sunset Catamaran",
      "Zipline & Water Activities"
    ],
    description: "Stay at Tarisa Resort & Spa with daily breakfast & dinner, SIC transfers, full-day North & South tours, Ile Aux Cerfs on speedboat, sunset catamaran cruise, and adventure add-ons."
  },
  {
    id: 8,
    title: "Hong Kong 5D/4N – Fixed Departure (Without Flights)",
    location: "Kowloon, Hong Kong",
    duration: "5 Days / 4 Nights",
    price: "—",
    originalPrice: "—",
    image: "/lovable-uploads/hongkong.jpg",
    rating: 4.7,
    reviews: 85,
    category: "International",
    highlights: [
      "Kowloon: Harbour Plaza Metropolis (Breakfast)",
      "SIC Airport Transfers",
      "Hong Kong City Tour",
      "Victoria Peak & Peak Tram",
      "Old Clock Tower",
      "Victoria Harbour",
      "Symphony of Lights Show",
    ],
    description: "Fixed departure Hong Kong package based in Kowloon with city highlights, Disneyland, Ocean Park, SIC transfers, and complimentary Madame Tussauds."
  },
  {
    id: 9,
    title: "Dubai 5D/4N – Hotels (★★★)",
    location: "Deira – Fortune Pearl Hotel",
    duration: "5 Days / 4 Nights",
    price: "—",
    originalPrice: "—",
    image: "/lovable-uploads/dubai1.webp",
    rating: 4.7,
    reviews: 76,
    category: "International",
    highlights: [
      "Breakfast Only",
      "Private Airport Transfers",
      "Dubai City Tour",
      "Desert Safari + BBQ",
      "Dhow Cruise – Creek",
      "At The Top – 124F (NPT)",
      "Abu Dhabi City Tour",
      "Dubai Frame",
      "All sightseeing on SIC"
    ],
    description:
      "4N/5D Dubai package based in Deira with Fortune Pearl Hotel (★★★), breakfast only, classic Dubai trio, Burj Khalifa 124F (non-prime), Abu Dhabi city tour, Dubai Frame, SIC sightseeing, and private airport transfers."
  }
];

const PackagesSection = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<(typeof improvedPackages)[number] | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="packages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Popular Packages</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Handcrafted Travel
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose from our most popular tour packages, each designed to combine adventure, comfort, 
          and authentic local culture. Perfect for couples, families, and solo travelers alike
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {improvedPackages.map((pkg) => (
            <Card
              key={pkg.id}
              className="group overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all hover:shadow-lg cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={`View details for ${pkg.title}`}
              onClick={() => {
                setSelected(pkg);
                setOpen(true);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(pkg);
                  setOpen(true);
                }
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90">
                    {pkg.category}
                  </Badge>
                </div>
                {/* Pricing removed */}
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-semibold">{pkg.rating}</span>
                    <span className="text-sm text-muted-foreground">({pkg.reviews} reviews)</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-travel">
                  {pkg.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {pkg.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{pkg.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {pkg.highlights.map((highlight, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">Contact us for details</div>
                  <Button
                    variant="hero"
                    size="sm"
                    onClick={() => {
                      setSelected(pkg);
                      setOpen(true);
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Details Modal */}
        {open && selected && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="package-title"
            className="fixed inset-0 z-[100] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
            <div className="relative z-[101] w-full max-w-4xl mx-4">
              <Card className="overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b bg-muted/40">
                  <h3 id="package-title" className="text-xl font-semibold">{selected.title}</h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{selected.category}</Badge>
                    <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Close</Button>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  <div className="space-y-4">
                    <img
                      src={selected.image}
                      alt={selected.title}
                      className="w-full h-56 object-cover rounded-lg"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="p-2 rounded bg-muted">Duration: {selected.duration}</div>
                      <div className="p-2 rounded bg-muted">Location: {selected.location}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Highlights</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                        {selected.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Overview</h4>
                    <p className="text-sm text-muted-foreground">{selected.description}</p>
                    {/* Rich itineraries */}
                    {selected.title.toLowerCase().includes("goa") ? (
                      <div className="space-y-3">
                        <h4 className="font-semibold">Itinerary</h4>
                        <ul className="list-disc pl-5 text-sm leading-relaxed space-y-1">
                          <li>Day 1: Airport pickup and hotel check-in</li>
                          <li>Day 2: North Goa tour — Fort Aguada, Lighthouse, Sinquerim/Candolim, Calangute, Baga, Anjuna, Vagator</li>
                          <li>Day 3: South Goa tour — Old Goa Church, Museum, Mangueshi Temple, Miramar, Dona Paula (Evening boat cruise optional, extra cost)</li>
                          <li>Day 4: Leisure day (Optional Amboli Waterfall trip at additional cost)</li>
                          <li>Day 5: Airport drop</li>
                        </ul>
                        <p className="text-sm text-muted-foreground">Meal plan: Breakfast</p>
                        <p className="text-xs text-muted-foreground">Additional: South Goa boat cruise optional at extra cost. Amboli waterfall can be added on Day 4 (extra).</p>
                      </div>
                    ) : selected.title.toLowerCase().includes("shimla") || selected.title.toLowerCase().includes("manali") ? (
                      <div className="space-y-3">
                        <h4 className="font-semibold">Itinerary</h4>
                        <ul className="list-disc pl-5 text-sm leading-relaxed space-y-1">
                          <li>6 Days / 5 Nights</li>
                          <li>2 Nights Accommodation in Shimla</li>
                          <li>3 Nights Accommodation in Manali</li>
                          <li>One Candle Light Dinner</li>
                          <li>05 Breakfast & 05 Dinner</li>
                          <li>Pick up & Drop Ex - Delhi</li>
                          <li>All transfers & Sightseeing by A/C Car</li>
                          <li>Includes Toll Tax, Parking, Driver Allowance</li>
                        </ul>
                        <div className="space-y-2">
                          <h5 className="font-medium">Shimla / Kufri Sightseeing</h5>
                          <p className="text-sm text-muted-foreground">Mall Road, Indian Institute of Advanced Studies, Sankat Mochan Temple, Jakhu Temple, Kufri Excursion, Christ Church (neo-gothic), Neo-Tudor Library, Green Valley, Wild Flower Hall, Indira Tourist Park, Mini Zoo & Fagu Valley.</p>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-medium">Kullu / Manali Sightseeing</h5>
                          <p className="text-sm text-muted-foreground">Kullu town, Rafting on Beas River, Angora Farm, Vaishno Devi Temple, Kullu Shawl Industry, Manali local markets, Rohtang Pass, Atal Tunnel, Hadimba Devi Temple, Club House, Manu Temple, Van Vihar, Tibetan Monastery, Vashisht Hot Springs, Solang Valley.</p>
                          <p className="text-xs text-muted-foreground">Activities: Ropeway, Paragliding, Zorbing, Mountain Biking, Horse Riding.</p>
                        </div>
                      </div>
                    ) : selected.title.toLowerCase().includes("kashmir") || selected.location.toLowerCase().includes("srinagar") ? (
                      <div className="space-y-3">
                        <h4 className="font-semibold">Itinerary</h4>
                        <ul className="list-disc pl-5 text-sm leading-relaxed space-y-1">
                          <li>5 Days / 4 Nights</li>
                          <li>Destinations: Srinagar, Gulmarg, Pahalgam, Sonamarg</li>
                        </ul>
                        <div className="space-y-2">
                          <h5 className="font-medium">Srinagar</h5>
                          <p className="text-sm text-muted-foreground">Dal Lake, Mughal Gardens (Shalimar Bagh, Nishat Bagh), Shankaracharya Temple, Sri Pratap Singh Museum, Kashmir Government Arts Emporium.</p>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-medium">Gulmarg</h5>
                          <p className="text-sm text-muted-foreground">Gondola ride with panoramic Himalayan views.</p>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-medium">Pahalgam</h5>
                          <p className="text-sm text-muted-foreground">Betaab Valley and Aru Valley exploration.</p>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-medium">Sonamarg</h5>
                          <p className="text-sm text-muted-foreground">Snow trekking and adventure activities (seasonal).</p>
                        </div>
                      </div>
                    ) : selected.title.toLowerCase().includes("vietnam") || selected.location.toLowerCase().includes("hanoi") ? (
                      <div className="space-y-3">
                        <h4 className="font-semibold">Itinerary</h4>
                        <ul className="list-disc pl-5 text-sm leading-relaxed space-y-1">
                          <li>Day 1 – Hanoi Arrival + Half-Day City Tour (SIC): Ho Chi Minh Mausoleum, Temple of Literature, Tran Quoc Pagoda, Hoan Kiem Lake, Ngoc Son Temple, Old Quarter walk. Night market (Fri–Sun).</li>
                          <li>Day 2 – Halong Bay Day Cruise (SIC): Surprising Cave, kayaking/bamboo boat at Luon Cave, Titov Island & viewpoint. Lunch on board.</li>
                          <li>Day 3 – Ninh Binh + Fly to Danang: Hoa Lu (Dinh & Le), Tam Coc grotto boat ride, Mua Caves; evening flight to Danang.</li>
                          <li>Day 4 – Ba Na Hills + Coconut Village + Hoi An: Golden Bridge, Linh Ung Pagoda, Fantasy Park; Cam Thanh Coconut Village basket boat; Hoi An Ancient Town.</li>
                          <li>Day 5 – Danang City + Marble Mountain + Fly to HCMC: Han & Dragon Bridges, Han Market, Linh Ung (Lady Buddha), My Khe Beach; Marble Mountain; flight to HCMC.</li>
                          <li>Day 6 – Mekong Delta + Cu Chi Tunnels (SIC): My Tho boat trip, Thoi Son Island (fruits, folk music), sampan; Cu Chi Tunnels.</li>
                          <li>Day 7 – HCMC Half-Day Tour + Departure: Notre Dame Cathedral, Old Post Office, People’s Committee Hall, Independence Palace, War Remnants Museum, Ben Thanh Market; airport drop.</li>
                        </ul>
                      </div>
                    ) : selected.title.toLowerCase().includes("dubai") ? (
                      <div className="space-y-3">
                        <h4 className="font-semibold">Inclusions</h4>
                        <ul className="list-disc pl-5 text-sm leading-relaxed space-y-1">
                          <li>Fortune Pearl Hotel (Deira) ★★★ – Breakfast Only</li>
                          <li>Private Airport Transfers</li>
                          <li>Dubai City Tour</li>
                          <li>Desert Safari + BBQ</li>
                          <li>Dhow Cruise – Creek</li>
                          <li>At The Top – 124F (NPT)</li>
                          <li>Abu Dhabi City Tour</li>
                          <li>Dubai Frame</li>
                          <li>All sightseeing on SIC</li>
                        </ul>
                      </div>
                    ) : selected.title.toLowerCase().includes("mauritius") ? (
                      <div className="space-y-3">
                        <h4 className="font-semibold">Inclusions</h4>
                        <ul className="list-disc pl-5 text-sm leading-relaxed space-y-1">
                          <li>Tarisa Resort & Spa ★★★ – Superior Room</li>
                          <li>6 Nights accommodation</li>
                          <li>Airport transfers on SIC (Seat-in-Coach) basis</li>
                          <li>Daily Breakfast & Dinner</li>
                          <li>Full Day North Tour on SIC</li>
                          <li>Full Day South Tour on SIC</li>
                          <li>Ile Aux Cerfs Tour on Speedboat</li>
                          <li>Sunset Catamaran Cruise</li>
                          <li>500m Zipline at 23 LVDC</li>
                          <li>Tube Ride during Ile Aux Cerfs Tour</li>
                          <li>Taste of Mauritian Food during North Tour</li>
                        </ul>
                        <div className="space-y-2">
                          <h5 className="font-medium">Upgrade Options</h5>
                          <ul className="list-disc pl-5 text-sm leading-relaxed space-y-1">
                            <li>★★★★ Anelia Resort & Spa Mauritius – Superior Room</li>
                            <li>★★★★★ Intercontinental Resort Mauritius – Deluxe Ocean View Room</li>
                          </ul>
                        </div>
                      </div>
                    ) : selected.title.toLowerCase().includes("hong kong") ? (
                      <div className="space-y-3">
                        <h4 className="font-semibold">Inclusions</h4>
                        <ul className="list-disc pl-5 text-sm leading-relaxed space-y-1">
                          <li>Kowloon: Harbour Plaza Metropolis – Breakfast included</li>
                          <li>SIC Airport Transfers</li>
                          <li>Hong Kong City Tour: Victoria Peak, One Way Peak Tram, Old Clock Tower, Victoria Harbour, Symphony of Light Show</li>
                          <li>Complimentary Madame Tussauds tickets</li>
                          <li>Disneyland Tour (Transfers + 1 Day Ticket)</li>
                          <li>Ocean Park Tour (Tickets + Transfers)</li>
                          <li>SIC Transfers + Sightseeings</li>
                        </ul>
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">{selected.description}</p>
                    )}
                    <div className="flex items-center justify-end pt-2">
                      <Button variant="nature" onClick={() => (window.location.href = "/quote")}>Get Quote</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        <div className="text-center">
          <Button variant="nature" size="lg" asChild>
            <a href="/quote">Customize Your Trip</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;