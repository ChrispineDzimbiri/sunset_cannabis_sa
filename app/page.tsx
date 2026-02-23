"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, ShieldCheck, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { CategoryCard } from "@/components/category-card"
import { categories } from "@/lib/data"
import type { Product } from "@/lib/types"

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products") // fetch from your backend
        const data = await res.json()

        // normalize seller object so product.seller.name works
        const normalized = data.map((p: any) => ({
          ...p,
          seller: { name: p.seller_name, whatsapp: p.whatsapp },
        }))

        setFeaturedProducts(normalized.slice(0, 6)) // show top 6 featured products
      } catch (err) {
        console.error("Error fetching featured products:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchFeatured()
  }, [])

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading featured products...</p>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/hero-cannabis-landscape.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(34,197,94,0.08),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground">Premium Cannabis Marketplace</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-poppins)] text-balance">
              Discover{" "}
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-400">
                Premium Cannabis
              </span>{" "}
              in South Africa
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Connect with trusted sellers offering premium cannabis products, accessories, and more. Your gateway to quality and authenticity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/products">
                  Browse Products
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span>Trusted Sellers</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-5 w-5 text-primary" />
                <span>Active Community</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="h-5 w-5 text-primary" />
                <span>Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our hand-picked selection of premium cannabis products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] mb-4">
              Shop by Category
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of cannabis products and accessories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <ShieldCheck className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)]">Important Information</h3>
            <p className="text-muted-foreground leading-relaxed">
              Sunset Cannabis is a product discovery platform. We do not process payments or handle transactions. All purchases and negotiations happen directly between buyers and sellers via WhatsApp. For adults 18+ only.
            </p>
            <Button asChild variant="link">
              <Link href="/terms">Read Our Terms & Disclaimer</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
