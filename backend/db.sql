CREATE TABLE thoughts (
    id BIGINT,
    message VARCHAR(200),
    email TEXT,
    username TEXT,
    date TIMESTAMP WITH TIME ZONE,
    "like" INT,
    pass INT,
    mood INT CHECK (mood >=-100 AND mood <= 100)
);