import { Router } from "express";
import { pool } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { error } from "console";

dotenv.config();

const router = Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Get admin from DB
    const [rows]: any = await pool.query(
      "SELECT * FROM admin WHERE email = ?",
      [email],
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: "Admin not found" });
    }

    const admin = rows[0];

    // Compare password
    const valid = await bcrypt.compare(password, admin.password);

    if (!valid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: admin.id, email: admin.email },
      process.env.JWT_SECRET!,
      {
        expiresIn: "1d",
      },
    );

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

console.log("Auth Tokken", process.env.JWT_SECRET);

export default router;
