import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// === Create ===
router.post("/note", async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await prisma.note.create({
      data: { title, content },
    });
    res.status(201).send(note);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// === Read ===
// == All Notes ==
router.get("/note", async (req, res) => {
  try {
    const notes = await prisma.note.findMany();
    res.status(200).send(notes);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// == Note by ID ==

// Update

// Delete

export default router;
