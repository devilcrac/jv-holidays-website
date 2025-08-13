import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Phone, Mail } from "lucide-react";
import Footer from "@/components/Footer";

const Quote = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Get Quote</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Plan Your Dream
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Journey Today
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tell us about your travel preferences and we'll create a personalized itinerary just for you
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Request Your Custom Quote</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and our travel experts will get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
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
                          <SelectItem value="goa">Goa</SelectItem>
                          <SelectItem value="kashmir">Kashmir</SelectItem>
                          <SelectItem value="andaman">Andaman</SelectItem>
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
                          <SelectItem value="budget">Budget (₹10,000-25,000)</SelectItem>
                          <SelectItem value="mid">Mid-range (₹25,000-50,000)</SelectItem>
                          <SelectItem value="premium">Premium (₹50,000-1,00,000)</SelectItem>
                          <SelectItem value="luxury">Luxury (₹1,00,000+)</SelectItem>
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

                  <Button variant="hero" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Get Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-muted-foreground">Speak with our experts</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p>+91 9361786484</p>
                  <p>+91 8610458691</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-muted-foreground">Get detailed information</p>
                  </div>
                </div>
                <p>jvholidays99@gmail.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Quote;