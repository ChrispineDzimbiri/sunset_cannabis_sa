import { Router } from "express"
import { pool } from "../db"
import jwt from "jsonwebtoken"
import multer from "multer"

const router = Router()

// -----------------------------------
// MULTER CONFIG
// -----------------------------------
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "uploads/")
  },
  filename: (_req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  },
})

const upload = multer({ storage })

// -----------------------------------
// AUTH MIDDLEWARE
// -----------------------------------
const authMiddleware = (req: any, res: any, next: any) => {
  const authHeader = req.headers["authorization"]
  if (!authHeader) return res.status(401).json({ message: "Unauthorized" })

  const token = authHeader.split(" ")[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!)
    req.admin = decoded
    next()
  } catch {
    return res.status(403).json({ message: "Invalid token" })
  }
}

// -----------------------------------
// GET ALL PRODUCTS (PUBLIC)
// -----------------------------------
router.get("/", async (_req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM products ORDER BY id DESC"
    )
    res.json(rows)
  } catch (err) {
    console.error("GET ERROR:", err)
    res.status(500).json({ message: "Server error" })
  }
})

// -----------------------------------
// CREATE PRODUCT
// -----------------------------------
router.post(
  "/",
  authMiddleware,
  upload.single("image"), // ⭐ IMPORTANT
  async (req, res) => {

    console.log("BODY RECEIVED:", req.body)

    const {
      name,
      category,
      price,
      Short_desc,
      long_desc,
      seller_name,
      whatsapp,
      
    } = req.body

    const imagePath = req.file
      ? `uploads/${req.file.filename}`
      : ""

    try {
      const [result]: any = await pool.query(
        `INSERT INTO products
        (name, category, price, Short_desc, long_desc, image, seller_name, whatsapp, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          name,
          category,
          price,
          Short_desc || "",
          long_desc || "",
          imagePath,
          seller_name,
          whatsapp,
          false,
        ]
      )

      res.status(201).json({
        message: "Product added",
        id: result.insertId,
      })
    } catch (err) {
      console.error("POST ERROR:", err)
      res.status(500).json({ message: "Server error" })
    }
  }
)

// -----------------------------------
// DELETE PRODUCT
// -----------------------------------
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await pool.query("DELETE FROM products WHERE id=?", [req.params.id])
    res.json({ message: "Product deleted" })
  } catch (err) {
    console.error("DELETE ERROR:", err)
    res.status(500).json({ message: "Server error" })
  }
})

// -----------------------------------
// TOGGLE SOLD OUT
// -----------------------------------
router.patch("/:id/status", authMiddleware, async (req, res) => {
  const isSoldOut = req.body.status === "sold_out"

  try {
    await pool.query(
      "UPDATE products SET is_sold_out=? WHERE id=?",
      [isSoldOut, req.params.id]
    )

    res.json({ message: "Status updated" })
  } catch (err) {
    console.error("PATCH ERROR:", err)
    res.status(500).json({ message: "Server error" })
  }
})

export default router
