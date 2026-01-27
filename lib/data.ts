import type { Product, CategoryInfo, Category } from "./types"

export const categories: CategoryInfo[] = [
  {
    name: "Accessories",
    slug: "accessories",
    description: "Premium rolling papers, grinders, vapes, and more",
    icon: "Package",
  },
  {
    name: "Medical",
    slug: "medical",
    description: "Premium strains including Sativa, Blue Cheese, and more",
    icon: "Leaf",
  },
  {
    name: "Edibles",
    slug: "edibles",
    description: "Delicious cannabis-infused treats and snacks",
    icon: "Cookie",
  },
  {
    name: "Oils",
    slug: "oils",
    description: "High-quality CBD and cannabis oils",
    icon: "Droplets",
  },
  {
    name: "Seeds",
    slug: "seeds",
    description: "Premium cannabis seeds for cultivation",
    icon: "Sprout",
  },
]

export const products: Product[] = [
  // Medical
  {
    id: "1",
    name: "Blue Cheese Premium",
    category: "medical",
    price: 250,
    description: "Premium Blue Cheese strain with rich aroma",
    longDescription:
      "Blue Cheese is a premium indica-dominant hybrid strain known for its distinctive aroma and relaxing effects. Perfect for evening use, this strain offers a unique blend of fruity and cheesy notes that create an unforgettable experience.",
    image: "/blue-cheese-cannabis-buds.jpg",
    seller: {
      name: "Green Valley Growers",
      whatsapp: "+27738896698",
    },
    featured: true,
  },
  {
    id: "2",
    name: "Tropical Cherry Sativa",
    category: "medical",
    price: 280,
    description: "Energizing sativa with tropical notes",
    longDescription:
      "Tropical Cherry is a sativa-dominant strain that delivers an uplifting and energetic high. With its sweet tropical flavor profile and cherry undertones, this strain is perfect for daytime use and creative activities.",
    image: "/tropical-cannabis-buds.jpg",
    seller: {
      name: "Sunset Cultivators",
      whatsapp: "+27738896698",
    },
    featured: true,
  },
  {
    id: "3",
    name: "OG Kush Classic",
    category: "medical",
    price: 300,
    description: "Classic OG Kush, legendary strain",
    longDescription:
      "OG Kush is one of the most recognized and beloved strains in the cannabis world. Known for its potent effects and distinctive pine and earth aroma, this strain offers a balanced high that's perfect for relaxation.",
    image: "/og-kush-cannabis.png",
    seller: {
      name: "Premium Reserve",
      whatsapp: "+27738896698",
    },
  },
  {
    id: "4",
    name: "Purple Haze",
    category: "medical",
    price: 275,
    description: "Legendary Purple Haze strain",
    longDescription:
      "Purple Haze is a legendary sativa strain that delivers a dreamy, euphoric high. Named for its vibrant purple hues, this strain offers sweet berry flavors and an uplifting cerebral buzz that's perfect for social situations.",
    image: "/purple-cannabis-strain.jpg",
    seller: {
      name: "Mountain High Farms",
      whatsapp: "+27738896698",
    },
  },

  // Accessories
  {
    id: "5",
    name: "Premium Herb Grinder",
    category: "accessories",
    price: 150,
    description: "Aircraft-grade aluminum grinder",
    longDescription:
      "This premium 4-piece herb grinder is made from aircraft-grade aluminum with diamond-cut teeth for the perfect grind every time. Features a pollen catcher and magnetic lid for convenience.",
    image: "/cannabis-grinder-aluminum.jpg",
    seller: {
      name: "Accessory Hub",
      whatsapp: "+27738896698",
    },
    featured: true,
  },
  {
    id: "6",
    name: "Glass Water Pipe",
    category: "accessories",
    price: 450,
    description: "Hand-blown borosilicate glass",
    longDescription:
      "Beautiful hand-blown borosilicate glass water pipe with ice catcher and diffused downstem. Provides smooth, cool hits every time. Easy to clean and durable.",
    image: "/glass-water-pipe-bong.png",
    seller: {
      name: "Glass Art Collective",
      whatsapp: "+27738896698",
    },
  },
  {
    id: "7",
    name: "Rolling Papers Pack",
    category: "accessories",
    price: 45,
    description: "Organic hemp rolling papers, 50 pack",
    longDescription:
      "Premium organic hemp rolling papers made from sustainable sources. Slow-burning and chemical-free for a pure smoking experience. Pack of 50 papers.",
    image: "/rolling-papers-pack.jpg",
    seller: {
      name: "Smoke Shop SA",
      whatsapp: "+27738896698",
    },
  },
  {
    id: "8",
    name: "Portable Vaporizer",
    category: "accessories",
    price: 850,
    description: "Discreet portable herb vaporizer",
    longDescription:
      "State-of-the-art portable vaporizer with precise temperature control and long battery life. Discreet design perfect for on-the-go use. Includes cleaning kit and carrying case.",
    image: "/portable-vaporizer-pen.jpg",
    seller: {
      name: "Vape Nation",
      whatsapp: "+27738896698",
    },
    featured: true,
  },

  // Edibles
  {
    id: "9",
    name: "Cannabis Gummies",
    category: "edibles",
    price: 120,
    description: "10mg THC per gummy, 10 pack",
    longDescription:
      "Delicious fruit-flavored cannabis gummies with 10mg THC per piece. Precisely dosed for consistent effects. Perfect for beginners and experienced users alike. Pack of 10.",
    image: "/cannabis-gummy-bears.png",
    seller: {
      name: "Edibles Express",
      whatsapp: "+27738896698",
    },
  },
  {
    id: "10",
    name: "Chocolate Brownies",
    category: "edibles",
    price: 95,
    description: "Rich chocolate brownies, 50mg THC",
    longDescription:
      "Decadent chocolate brownies infused with 50mg THC. Made with premium cocoa and natural ingredients. Each brownie is individually wrapped for freshness.",
    image: "/cannabis-brownies-chocolate.jpg",
    seller: {
      name: "Baked Goods Co",
      whatsapp: "+27738896698",
    },
  },
  {
    id: "11",
    name: "Cannabis Cookies",
    category: "edibles",
    price: 85,
    description: "Homemade cookies, 25mg THC each",
    longDescription:
      "Freshly baked homemade cookies infused with 25mg THC. Available in chocolate chip, oatmeal, and peanut butter varieties. Baked with love and care.",
    image: "/cannabis-cookies.jpg",
    seller: {
      name: "Cookie Kingdom",
      whatsapp: "+27738896698",
    },
  },

  // Oils
  {
    id: "12",
    name: "CBD Oil 1000mg",
    category: "oils",
    price: 350,
    description: "Full-spectrum CBD oil, 30ml",
    longDescription:
      "Premium full-spectrum CBD oil containing 1000mg CBD per 30ml bottle. Made from organically grown hemp using CO2 extraction. Includes natural terpenes for enhanced benefits.",
    image: "/cbd-oil-bottle-dropper.jpg",
    seller: {
      name: "Pure Wellness",
      whatsapp: "+27738896698",
    },
  },
  {
    id: "13",
    name: "THC Tincture",
    category: "oils",
    price: 400,
    description: "High-potency THC tincture, 500mg",
    longDescription:
      "High-potency THC tincture with 500mg per bottle. Easy to dose with included dropper. Fast-acting sublingual absorption for quick effects. Great for medicinal use.",
    image: "/cannabis-tincture-bottle.jpg",
    seller: {
      name: "Herbal Remedies",
      whatsapp: "+27738896698",
    },
  },

  // Seeds
  {
    id: "14",
    name: "Feminized Seeds Pack",
    category: "seeds",
    price: 200,
    description: "5 premium feminized seeds",
    longDescription:
      "Pack of 5 premium feminized cannabis seeds guaranteed to produce female plants. High germination rate and stable genetics. Perfect for home cultivation.",
    image: "/cannabis-seeds.png",
    seller: {
      name: "Seed Bank SA",
      whatsapp: "+27738896698",
    },
  },
  {
    id: "15",
    name: "Autoflower Seeds",
    category: "seeds",
    price: 180,
    description: "Fast-growing autoflower variety, 5 seeds",
    longDescription:
      "Fast-growing autoflower seeds that don't require light cycle changes. Perfect for beginners and quick harvests. Pack of 5 seeds with grow guide included.",
    image: "/cannabis-autoflower-seeds.jpg",
    seller: {
      name: "Auto Genetics",
      whatsapp: "+27738896698",
    },
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getCategoryInfo(slug: string): CategoryInfo | undefined {
  return categories.find((c) => c.slug === slug)
}
