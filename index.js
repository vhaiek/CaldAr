const express = require("express");
const app = express ();
const PORT = process.env.PORT || 5000

app.use("/api/companies",require("./controllers/companies"));
app.listen(PORT, () => console.log("Server started"));