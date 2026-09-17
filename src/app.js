const express = require("express");

const depreciationRoutes = require("./routes/depreciationRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Asset Depreciation API is running",
  });
});

app.use("/", depreciationRoutes);

module.exports = app;