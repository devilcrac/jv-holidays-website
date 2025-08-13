import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
const ContactSection = () => {
  return <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">Get In Touch</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Plan Your Dream
            <span className="block text-accent">
              Journey Today
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to explore World? Our travel experts create personalized itineraries. 
            We match your dreams with your budget. Start planning your perfect trip today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-accent p-3 rounded-full">
                    <Phone className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Call Us</h3>
                    <p className="text-white/80">Speak with our experts</p>
                  </div>
                </div>
                <div className="space-y-2 text-white/90">
                  <p>+91 9361786484</p>
                  <p>+91 8610458691</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-accent p-3 rounded-full">
                    <Mail className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email Us</h3>
                    <p className="text-white/80">Get detailed information</p>
                  </div>
                </div>
                <div className="space-y-2 text-white/90">
                  <p>jvholidays99@gmail.com</p>
                  <p>
                </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-accent p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Visit Office</h3>
                    <p className="text-white/80">Meet us in person</p>
                  </div>
                </div>
                <p className="text-white/90">
                   No 3 Santoshi Nivas,<br />
                   Vedha Avenue Vaagai Nagar 1st street Agraharam <br />
                   Korattur, Chennai, TamilNadu, India 600076 <br />
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-accent p-3 rounded-full">
                    <Clock className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Office Hours</h3>
                    <p className="text-white/80">We're here for you</p>
                  </div>
                </div>
                <div className="space-y-1 text-white/90 text-sm">
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                  <p className="text-accent">24/7 Emergency Support</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Get Your Custom Quote</CardTitle>
                <p className="text-center text-muted-foreground">
                  Tell us about your dream trip and we'll create the perfect itinerary
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Full Name *</Label>
                      <Input id="name" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Your Email Address *</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" placeholder="+91 99999 99999" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Your city" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="destination">Preferred Destination</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select destination" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kerala">Kerala</SelectItem>
                          <SelectItem value="wildlife">Wildlife Sanctuaries</SelectItem>
                          <SelectItem value="international">International</SelectItem>
                          <SelectItem value="custom">Custom Destination</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="package-type">Package Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select package type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="honeymoon">Honeymoon</SelectItem>
                          <SelectItem value="family">Family Tour</SelectItem>
                          <SelectItem value="group">Group Tour</SelectItem>
                          <SelectItem value="wildlife">Wildlife Safari</SelectItem>
                          <SelectItem value="adventure">Adventure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="travelers">Number of Travelers</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2">2 People</SelectItem>
                          <SelectItem value="3-4">3-4 People</SelectItem>
                          <SelectItem value="5-8">5-8 People</SelectItem>
                          <SelectItem value="9+">9+ People</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="budget">Budget</SelectItem>
                          <SelectItem value="mid">Mid-range</SelectItem>
                          <SelectItem value="premium">Premium</SelectItem>
                          <SelectItem value="luxury">Luxury</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3-5">3-5 Days</SelectItem>
                          <SelectItem value="6-8">6-8 Days</SelectItem>
                          <SelectItem value="9-12">9-12 Days</SelectItem>
                          <SelectItem value="15+">15+ Days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="travel-dates">Preferred Travel Dates</Label>
                    <Input id="travel-dates" placeholder="e.g., December 2024 or Flexible" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Special Requirements / Message</Label>
                    <Textarea id="message" placeholder="Tell us about any special requirements, preferences, or questions you have..." rows={4} />
                  </div>

                  <Button variant="sunset" size="lg" className="w-full" asChild>
                    <a href="/quote">
                      <Send className="mr-2 h-5 w-5" />
                      Get Free Tour Quote
                    </a>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;