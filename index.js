const port = process.env.PORT || 3000;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models'); 


const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Rutas
app.use('/auth', require('./routes/auth'));     // 🔐 rutas de autenticación
app.use('/RolRoutes', require('./routes/RolRoutes'));




// Servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}....`);
});

// Base de datos
db.sequelize
  .sync({ force: false })
  .then(() => console.log('Conexión a la base de datos establecida exitosamente.'))
  .catch((e) => console.log(`Error => ${e}`));
