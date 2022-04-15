import express from "express";

const app = express();
const PORT = process.env.port || 3000;

app.get("/", (req, res) => {
    res.send("Hello!")
})

app.listen(PORT, () => console.info(`Listening on ${PORT}!`));
