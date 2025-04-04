import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        default: 'DESC TBA',
    },
    stack: {
        type: [String],
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
    },
    img: {
        type: [String],
    },
    featured: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true })

export default mongoose.model('Project', ProjectSchema)