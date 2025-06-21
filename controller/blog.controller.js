const Blog = require("../models/Blog")

const getBlog = async (req, res) => {
    const result = await Blog.find()
    res.json({ massage: "fetch blog success", result })
}
const addBlog = async (req, res) => {
    await Blog.create(req.body)
    res.json({ massage: "create blog success" })
}
const updateBlog = async (req, res) => {
    await Blog.findByIdAndUpdate(req.params.tid, req.body)
    res.json({ massage: "modify blog success" })
}
const deleteBlog = async (req, res) => {
    await Blog.findByIdAndDelete(req.params.tid)
    res.json({ massage: "delete blog success" })
}
module.exports = { getBlog, addBlog, updateBlog, deleteBlog }