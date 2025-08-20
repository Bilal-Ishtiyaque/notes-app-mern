import mongoose from "mongoose";

// 1) create a schema
// 2) create a model based off that schema

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        content: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true //createdAt //updatedAt
    }
);

const Note = new mongoose.model("Note", noteSchema); // I'll be using this model/Note to interact with Notes in the database

export default Note; 