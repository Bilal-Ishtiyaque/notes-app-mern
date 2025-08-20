import Note from "../models/Note.js";
import mongoose from "mongoose";

export async function getAllNotes(_, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error In getAllNotes controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getNoteById(req, res) {
    try {

        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid note ID" });
        }

        const note = await Note.findById(id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(note);
    } catch (error) {
        console.error("Error In getNoteById controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function createNote(req, res) {
    try {
        const { title, content } = req.body;

        if (!title || !content || !title.trim() || !content.trim()) {
            return res.status(400).json({ message: "Cannot submit empty fields" });
        }

        const newNote = new Note({ title, content });

        await newNote.save();
        res.status(201).json({ message: "Note Created Successfully!" });
    } catch (error) {
        console.error("Error in createNote controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function updateNote(req, res) {
    try {
        const { title, content } = req.body;
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid ID format' });
        }

        if (!title || !content || !title.trim() || !content.trim()) {
            return res.status(400).json({ message: "Cannot submit empty fields" });
        }

        const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true, runValidators: true });

        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json({ message: "Note updated successfully!" });

    } catch (error) {
        console.error("Error in updateNote controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function deleteNote(req, res) {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid note ID" });
        }

        const deletedNote = await Note.findByIdAndDelete(id);

        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json({ message: "Note deleted successfully!" });
    } catch (error) {
        console.error("Error in deleteNote controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
