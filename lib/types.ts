export type Category = "accessories" | "medical" | "edibles" | "oils" | "seeds"

export interface Product {
  id: string
  name: string
  category: Category
  price: number
  description: string
  longDescription: string
  image: string
  seller: {
    name: string
    whatsapp: string
  }
  featured?: boolean
  isSoldOut?: boolean
}

export interface CategoryInfo {
  name: string
  slug: Category
  description: string
  icon: string
}
