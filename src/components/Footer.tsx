import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-foreground">ShopSphere</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your premium destination for quality products and exceptional shopping experience.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/shop" className="block text-muted-foreground hover:text-primary text-sm transition-colors">
                Shop
              </Link>
              <Link to="/cart" className="block text-muted-foreground hover:text-primary text-sm transition-colors">
                Cart
              </Link>
              <Link to="/checkout" className="block text-muted-foreground hover:text-primary text-sm transition-colors">
                Checkout
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Customer Service</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary text-sm transition-colors">
                Contact Us
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary text-sm transition-colors">
                FAQ
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary text-sm transition-colors">
                Shipping Info
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary text-sm transition-colors">
                Returns
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to get special offers and updates.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="flex-1"
              />
              <Button variant="default" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 ShopSphere. All rights reserved. Built with love for shopping enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;