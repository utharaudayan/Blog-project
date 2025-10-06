const post = require("../models/Post")



const getPost = async (req, res) => {

    const Post = await post.find({}).sort({ createdAt: -1 })
    return res.json(Post)

}


const getIdPost = async (req, res) => {
    const Poste = await post.findById(req.params.id)
    return res.json(Poste)

}

const postData = async (req, res) => {

    const { title, content, imgurl, autorname, date, category } = req.body

    if (!title || !content || !imgurl) {
        res.json({ message: "this field must be requiere" })
    }
    const newPost = await post.create({ title, content, imgurl, autorname, date,category })

    return res.json(newPost)

}

const editPost = async (req, res) => {
    const { title, content, imgurl, autorname, date,category } = req.body
    let poste = await post.findById(req.params.id)
    try {
        if (poste) {
            await post.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.json(title, content, imgurl, autorname, date,category)
        }
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }

}

const deletePoste = async (req, res) => {
    const { id } = req.params
    await post.findByIdAndDelete(id);
    res.json({ message: "deleted" })
}

module.exports = { getPost, postData, editPost, getIdPost, deletePoste }