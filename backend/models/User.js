import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        default: 'NA',
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        default: 'phone to be added',
    },
    github: {
        type: String,
        default: 'github to be added',
    },
    website: {
        type: String,
        default: 'website to be added',
    },
    linkedin: {
        type: String,
        default: 'linkedin to be added',
    },
    desc: {
        type: String,
        default: 'desc to be added',
    },
    tagline: {
        type: String,
        default: 'tagline to be added',
    },
    location: {
        type: String,
        default: 'location to be added',
    },
    img: {
        type: String,
    },
    phone: {
        type: String,
        default: 'phone to be added',
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, { timestamps: true })

export default mongoose.model('User', UserSchema)