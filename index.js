const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const app = express()
app.use(express.json())//req.body parsal
app.use(express.static("dist"))//req.body parsal
app.use(cors({ origin: "http://localhost:5173" }))

app.use("/api/v1/blog", require("./routes/blog.router"))
mongoose.connect(process.env.MONGODB_URL)
mongoose.connection.once("open", () => {
    console.log("db connection success")

    app.listen(process.env.PORT, console.log("server success"))
})
