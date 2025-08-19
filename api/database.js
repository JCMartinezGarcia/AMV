const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        // db.run(`CREATE TABLE IF NOT EXISTS users (
        //     id INTEGER PRIMARY KEY AUTOINCREMENT,
        //     name TEXT NOT NULL,
        //     email TEXT UNIQUE NOT NULL
        // )`);
    }
});

module.exports = db;