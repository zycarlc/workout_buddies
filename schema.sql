CREATE DATABASE workoutbuddies;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    title TEXT,
    image_url TEXT,
    online_url TEXT,
    likes INTEGER,
    init_time TEXT,
    edit_time TEXT
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    username TEXT,
    email TEXT,
    password_encrypted TEXT
);
