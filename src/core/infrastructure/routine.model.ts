import mongoose from "mongoose";
import { RoutineDomain } from "../domain/routine.domain";

export interface RoutineDocument extends Omit<RoutineDomain, 'id'>, mongoose.Document {
    deletedAt?: Date;
}

const routineSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    name: { type: String, required: true },
    description: { type: String, required: false }
}, { timestamps: true, collection: 'routines' });

export const RoutineModel = mongoose.model<RoutineDocument>("Routine", routineSchema);
