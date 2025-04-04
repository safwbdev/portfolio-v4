import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
    position: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        default: 'NA',
    },
    desc: {
        type: String,
        default: 'DESC TBA',
    },
    yearStart: {
        type: String,
        required: true,
    },
    yearEnd: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
}, { timestamps: true })

export default mongoose.model('Experience', ExperienceSchema)