const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./users.db');

// Cria a tabela de usuários se não existir
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )`);
});

module.exports = db;