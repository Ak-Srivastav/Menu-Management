/*==============================
core packages
==============================*/
const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
dotenv.config();

/*==============================
include middlewares, custom middlewares, Routes and Database connection
==============================*/
const categoryRoute = require("./routes/categoryRoute");
const subcategoryRoute = require("./routes/subcategoryRoute");
const itemRoute = require("./routes/itemRoute");
const connectDB = require("./config/connectDB");
const HandleNotFound = require("./middlewares/HandleNotFoundMiddleware");
const HandleApiError = require("./middlewares/ApiErrorMiddleware");
const ApiResponse = require("./controllers/response/ApiResponse");

/*==============================
include environment variables
==============================*/
const PORT = process.env.PORT || 3000;

/*==============================
server application configurations
==============================*/
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/*==============================
routes, not found and custom api error handler
==============================*/
app.use("/api/category", categoryRoute); // routes and prefix
app.use("/api/sub-category", subcategoryRoute);
app.use("/api/item", itemRoute);
app.use("/api/test", (req, res) => {
  res.json(ApiResponse("Welcome to Menu - Management"));
});
app.use(HandleNotFound); // Endpoint not found response
app.use(HandleApiError); // Custom API Error handler

/*==============================
public endpoint for file/media access
==============================*/
// app.use("/public", express.static(path.join(__dirname, "public")));

/*==============================
start server listen
==============================*/
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
