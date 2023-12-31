const express = require("express");
const dotenv = require("dotenv");
const app = express();
const notes = require("./data/note");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound , errorHandler } = require("./middlewares/errorMiddlewares");
dotenv.config();
connectDB();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running");
});
app.get("/api/notes", (req, res) => {
    res.json(notes);
});
app.use("/api/users",userRoutes);
app.use(notFound);
app.use(errorHandler);
// app.get("/api/notes/:id", (req, res) => {
//   const note = notes.find((n) => n._id === req.params.id);
//   res.send(note);
// });
const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`Server started on PORT ${PORT}`));
