const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        db.run(`CREATE TABLE IF NOT EXISTS clients (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            age INTEGER NOT NULL,
            symptoms TEXT NOT NULL
        )`, (err) => {
            if (err) {
                console.error('Error creating database tables:', err.message);
            }else{
                console.log('Database tables created successfully.');
            }
        });
    }
});

module.exports = db;