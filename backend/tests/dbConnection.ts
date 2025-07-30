import sequelize from '../src/config/dbconfig';
import express from 'express';

const app = express();
const PORT = 3000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection with database established successfully');
    
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Connection with database failed:', error);
    process.exit(1); // opcional: salir si falla la DB
  }
};

startServer();

