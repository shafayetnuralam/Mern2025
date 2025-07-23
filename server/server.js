const express = require('express');
const app = express();


app.get(
    "/",
    (req, res) => {
        res.status(200).send("Hello, World!");
    }
);

app.get("/register", (req, res) => {
    res.status(200).send("Register Page");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});