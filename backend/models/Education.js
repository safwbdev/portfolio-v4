import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    school: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        default: null,
    },
}, { timestamps: true })

export default mongoose.model('Education', EducationSchema)