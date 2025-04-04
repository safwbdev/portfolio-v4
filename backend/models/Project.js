import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        default: 'DESC TBA',
    },
    stack: {
        type: [String],
        default: [],
    },
    github: {
        type: String,
        default: null,
    },
    demo: {
        type: String,
        default: null,
    },
    type: {
        type: String,
        default: null,
    },
    img: {
        type: [String],
        default: [],
    },
    featured: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true })

export default mongoose.model('Project', ProjectSchema)