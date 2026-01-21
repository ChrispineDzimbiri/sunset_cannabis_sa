import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { MessageCircle, ArrowLeft, Package } from "lucide-react"
import { getProductById } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the ${product.name} listed on Sunset Cannabis. Can you provide more information?`,
  )
  const whatsappUrl = `https://wa.me/${product.seller.whatsapp}?text=${whatsappMessage}`

  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.featured && (
                <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">Featured</Badge>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="capitalize mb-4">
                {product.category}
              </Badge>
              <h1 className="text-4xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-balance">
                {product.name}
              </h1>
              {/* <CHANGE> Removed price display */}
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Description</h2>
              <p className="text-muted-foreground leading-relaxed">{product.longDescription}</p>
            </div>

            {/* Seller Info */}
            <Card className="border-primary/20">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Seller</p>
                    <p className="font-semibold text-lg">{product.seller.name}</p>
                  </div>
                </div>

                <Button asChild className="w-full" size="lg">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Contact Seller on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="bg-muted/50 border-border/50">
              <CardContent className="p-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Important:</strong> All purchases and negotiations happen directly between you and the seller
                  via WhatsApp. Sunset Cannabis does not process payments or handle transactions. Please verify product
                  details and arrange payment securely with the seller.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
