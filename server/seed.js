import Database from "better-sqlite3";

const db = new Database('database.db')

db.exec(`CREATE TABLE IF NOT EXISTS movies ( 
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    movie TEXT,
    year INTEGER,
    imgURL TEXT
)`);


db.exec(`
INSERT into movies (movie, year, imgURL)
VALUES
('Home Sweet Home', 2016, 'https://posters.movieposterdb.com/21_11/2016/6072388/l_6072388_52c716ab.jpg'),
('Book of life', 2014, 'https://posters.movieposterdb.com/14_11/2014/2262227/l_2262227_9096902a.jpg'),
('Happy', 2017, 'https://posters.movieposterdb.com/20_01/2017/2452242/l_2452242_27d9e598.jpg')
`);