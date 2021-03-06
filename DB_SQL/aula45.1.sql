CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- SHOW TABLE;
-- DESCRIBE Actor;


INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES
( "001", "Tony Ramos", "400000", "1948-08-25", "male"),
( "002", "Glória Pires", "1200000", "1963-08-23", "female"),
( "003", "Fernanda Montenegro", "300000", "1929-10-19", "female"),
( "004", "Antonio Fagundes", "400000", "1949-04-18", "male"),
( "005", "Juliana Paes", "700000", "1979-03-26", "female"),
( "006", "Lima Duarte", "500000", "1929-04-30", "male"),
( "007", "Cássia Kiss", "100000", "1963-10-02", "female");

SET SQL_SAFE_UPDATES = 0;

UPDATE Actor
SET name = "Fernanda Montenegro", birth_date= "1929-04-30"
WHERE id = "003";

UPDATE Actor
SET name = "JULIANA PAES" 
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes" 
WHERE name = "JULIANA PAES";

UPDATE Actor
SET name = "Juliana Paes", salary= "700000", birth_date= "1979-03-26", gender= "female"
WHERE id = "005";

UPDATE Actor
SET jobactual = "As filhas de Joaquina"
WHERE id = "001";

SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor 
WHERE gender = "female";

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT SUM(salary) FROM Actor;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

SELECT id, name FROM Actor 
ORDER BY name DESC;

 SELECT * FROM Actor 
ORDER BY salary ASC;

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

SELECT AVG(salary), gender FROM Actor
GROUP BY gender;