const mongoose = require("mongoose")

const PostModal = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    category: {
        type: String,
        default: "anonymous"

    },
    imgurl: {
        type: String,

    },
    autorname: {
        type: String,
        default: "anonymous"
    },
    date: {
        type: String,

    }
})


module.exports = mongoose.model("Post", PostModal);