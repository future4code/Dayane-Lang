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

a)  SELECT * FROM Movies 
    INNER JOIN Rating ON Movies.id = Rating.movies_id;

    Com essa Query, toda a tabela Movies foi selecionada com informações da tabela Rating, sendo Que a Rating trouxe o seu movies_id relacionado com o Movies.id.

b)  SELECT m.id as movies_id, title, r.rate as rating FROM Movies m
    INNER JOIN Rating r ON m.id = r.movies_id;

******************************************************* 
 ### DESAFIOS ###
******************************************************* 
# EXERCÍCIO 4

a)  SELECT m.id as movies_id, title, r.rate as rating FROM Movies m
    INNER JOIN Rating r ON m.id = r.movies_id;

b)  SELECT m.id as movies_id, m.title, mc.actor_id FROM Movies m
    RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;

c)  SELECT AVG(r.rate), m.id, m.title FROM Movies m
    LEFT JOIN Rating r ON m.id = r.movies_id;

******************************************************* 
# EXERCÍCIO 5

a) A query junta as informações da tabela Movies com as da tabela MovieCast e relaciona-as entre si através das colunas   id e movie_id. É necessário usar o JOIN duas vezes para Que a tabela Actor necessita das informações da tabela MovieCast, que por sua vez também necessita das informações da tabela Movies.

b)  SELECT Movies.id AS movie_id, Movies.title AS movie_title, Actor.id AS actor_id, Actor.name AS actor_name
    FROM Movies
    LEFT JOIN MovieCast
    ON Movies.id = MovieCast.movie_id
    JOIN Actor ON Actor.id = MovieCast.actor_id;

c)  SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movies m
    LEFT JOIN MovieCast mc ON m.id = mc.movie_id
    JOIN Actor a ON a.id = mc.actor_id;

    Error Code: 1054. Unknown column 'm' in 'field list'

    Esse erro ocorreu pois ao selecionar a coluna "m" a mesma não foi encontrada.

d)  SELECT Movies.id AS movie_id, Movies.title AS movie_title, 
	       Rating.comment AS comment, Rating.rate AS rate, Actor.id AS actor_id, Actor.name AS actor_name
    FROM Movies
    LEFT JOIN Rating ON Movies.id = Rating.movies_id
    LEFT JOIN MovieCast ON Movies.id = MovieCast.movie_id
    JOIN Actor ON Actor.id = MovieCast.actor_id;

******************************************************* 
# EXERCÍCIO 6

a) A relação é N:M porque vários prêmios de Oscar que podem se relacionar com vários filmes.

b)  CREATE TABLE Oscar (
        id VARCHAR(255) PRIMARY KEY,
        name_award VARCHAR(255) NOT NULL,
        date_award DATE NOT NULL
    );

    INSERT INTO Oscar
    VALUES
    ('01', 'Óscar de melhor filme', '2021/01/31'),
    ('02', 'Óscar de melhor direção', '2020/01/28');

    CREATE TABLE MovieAwards (
        movie_id VARCHAR(255),
        oscar_id VARCHAR(255),
        FOREIGN KEY (movie_id) REFERENCES Movies(id),
        FOREIGN KEY (oscar_id) REFERENCES Oscar(id)
    );

c)  INSERT INTO MovieAwards
    VALUES
    ("001", "02"), 
    ("001", "01"),
    ("002", "02"), 
    ('002', '01'),
    ('003', '02'), 
    ('003', '01'),
    ('004', '02'), 
    ('004', '01');

d)  SELECT Movies.title AS movie_title, Oscar.name_award
    FROM MovieAwards
    RIGHT JOIN Movies
    ON MovieAwards.movie_id = Movies.id
    JOIN Oscar
    ON MovieAwards.oscar_id = Oscar.id;