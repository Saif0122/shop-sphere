// Import all assets
import headphones from "@/assets/headphones.jpg";
import smartwatch from "@/assets/smartwatch.jpg";
import camera from "@/assets/camera.jpg";
import heroImage from "@/assets/hero-image.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  badge?: string;
  description: string;
  inStock: boolean;
  fastShipping: boolean;
}

export const categories = [
  "All",
  "Electronics",
  "Computers",
  "Smartphones",
  "Audio",
  "Cameras",
  "Wearables",
  "Gaming",
  "Home & Garden",
  "Fashion",
  "Sports",
  "Books"
];

export const products: Product[] = [
  // Electronics
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 2547,
    image: headphones,
    category: "Audio",
    badge: "Best Seller",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
    inStock: true,
    fastShipping: true
  },
  {
    id: 2,
    name: "Smart Watch Series X",
    price: 249.99,
    originalPrice: 329.99,
    rating: 4.9,
    reviews: 1823,
    image: smartwatch,
    category: "Wearables",
    badge: "New",
    description: "Advanced smartwatch with health monitoring, GPS, and long battery life.",
    inStock: true,
    fastShipping: true
  },
  {
    id: 3,
    name: "Ultra HD Camera",
    price: 899.99,
    rating: 4.7,
    reviews: 945,
    image: camera,
    category: "Cameras",
    badge: "Popular",
    description: "Professional-grade camera with 4K video recording and advanced image stabilization.",
    inStock: true,
    fastShipping: false
  },
  {
    id: 4,
    name: "Gaming Laptop Pro",
    price: 1299.99,
    originalPrice: 1499.99,
    rating: 4.6,
    reviews: 1567,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500",
    category: "Computers",
    badge: "Deal",
    description: "High-performance gaming laptop with RTX graphics and fast processor.",
    inStock: true,
    fastShipping: true
  },
  {
    id: 5,
    name: "MacBook Pro M3",
    price: 1999.99,
    rating: 4.9,
    reviews: 3421,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500",
    category: "Computers",
    description: "Latest MacBook Pro with M3 chip, perfect for professional work and creative tasks.",
    inStock: true,
    fastShipping: true
  },
  {
    id: 6,
    name: "iPhone 15 Pro Max",
    price: 1199.99,
    rating: 4.8,
    reviews: 5632,
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500",
    category: "Smartphones",
    badge: "Trending",
    description: "Latest iPhone with titanium design, advanced camera system, and A17 Pro chip.",
    inStock: true,
    fastShipping: true
  },
  {
    id: 7,
    name: "Gaming Console X",
    price: 499.99,
    rating: 4.7,
    reviews: 2847,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500",
    category: "Gaming",
    description: "Next-generation gaming console with 4K gaming and ray tracing.",
    inStock: false,
    fastShipping: false
  },
  {
    id: 8,
    name: "Wireless Bluetooth Speaker",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.5,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500",
    category: "Audio",
    badge: "Sale",
    description: "Portable Bluetooth speaker with rich sound and waterproof design.",
    inStock: true,
    fastShipping: true
  },
  {
    id: 9,
    name: "4K Monitor 27 inch",
    price: 349.99,
    rating: 4.6,
    reviews: 987,
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500",
    category: "Electronics",
    description: "Ultra-sharp 4K monitor perfect for work and entertainment.",
    inStock: true,
    fastShipping: true
  },
  {
    id: 10,
    name: "Mechanical Gaming Keyboard",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.7,
    reviews: 2156,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
    category: "Gaming",
    badge: "Choice",
    description: "RGB mechanical keyboard with tactile switches and customizable lighting.",
    inStock: true,
    fastShipping: true
  },
  {
    id: 11,
    name: "Fitness Tracker",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.4,
    reviews: 3467,
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500",
    category: "Wearables",
    description: "Advanced fitness tracker with heart rate monitor and sleep tracking.",
    inStock: true,
    fastShipping: true
  },
  {
    id: 12,
    name: "Smart Home Hub",
    price: 199.99,
    rating: 4.5,
    reviews: 1876,
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=500",
    category: "Home & Garden",
    badge: "Smart Choice",
    description: "Central hub for all your smart home devices with voice control.",
    inStock: true,
    fastShipping: false
  },
  {
    id: 13,
    name: "Premium Coffee Maker",
    price: 159.99,
    originalPrice: 219.99,
    rating: 4.6,
    reviews: 2341,
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=500",
    category: "Home & Garden",
    description: "Programmable coffee maker with built-in grinder and thermal carafe.",
    inStock: true,
    fastShipping: true
  },
  {
    id: 14,
    name: "Running Shoes Pro",
    price: 119.99,
    rating: 4.7,
    reviews: 4523,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500",
    category: "Sports",
    badge: "Athlete's Choice",
    description: "Professional running shoes with advanced cushioning and support.",
    inStock: true,
    fastShipping: true
  },
  {
    id: 15,
    name: "Designer Backpack",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.3,
    reviews: 1654,
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500",
    category: "Fashion",
    description: "Stylish and functional backpack perfect for work and travel.",
    inStock: true,
    fastShipping: true
  },
  {
    id: 16,
    name: "Programming Books Bundle",
    price: 49.99,
    originalPrice: 79.99,
    rating: 4.8,
    reviews: 876,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
    category: "Books",
    badge: "Educational",
    description: "Complete programming books collection for beginners to advanced developers.",
    inStock: true,
    fastShipping: true
  },
  {
    id: 17,
    name: "Tablet Pro 12.9",
    price: 799.99,
    rating: 4.6,
    reviews: 2987,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500",
    category: "Electronics",
    description: "Professional tablet with large screen and Apple Pencil support.",
    inStock: true,
    fastShipping: true
  },
  {
    id: 18,
    name: "Wireless Mouse",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.4,
    reviews: 5432,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500",
    category: "Electronics",
    description: "Ergonomic wireless mouse with precision tracking and long battery life.",
    inStock: true,
    fastShipping: true
  },
  {
    id: 19,
    name: "Security Camera System",
    price: 299.99,
    rating: 4.5,
    reviews: 1432,
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=500",
    category: "Home & Garden",
    description: "Complete home security system with 1080p cameras and mobile app.",
    inStock: true,
    fastShipping: false
  },
  {
    id: 20,
    name: "Professional Headset",
    price: 199.99,
    rating: 4.7,
    reviews: 3214,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500",
    category: "Audio",
    badge: "Pro",
    description: "Professional headset for gaming and video calls with crystal clear audio.",
    inStock: true,
    fastShipping: true
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "All") return products;
  return products.filter(product => product.category === category);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  );
};