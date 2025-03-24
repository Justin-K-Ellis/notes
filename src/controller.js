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
router.get("/note/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const note = await prisma.note.findUnique({
      where: { id: id },
    });
    res.status(200).send(note);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("*", (req, res) => {
  res.status(404).send("This resource does not exist.");
});

// Update
router.put("/note", async (req, res) => {
  try {
    const { id, title, content } = req.body;
    const updatedNote = await prisma.note.update({
      where: { id },
      data: { title, content },
    });
    res.status(200).send(updatedNote);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Delete

export default router;
