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

e) DELETE FROM Rating WHERE rating.Movies = 4;

   Error Code: 1054. Unknown column 'rating.Movies' in 'where clause'

   O erro informou que não é possível deletar tal informação porQue a coluna não foi encontrada.

  ******************************************************* 
# EXERCÍCIO 2

a) CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
   );

   Essa tabela foi relacionada com a tabela Movies e Actor, sendo movie_id e actor_id chaves estrangeiras, e os ids de cada tabela são as chaves primárias. Dessa forma, a tabela apresentará o ator Que trabalhou em cada filme, o Que possibilita um ator ter trabalhado em mais de um filme.

b)  INSERT INTO MovieCast(movie_id, actor_id)
    VALUES
    ("001", "004"),
    ("001", "002"),
    ("004", "006"),
    ("003", "002"),
    ("004", "003"),
    ("002", "005"),
    ("002", "007");

c)  INSERT INTO MovieCast(movie_id, actor_id)
    VALUES
    ("008", "004");

    Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`cruz-2114392-dayane-lang`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))4

    O erro informou Que não é possível adicionar ou atualizar uma linha filha pelo fato da chave estrangeira não corresponder a chave primária(id) da tabela Movies.

d) DELETE FROM Actor WHERE id="001";
    Com essa Query na tabela MovieCast consegui deletar o ator com id = 0001

  ******************************************************* 
# EXERCÍCIO 3

a)