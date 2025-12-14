const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

app.get("/", (req, res) => {
    res.status(200).json({
        service: "Thakur Full Stack Assignment",
        status: "ACTIVE",
        time: new Date()
    })
})

app.use("/", require("./routes/eventRoutes"));

//Handling Error Midddleware
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => console.log(`Server running successfully on http://localhost:${process.env.PORT}`))
        .catch(error => console.log(error))
})

