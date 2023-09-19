DROP TABLE IF EXISTS chapters;
DROP TABLE IF EXISTS problem_types;
DROP TABLE IF EXISTS problems;

CREATE TABLE chapters (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL
);

CREATE TABLE problem_types (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE problems (
  id SERIAL PRIMARY KEY,
  problem_type_id INT NOT NULL,
  number TEXT NOT NULL,
  to_play TEXT NOT NULL,
  problem TEXT NOT NULL,
  solutions TEXT NOT NULL
);

INSERT INTO chapters (title, body) VALUES
()