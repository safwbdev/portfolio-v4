import mongoose from "mongoose";

const CertifictionSchema = new mongoose.Schema({
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
    date: {
        type: String,
        default: null,
    },
}, { timestamps: true })

export default mongoose.model('Certifiction', CertifictionSchema)
