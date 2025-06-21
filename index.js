const express = require("express")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())//req.body parsal

app.use("/api/v1/blog", require("./routes/blog.router"))
mongoose.connect("mongodb://localhost:27017/skillhub")
mongoose.connection.once("open", () => {
    console.log("db connection success")

    app.listen(5000, console.log("server success"))
})
