# EXERCÍCIO 1

a) A chave estrangeira, ou foreign key, é aQuela Que retrata o relacionamento entre tabelas. Ou seja,  a chave estrangeira é uma referência em uma tabela a uma chave primária de outra tabela.

b)  INSERT INTO Rating (id, comment, rate, movies_id) 
    VALUES
    ("002","O filme é muito engraçado.", 8,"003"),
    ("003","Atuação de Glória e Tony foram perfeitas.",10,"002"),
    ("004","Filme divertidissímo.", 9,"003");

c)  INSERT INTO Rating (id, comment, rate, movies_id) 
    VALUES
    ("001","Gostei do filme principalmente do nível do humor.", 9,"001");

    Conforme atividade da aula45, o id da tabela Movies foi deletado e resolvi utilizar o mesmo para teste.
    O erro apresentado foi o abaixo, Que corresponde ao fato de não ter encontrado o id_Movies: 001 :
    Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`cruz-2114392-dayane-lang`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movies_id`) REFERENCES `Movies` (`id`))

d) ALTER TABLE Movie DROP COLUMN rating;

e) ALTER TABLE Movies
   DROP FOREIGN KEY movies_id;

   Error Code: 1091. Can't DROP 'movies_id'; check that column/key exists

   O erro informou que não é possível deletar um filme.

  ******************************************************* 
# EXERCÍCIO 2

a) 