const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/", require("./routes/eventRoutes"));

//Handling Error Midddleware
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => console.log(`Server running successfully on http://localhost:${process.env.PORT}`))
        .catch(error => console.log(error))
})

