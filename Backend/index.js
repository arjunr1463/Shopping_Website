const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const { user } = require("./src/api/user");

dotenv.config();
const app = express();

//middleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

require("./config/dbConfig");
const server = http.createServer(app);
const PORT = process.env.PORT || 3001;
user(app);

server.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
