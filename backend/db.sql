CREATE TABLE thought (
    id BIGINT NOT NULL PRIMARY KEY,
    message VARCHAR(400) NOT NULL CHECK (LENGTH(message) >= 5),
    email TEXT NOT NULL,
    username TEXT NOT NULL,
    date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "like" INT DEFAULT 0,
    view INT DEFAULT 0,
    mood INT CHECK (mood >=-100 AND mood <= 100),
    anonymous BOOLEAN
);

INSERT INTO thought (id, message, email, username, date, "like", view, mood, anonymous) 
VALUES 
(1, 'This is a test message', 'test1@example.com', 'user1', NOW() - INTERVAL '1 month', 2, 10, 50, false),
(2, 'Hello, world!', 'test2@example.com', 'user2', NOW() - INTERVAL '1 week', 10, 100, 80, true),
(3, 'I love PostgreSQL', 'test3@example.com', 'user3', NOW() - INTERVAL '1 year', 5, 50, 20, false),
(4, 'This message was posted 1 hour ago', 'test4@example.com', 'user4', NOW() - INTERVAL '1 hour', 1, 20, -30, true),
(5, 'This message was posted 1 day ago', 'test5@example.com', 'user5', NOW() - INTERVAL '1 day', 3, 30, 70, false),
(6, 'Another test message', 'test6@example.com', 'user6', NOW(), 0, 5, -80, true);