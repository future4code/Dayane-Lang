CREATE TABLE `Users_Cookenu` (
  `id` varchar(64) NOT NULL UNIQUE,
  `name` varchar(64) NOT NULL UNIQUE,
  `email` varchar(64) NOT NULL UNIQUE ,
  `password` varchar(255) NOT NULL,
  `role` enum('NORMAL','ADMIN') DEFAULT 'NORMAL',
  PRIMARY KEY (`id`)
); 


CREATE TABLE `Recipes_Cookenu` (
  `id` varchar(64) NOT NULL UNIQUE,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `cratedAt` varchar(255) NOT NULL,
  `user_id` VARCHAR(255) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES Users_Cookenu(id)
  PRIMARY KEY (`id`)
); 