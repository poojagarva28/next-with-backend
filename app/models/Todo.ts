import mongoose, { Document, Schema } from "mongoose";

export interface ITodos extends Document {
    title: string;
    completed: boolean;
}

const productSchema: Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    },
});

const Todo = mongoose.models.Todo || mongoose.model<ITodos>("Todo", productSchema);
export default Todo;