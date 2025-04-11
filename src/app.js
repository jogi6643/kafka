const express = require("express");
const cors = require("cors");
const producerRoutes = require("./routes/producerRoutes");
const consumerRoutes = require("./routes/consumerRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/producer", producerRoutes);
app.use("/consumer", consumerRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
