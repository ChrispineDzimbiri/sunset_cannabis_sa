import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getProductsByCategory, getCategoryInfo } from "@/lib/data"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import type { Category } from "@/lib/types"

interface CategoryPageProps {
  params: Promise<{ category: string }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  const categoryInfo = getCategoryInfo(category)

  if (!categoryInfo) {
    notFound()
  }

  const products = getProductsByCategory(categoryInfo.slug as Category)

  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        {/* Category Header */}
        <div className="mb-12 text-center">
          <div className="text-6xl mb-4">{categoryInfo.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-4 capitalize">
            {categoryInfo.name}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{categoryInfo.description}</p>
        </div>

        {/* Products Count */}
        <p className="text-sm text-muted-foreground mb-6">
          {products.length} {products.length === 1 ? "product" : "products"} available
        </p>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products available in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}
