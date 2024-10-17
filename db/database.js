const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('lista-tarefas.db');

db.serialize(() => {
    // Criação da tabela de tarefas
    db.run("CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY, tarefa TEXT)");

    // Criação da tabela de usuários
    db.run(`
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY,
            username TEXT UNIQUE,
            password TEXT,
            role TEXT
        )
    `);
});

module.exports = db;
