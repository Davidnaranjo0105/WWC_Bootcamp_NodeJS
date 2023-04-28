require("dotenv").config();
const mongoose = require("mongoose"); // Librería de node para escribir consultas para base de datos de MongoDB

const express = require("express"),
  PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use("/", require("./routes"));

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_LOCAL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }).then(()=>console.log('CONEXIÓN A MONGO'));

    app.listen(PORT, () => {
      console.log(`Aplicacion corriendo en el puerto: `, PORT);
    });

    
  } catch (e) {
    console.error('El error de conexión es: ' + e);
    process.exit(1); // Forzar el cierre de algo en JS
  }
};

start();
