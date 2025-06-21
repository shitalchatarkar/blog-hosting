const { getBlog, addBlog, updateBlog, deleteBlog } = require("../controller/blog.controller")

const router = require("express").Router()
router
    .get("/", getBlog)
    .post("/create", addBlog)
    .put("/modify/:tid", updateBlog)
    .delete("/remove/:tid", deleteBlog)
module.exports = router