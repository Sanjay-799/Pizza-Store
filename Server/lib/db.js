const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config(); 

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});



db.connect((err) => {
    if (err) {
        console.log('Error connecting to DB:', err);
        return;
    }
    console.log('Database connected successfully');
});

module.exports = db;
