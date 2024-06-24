create database IF NOT EXISTS 'files'
CREATE TABLE IF NOT EXISTS history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url VARCHAR(250),
    date DATETIME
);

CREATE TABLE IF NOT EXISTS bookmark (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name varchar(250),
    url VARCHAR(250),
    date DATETIME
);