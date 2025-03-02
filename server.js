const express = require("express");
const cors = require("cors");

const server = express();
const PORT = 6002;

server.use(cors());

server.use("/get", require("./routes/getImages"));

server.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
