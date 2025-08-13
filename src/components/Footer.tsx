import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Send } from "lucide-react";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Company Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-sunset bg-clip-text text-transparent mb-2">
              JV Holidays
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Creating unforgettable travel experiences for over a decade.
              Specializing in tours, wildlife safaris, honeymoon packages,
              and international destinations.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <span className="text-sm">+91 9361786484</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />
              <span className="text-sm">jvholidays99@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-sm">chennai, tamil nadu , India</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10" asChild>
              <a href="https://www.facebook.com/share/1DaeaXxSks/" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10" asChild>
              <a href="https://www.instagram.com/jv_holidays?igsh=OWdna3oycDhmN2Vm" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
              <Youtube className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#home" className="text-primary-foreground/80 hover:text-accent transition-travel text-sm">Home</a></li>
            <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-travel text-sm">About Us</a></li>
            <li><a href="#destinations" className="text-primary-foreground/80 hover:text-accent transition-travel text-sm">Destinations</a></li>
            <li><a href="#packages" className="text-primary-foreground/80 hover:text-accent transition-travel text-sm">Tour Packages</a></li>
            <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-travel text-sm">Contact Us</a></li>
            <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-travel text-sm">Travel Blog</a></li>
            <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-travel text-sm">Gallery</a></li>
          </ul>
        </div>

        {/* Tour Categories */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Tour Categories</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-travel text-sm">Kerala Tours</a></li>
            <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-travel text-sm">Wildlife Safaris</a></li>
            <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-travel text-sm">Honeymoon Packages</a></li>
            <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-travel text-sm">Family Tours</a></li>
            <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-travel text-sm">Group Tours</a></li>
            <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-travel text-sm">International Tours</a></li>
            <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-travel text-sm">Adventure Tours</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
          <p className="text-primary-foreground/80 text-sm mb-4">
            Subscribe to our newsletter for travel tips, exclusive deals, and destination insights.
          </p>

          <div className="space-y-4">
            <div className="flex gap-2">
              <Input placeholder="Your email address" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60" />
              <Button variant="sunset" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                ✓ Travel Tips & Guides
              </Badge>
              <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                ✓ Exclusive Deals
              </Badge>
              <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                ✓ New Destinations
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-primary-foreground/60">
            © 2024 JV Holidays. All rights reserved. | Professional travel services since 2010
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-travel">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-travel">Terms of Service</a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-travel">Cancellation Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>;
};
export default Footer;