import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  ShoppingCart, 
  Plus, 
  Minus, 
  Package,
  Wrench,
  Droplets,
  Shield
} from "lucide-react";

// Mock product data with real images and Indian market pricing
const products = [
  // Hardware
  { id: 1, name: "Industrial Floor Scrubber FS-500", category: "hardware", price: 24999, unit: "unit", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop", sku: "KLZ-FS-500" },
  { id: 2, name: "Commercial Vacuum Cleaner Pro", category: "hardware", price: 6499, unit: "unit", image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop", sku: "KLZ-VC-PRO" },
  { id: 3, name: "High-Pressure Washer 2000 PSI", category: "hardware", price: 14999, unit: "unit", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop", sku: "KLZ-PW-2K" },
  { id: 4, name: "Microfiber Mop System Set", category: "hardware", price: 1299, unit: "set", image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=400&fit=crop", sku: "KLZ-MMS-01" },
  // Chemicals
  { id: 5, name: "Premium Black Phenyl (20L)", category: "chemicals", price: 349, unit: "can", image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&h=400&fit=crop", sku: "KLZ-PH-20L" },
  { id: 6, name: "Glass Cleaner Concentrate (5L)", category: "chemicals", price: 189, unit: "bottle", image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&h=400&fit=crop", sku: "KLZ-GC-5L" },
  { id: 7, name: "Industrial Detergent Powder (25kg)", category: "chemicals", price: 599, unit: "bag", image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=400&fit=crop", sku: "KLZ-DP-25K" },
  { id: 8, name: "Surface Sanitizer (5L)", category: "chemicals", price: 279, unit: "bottle", image: "https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?w=400&h=400&fit=crop", sku: "KLZ-SS-5L" },
  { id: 9, name: "Floor Cleaner Liquid (20L)", category: "chemicals", price: 449, unit: "can", image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=400&fit=crop", sku: "KLZ-FC-20L" },
  { id: 10, name: "Toilet Bowl Cleaner (5L)", category: "chemicals", price: 149, unit: "bottle", image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&h=400&fit=crop", sku: "KLZ-TC-5L" },
  // Safety
  { id: 11, name: "Safety Gloves (Box of 100)", category: "safety", price: 299, unit: "box", image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=400&fit=crop", sku: "KLZ-SG-100" },
  { id: 12, name: "Safety Goggles", category: "safety", price: 99, unit: "pair", image: "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c76?w=400&h=400&fit=crop", sku: "KLZ-GO-01" },
];

const categories = [
  { id: "all", name: "All Products", icon: Package },
  { id: "hardware", name: "Industrial Hardware", icon: Wrench },
  { id: "chemicals", name: "Cleaning Chemicals", icon: Droplets },
  { id: "safety", name: "Safety Gear", icon: Shield },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [bulkMode, setBulkMode] = useState(false);
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const updateQuantity = (productId: number, delta: number) => {
    setQuantities((prev) => {
      const current = prev[productId] || 0;
      const newQty = Math.max(0, current + delta);
      return { ...prev, [productId]: newQty };
    });
  };

  const setQuantity = (productId: number, value: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(0, value),
    }));
  };

  const totalItems = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
  const totalValue = Object.entries(quantities).reduce((sum, [id, qty]) => {
    const product = products.find((p) => p.id === parseInt(id));
    return sum + (product?.price || 0) * qty;
  }, 0);

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="klenzo-container">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
              B2B Catalog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Browse our complete range of commercial cleaning supplies. Enable Bulk Order mode for faster procurement.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col lg:flex-row gap-4 mb-8"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by product name or SKU..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <Button
              variant={bulkMode ? "cta" : "outline"}
              size="lg"
              onClick={() => setBulkMode(!bulkMode)}
              className="gap-2"
            >
              <Filter className="h-5 w-5" />
              {bulkMode ? "Bulk Mode ON" : "Enable Bulk Mode"}
            </Button>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-klenzo"
                      : "bg-muted text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </button>
              );
            })}
          </motion.div>

          {/* Bulk Order Summary Bar */}
          {bulkMode && totalItems > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="sticky top-20 z-40 bg-accent text-accent-foreground rounded-lg p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-klenzo-lg"
            >
              <div className="flex items-center gap-4">
                <ShoppingCart className="h-6 w-6" />
                <div>
                  <p className="font-semibold">{totalItems} items selected</p>
                  <p className="text-sm opacity-90">Total: ₹{totalValue.toLocaleString("en-IN")}</p>
                </div>
              </div>
              <Button variant="heroOutline" size="lg" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10">
                Add All to Cart
              </Button>
            </motion.div>
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                className="klenzo-card overflow-hidden group"
              >
                {/* Product Image Area */}
                <div className="aspect-square bg-muted overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Details */}
                <div className="p-4">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {product.sku}
                  </Badge>
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2 min-h-[48px]">
                    {product.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-2xl font-bold text-primary">₹{product.price.toLocaleString("en-IN")}</span>
                    <span className="text-sm text-muted-foreground">/{product.unit}</span>
                  </div>

                  {/* Quantity Controls or Add to Cart */}
                  {bulkMode ? (
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(product.id, -1)}
                        disabled={!quantities[product.id]}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="number"
                        value={quantities[product.id] || 0}
                        onChange={(e) => setQuantity(product.id, parseInt(e.target.value) || 0)}
                        className="w-20 text-center"
                        min={0}
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(product.id, 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <Button variant="cta" className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your search or category filters</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
