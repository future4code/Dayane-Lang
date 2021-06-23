CREATE TABLE `Users_aula51` (
  `id` varchar(64) PRIMARY KEY NOT NULL UNIQUE,
  `email` varchar(64) NOT NULL,
  `password` varchar(255) NOT NULL
);

ALTER TABLE Users_aula51
ADD role enum('NORMAL','ADMIN') DEFAULT 'NORMAL';


  CREATE TABLE Users_Address (
            id VARCHAR(255) PRIMARY KEY UNIQUE,
            street VARCHAR(255) NOT NULL,
            number VARCHAR(64) NOT NULL,
            complement VARCHAR(255),
            neighborhood VARCHAR(255) NOT NULL,
            city VARCHAR(255) ,
            state VARCHAR(255),
            cep VARCHAR(255) NOT NULL,
            user_id VARCHAR(64) UNIQUE NOT NULL,
            FOREIGN KEY (user_id) REFERENCES Users_aula51(id)
            );  