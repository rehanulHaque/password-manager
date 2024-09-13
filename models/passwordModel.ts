import mongoose from 'mongoose'

const passwordSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true
    },
    websitelink: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    }
})

export default  mongoose.models?.password || mongoose.model("password", passwordSchema);