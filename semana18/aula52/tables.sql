CREATE TABLE `Users_aula51` (
  `id` varchar(64) PRIMARY KEY NOT NULL UNIQUE,
  `email` varchar(64) NOT NULL,
  `password` varchar(255) NOT NULL
);

ALTER TABLE Users_aula51
ADD role enum('NORMAL','ADMIN') DEFAULT 'NORMAL';