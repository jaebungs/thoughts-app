CREATE TABLE thought (
    id TEXT NOT NULL PRIMARY KEY,
    message VARCHAR(400) NOT NULL CHECK (LENGTH(message) >= 5),
    email TEXT NOT NULL,
    username TEXT NOT NULL,
    date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "like" INT DEFAULT 0,
    view INT DEFAULT 0,
    mood INT CHECK (mood >=-100 AND mood <= 100),
    anonymous BOOLEAN
);
