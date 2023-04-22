require("dotenv").config();
const mongoose = require("mongoose");

const express = require("express"),
  PORT = process.env.PORT || 3000;

const app = express();

console.log("Mongo", process.env.MONGODB_CONNECTION);
app.use("/", require("./routes"));

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION, {
        useNewUrlParser:true,
        useUnifiedTopology: true,

    });

    app.listen(PORT, () => {
      console.log(`Aplicacion corriendo en el puerto: `, PORT);
    });
  } catch (e) {
    console.error(e);
    process.exit(1); // Forzar el cierre de algo en JS
  }
};

start();
