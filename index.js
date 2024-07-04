const records = require("./routes/records");
const home = require("./routes/home");
const express = require("express");
const app = express();

app.use(express.json());

app.use("/", home);
app.use("/api/records", records);

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on port: ${port}...`));
