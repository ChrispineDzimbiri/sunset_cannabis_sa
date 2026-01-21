"use client"

import type React from "react"

import { useState } from "react"
import { products as initialProducts } from "@/lib/data"
import type { Product, Category } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Pencil, Trash2, Package, ArrowLeft, Upload, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState<Partial<Product>>({
    name: "",
    category: "medical",
    price: 0,
    description: "",
    longDescription: "",
    image: "/placeholder.svg?key=8dm8l",
    seller: { name: "Admin", whatsapp: "27123456789" },
    isSoldOut: false,
  })
  const [imagePreview, setImagePreview] = useState<string>("")

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please upload an image file")
        return
      }
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB")
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        const result = reader.result as string
        setImagePreview(result)
        setFormData({ ...formData, image: result })
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setImagePreview("")
    setFormData({ ...formData, image: "/placeholder.svg?key=default" })
  }

  // CRUD Operations
  const handleAdd = () => {
    const newProduct: Product = {
      ...(formData as Product),
      id: Math.random().toString(36).substr(2, 9),
    }
    setProducts([newProduct, ...products])
    setIsAdding(false)
    resetForm()
  }

  const handleUpdate = () => {
    setProducts(products.map((p) => (p.id === editingId ? { ...p, ...formData } : p)))
    setEditingId(null)
    resetForm()
  }

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id))
    }
  }

  const toggleSoldOut = (id: string) => {
    setProducts(products.map((p) => (p.id === id ? { ...p, isSoldOut: !p.isSoldOut } : p)))
  }

  const resetForm = () => {
    setFormData({
      name: "",
      category: "medical",
      price: 0,
      description: "",
      longDescription: "",
      image: "/placeholder.svg?key=r8weg",
      seller: { name: "Admin", whatsapp: "27123456789" },
      isSoldOut: false,
    })
    setImagePreview("")
  }

  const startEdit = (product: Product) => {
    setFormData(product)
    setEditingId(product.id)
    setIsAdding(true)
    setImagePreview(product.image)
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link
              href="/"
              className="flex items-center text-sm text-muted-foreground hover:text-primary mb-2 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to site
            </Link>
            <h1 className="text-3xl font-bold font-[family-name:var(--font-poppins)]">Admin Dashboard</h1>
          </div>
          <Button
            onClick={() => {
              setIsAdding(true)
              setEditingId(null)
              resetForm()
            }}
            className="gap-2"
          >
            <Plus className="h-4 w-4" /> Add Product
          </Button>
        </div>

        {isAdding && (
          <Card className="mb-12 glass border-primary/20">
            <CardHeader>
              <CardTitle>{editingId ? "Edit Product" : "Add New Product"}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Product Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background/50"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <select
                        id="category"
                        className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value as Category })}
                      >
                        <option value="medical">Medical</option>
                        <option value="accessories">Accessories</option>
                        <option value="edibles">Edibles</option>
                        <option value="oils">Oils</option>
                        <option value="seeds">Seeds</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">Price (R)</Label>
                      <Input
                        id="price"
                        type="number"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Short Description</Label>
                    <Input
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image">Product Image</Label>
                    {imagePreview ? (
                      <div className="relative w-full h-48 rounded-lg overflow-hidden border border-border">
                        <Image src={imagePreview || "/placeholder.svg"} alt="Preview" fill className="object-cover" />
                        <Button
                          variant="destructive"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={removeImage}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                        <input
                          type="file"
                          id="image"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                        <label htmlFor="image" className="cursor-pointer">
                          <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground mb-1">Click to upload image</p>
                          <p className="text-xs text-muted-foreground">PNG, JPG, WEBP (max 5MB)</p>
                        </label>
                      </div>
                    )}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="longDescription">Long Description</Label>
                    <Textarea
                      id="longDescription"
                      rows={6}
                      value={formData.longDescription}
                      onChange={(e) => setFormData({ ...formData, longDescription: e.target.value })}
                      className="bg-background/50"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="sellerName">Seller Name</Label>
                      <Input
                        id="sellerName"
                        value={formData.seller?.name || ""}
                        onChange={(e) =>
                          setFormData({ ...formData, seller: { ...formData.seller!, name: e.target.value } })
                        }
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sellerWhatsapp">WhatsApp Number</Label>
                      <Input
                        id="sellerWhatsapp"
                        value={formData.seller?.whatsapp || ""}
                        onChange={(e) =>
                          setFormData({ ...formData, seller: { ...formData.seller!, whatsapp: e.target.value } })
                        }
                        placeholder="27123456789"
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Button onClick={editingId ? handleUpdate : handleAdd} className="flex-1">
                      {editingId ? "Update Product" : "Save Product"}
                    </Button>
                    <Button variant="outline" onClick={() => setIsAdding(false)} className="flex-1">
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden group hover:border-primary/50 transition-all">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.isSoldOut && (
                  <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                    <span className="text-destructive font-bold text-xl uppercase tracking-wider">Sold Out</span>
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">{product.name}</h3>
                  <span className="text-primary font-semibold">R{product.price}</span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{product.description}</p>

                <div className="flex items-center gap-2 border-t pt-4">
                  <Button variant="outline" size="sm" onClick={() => startEdit(product)} className="flex-1 gap-1">
                    <Pencil className="h-3 w-3" /> Edit
                  </Button>
                  <Button
                    variant={product.isSoldOut ? "secondary" : "outline"}
                    size="sm"
                    onClick={() => toggleSoldOut(product.id)}
                    className="flex-1 gap-1"
                  >
                    <Package className="h-3 w-3" /> {product.isSoldOut ? "Restock" : "Sold Out"}
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(product.id)} className="px-3">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
