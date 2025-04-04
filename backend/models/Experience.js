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
        default: 'NA',
    },
    yearStart: {
        type: String,
        default: 'present',
    },
    img: {
        type: String,
    },
}, { timestamps: true })

export default mongoose.model('Experience', ExperienceSchema)