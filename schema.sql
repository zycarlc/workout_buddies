CREATE DATABASE workoutbuddies;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    title TEXT,
    sport_type TEXT,
    image_url TEXT,
    online_url TEXT,
    workout_description TEXT,
    likes INTEGER,
    begin_datetime TIMESTAMP DEFAULT NULL,
    end_datetime TIMESTAMP DEFAULT NULL,
    init_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    username TEXT,
    email TEXT,
    password_encrypted TEXT
);
