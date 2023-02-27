require("dotenv").config();
const express = require("express");
const fs = require("fs");
const https = require("https");
const app = express();
const port = process.env.PORT || 3001;
const key = fs.readFileSync(process.env.CERT_KEY, "utf-8");
const cert = fs.readFileSync(process.env.CERT, "utf-8");
const apiRoutes = require("./routes/api");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", apiRoutes);

https.createServer({ key, cert }, app).listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
