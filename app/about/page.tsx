import { Leaf, Heart, Shield, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Leaf className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] mb-6">
            About Sunset Cannabis
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            South Africa's premier cannabis discovery platform, connecting buyers with trusted sellers since 2024.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="max-w-4xl mx-auto space-y-12 mb-16">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-foreground">
              Our Story
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Sunset Cannabis was born from a vision to create a safe, reliable, and premium marketplace for cannabis
              enthusiasts in South Africa. We recognized the need for a platform that prioritizes quality, trust, and
              community connection in the evolving cannabis landscape.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We're not just a marketplace, we're a community. Our platform brings together passionate sellers offering
              premium products and discerning buyers looking for quality and authenticity. Every listing on Sunset
              Cannabis represents our commitment to excellence and transparency.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-poppins)] mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-primary/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Trust</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We connect you only with verified, trusted sellers
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Quality</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Only premium products make it to our platform
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Community</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Building connections within the cannabis culture
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Passion</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dedicated to advancing cannabis education and access
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Focus */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-poppins)] mb-4 text-foreground">
              Our Focus
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-4">
              At Sunset Cannabis, we're focused on three key pillars:
            </p>
            <ul className="space-y-2 text-muted-foreground text-lg">
              <li>
                <strong className="text-foreground">Education:</strong> Providing accurate information about cannabis
                products, strains, and responsible use
              </li>
              <li>
                <strong className="text-foreground">Access:</strong> Making it easy to discover and connect with quality
                sellers across South Africa
              </li>
              <li>
                <strong className="text-foreground">Connection:</strong> Building a trusted community of buyers and
                sellers who share our values
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed text-lg mt-6">
              We believe in transparency and safety. That's why we clearly communicate that we're a discovery platform
              only. all transactions happen directly between buyers and sellers. This approach ensures freedom, privacy,
              and direct communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
