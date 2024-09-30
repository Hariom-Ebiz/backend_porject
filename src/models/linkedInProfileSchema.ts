import mongoose from "mongoose";


// 1. Define an interface for the document
export interface NumberData {
    name: string;
    number: number;
    work: string;
    position: string;
    address: string;
    nickname: string;
    website: string;
    birthday: string;
    relationship: string;
    note: string;
}


// create the schema corrosponding to the interface
const numberDataSchema = new mongoose.Schema({
    name: { type: String, required: true },

    number: { type: Number, required: true },
    work: { type: String },
    position: { type: String },
    address: { type: String, },
    nickname: { type: String },
    website: { type: String },
    birthday: { type: String },
    relationship: { type: String },
    note: { type: String },


},
    { timestamps: true }
)
// 3. Create the model from the schema and interface

const profileData: mongoose.Model<NumberData> = mongoose.model<NumberData>("NumberData", numberDataSchema);

export default profileData;

