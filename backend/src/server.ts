import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";

import authRoutes from "./routes/auth";
import productRoutes from "./routes/products";
import publicProductsRoutes from "./routes/publicProducts";

const app = express();

// -----------------------------------
// MIDDLEWARE
// -----------------------------------
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Ensure uploads folder exists
const uploadsDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Serve images
app.use("/uploads", express.static(uploadsDir));

// -----------------------------------
// ROUTES
// -----------------------------------
app.get("/", (_req, res) => {
  res.send("Backend is running");
});

app.use("/api/public/products", publicProductsRoutes);
app.use("/api/admin", authRoutes);
app.use("/api/products", productRoutes);

// -----------------------------------
// START SERVER
// -----------------------------------
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
