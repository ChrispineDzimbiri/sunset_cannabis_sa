// src/routes/publicProducts.ts
import { Router } from "express"
import { pool } from "../db"


const router = Router()

// GET all products for public view
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM products WHERE isSoldOut=0 ORDER BY id DESC")
    res.json(rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error" })
  }
})

export default router
