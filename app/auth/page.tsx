"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Product, Category } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2, Package, ArrowLeft, LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AdminDashboard() {
  const router = useRouter();

  const [products, setProducts] = useState<Product[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");

  const [formData, setFormData] = useState<Partial<Product>>({
    name: "",
    category: "medical",
    price: 0,
    description: "",
    longDescription: "",
    seller: { name: "Admin", whatsapp: "" },
  });

  const token =
    typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;

  // -----------------------------------
  // AUTH
  // -----------------------------------
  useEffect(() => {
    if (!token) router.push("/login");
  }, [token, router]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/login");
  };

  // -----------------------------------
  // FETCH PRODUCTS
  // -----------------------------------
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // -----------------------------------
  // IMAGE PICK
  // -----------------------------------
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Max image size is 5MB");
      return;
    }

    setSelectedFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      category: "medical",
      price: 0,
      description: "",
      longDescription: "",
      seller: { name: "Admin", whatsapp: "" },
    });
    setSelectedFile(null);
    setImagePreview("");
  };

  // -----------------------------------
  // CREATE PRODUCT
  // -----------------------------------
  const handleSubmit = async () => {
    if (!token) return;

    setLoading(true);

    try {
      const form = new FormData();

      form.append("name", formData.name || "");
      form.append("category", formData.category || "");
      form.append("price", String(formData.price || 0));
      form.append("short_desc", formData.description || "");
      form.append("long_desc", formData.longDescription || "");
      form.append("seller_name", formData.seller?.name || "");
      form.append("whatsapp", formData.seller?.whatsapp || "");

      console.log("FORM DATA TO BE SENT:");
      form.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      if (selectedFile) {
        form.append("image", selectedFile);
      }

      await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: form,
      });

      await fetchProducts();
      setIsAdding(false);
      resetForm();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------------
  // DELETE
  // -----------------------------------
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this product?")) return;

    await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    fetchProducts();
  };

  // -----------------------------------
  // SOLD OUT
  // -----------------------------------
  const toggleSoldOut = async (product: Product) => {
    await fetch(`http://localhost:5000/api/products/${product.id}/status`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        status: product.isSoldOut ? "available" : "sold_out",
      }),
    });

    fetchProducts();
  };

  // -----------------------------------
  // UI
  // -----------------------------------
  return (
    <div className="min-h-screen pt-24 pb-12 bg-background">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="flex justify-between mb-8">
          <div>
            <Link href="/" className="flex items-center text-sm">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </Link>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          </div>

          <div className="flex gap-2">
            <Button onClick={() => setIsAdding(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Button>

            <Button variant="destructive" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* FORM */}
        {isAdding && (
          <Card className="mb-10">
            <CardHeader>
              <CardTitle>Add Product</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <Input
                placeholder="Product name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <Input
                placeholder="Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
              <Input
                placeholder="Sellers Number with country code (e.g. +123456789)"
                value={formData.seller?.whatsapp}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    seller: { ...formData.seller, whatsapp: e.target.value },
                  })
                }
              />

              <Textarea
                placeholder="Long description"
                value={formData.longDescription}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    longDescription: e.target.value,
                  })
                }
              />

              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />

              {imagePreview && (
                <Image
                  src={imagePreview}
                  alt="preview"
                  width={200}
                  height={200}
                />
              )}

              <Button onClick={handleSubmit} disabled={loading}>
                {loading ? "Saving..." : "Save Product"}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <Card key={p.id}>
              <CardContent className="p-4">
                <img
                  src={`http://localhost:5000/${p.image}`}
                  className="w-full h-40 object-cover rounded"
                  alt={p.name}
                />
                <h3 className="font-bold mt-2">{p.name}</h3>

                <div className="flex gap-2 mt-4">
                  <Button size="sm" onClick={() => handleDelete(p.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>

                  <Button size="sm" onClick={() => toggleSoldOut(p)}>
                    <Package className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
