import React from "react"
import Link from "next/link"
import { ArrowRight, Package, Leaf, Cookie, Droplets, Sprout } from "lucide-react"
import type { CategoryInfo } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"

interface CategoryCardProps {
  category: CategoryInfo
}

const iconMap: Record<string, React.ReactNode> = {
  Package: <Package className="h-12 w-12" />,
  Leaf: <Leaf className="h-12 w-12" />,
  Cookie: <Cookie className="h-12 w-12" />,
  Droplets: <Droplets className="h-12 w-12" />,
  Sprout: <Sprout className="h-12 w-12" />,
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categories/${category.slug}`}>
      <Card className="group overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border-border/50 hover:border-primary/30 h-full">
        <CardContent className="p-8">
          <div className="space-y-4">
            {/* Icon */}
            <div className="text-primary group-hover:scale-110 transition-transform duration-300">{iconMap[category.icon]}</div>

            {/* Content */}
            <div className="space-y-2">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)] text-foreground group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
            </div>

            {/* Arrow */}
            <div className="flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
              <span>Explore</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
