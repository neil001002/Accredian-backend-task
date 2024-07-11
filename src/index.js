const express = require("express");
const bodyParser = require("body-parser");
const referralRoutes = require("./routes/referral");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/referrals", referralRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
