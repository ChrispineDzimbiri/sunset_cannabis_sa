import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="group overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border-border/50 hover:border-primary/30 h-full">
        <CardContent className="p-0">
          {/* Image */}
          <div className="relative h-64 overflow-hidden bg-muted rounded-lg">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {product.featured && (
              <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">Featured</Badge>
            )}
          </div>

          {/* Content */}
          <div className="p-6 space-y-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors text-pretty">
                {product.name}
              </h3>
              <Badge variant="outline" className="capitalize shrink-0">
                {product.category}
              </Badge>
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{product.description}</p>

            {/* <CHANGE> Removed price display, only showing seller name */}
            <div className="flex items-center justify-end pt-2">
              <span className="text-xs text-muted-foreground">by {product.seller.name}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
