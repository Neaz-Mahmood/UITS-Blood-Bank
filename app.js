const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const moment = require("moment");

const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const donorsRouter = require("./router/donorsRouter");
const searchRouter = require("./router/searchRouter");

const {
    notFoundHandler,
    errorHandler,
} = require("./middlewares/common/errorHandler");

const app = express();
dotenv.config();

app.locals.moment = moment;

mongoose
    .connect(process.env.MONGO_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("database connection successful!"))
    .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(cookieParser(process.env.COOKIE_SECRET));

app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/donors", donorsRouter);
app.use("/search", searchRouter);

app.use(notFoundHandler);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`app listening to port ${process.env.PORT}`);
});
