**AULA 46- Aprofundamento SQL**

 **- [ ] Exercício 1**
 
 a) A query *DROP COLUMN* irá alterar a tabela ao deletar a coluna salary;
 
 b) A query *ADD TABLE*  irá alterar a tabela ao mudar a variável **gender** para **sex** que receberá no máximo 6 chars;
 
 c) A query *ADD TABLE* irá alterar a tabela manter a coluna**gender**  que receberá no máximo 255 chars (eis a principal mudança).
0
d)  ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
 
 **- [ ] Exercício 2**
 
a) UPDATE Actor 
	SET name = "Fernanda Montenegro", birth_date = "1929-10-19"
	WHERE id = "003";

b) UPDATE Actor
	SET name = "JULIANA PAES" WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes" WHERE name = "JULIANA PAES";

c) UPDATE Actor
	SET name = "Juliana Paes", salary= "700000", birth_date= "1979-03-26", 					  	gender= "female"
	WHERE id = "005";

d) UPDATE Actor
	SET jobactual = "As filhas de Joaquina"
	WHERE id = "001";

Error Code: 1054. Unknown column 'jobactual' in 'field list'.
Esse erro indica que a coluna que quero atualizar não foi encontrada na lista.
	 
 **- [ ] Exercício 3**
 
 a)  DELETE FROM Actor 
 WHERE name = "Fernanda Montenegro";
 
b) DELETE FROM Actor
WHERE gender = "male"  AND salary > 10000000;
 
 **- [ ] Exercício 4**

a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor 
	WHERE gender = "female";
c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

d) SELECT SUM(salary) FROM Actor;

 **- [ ] Exercício 5**
 
a)SELECT COUNT(*), gender
FROM Actor  GROUP BY gender;
Essa query irá retornar a quantidade total de gender separado por grupo. Como gender possui dois grupos, mostrará a quantidade total de mulheres e homens, separadamente.

b)SELECT id, name FROM Actor 
	ORDER BY name DESC;

c) SELECT * FROM Actor 
	ORDER BY salary ASC;

d) SELECT * FROM Actor
	ORDER BY salary DESC
	LIMIT 3;

e) SELECT AVG(salary), gender FROM Actor
	GROUP BY gender;

 **- [ ] Exercício 6**
 
a) ALTER TABLE Movies ADD playing_limit_date DATE;
b) ALTER TABLE Movies CHANGE rating rating FLOAT;

c)UPDATE Movies
	SET playing_limit_date = "2020-12-31"
	WHERE id = "001";

UPDATE Movies
SET playing_limit_date = "2020-12-10"
WHERE id = "002";

d) DELETE FROM Movies WHERE id = "001";

UPDATE Movies
SET synopsis = "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos."
WHERE id = "001";

-> O fato de deletar o id e atualizar a tabela setando a sinopse, a tabela não foi alterada por essa categoria.

 **- [ ] Exercício 7**
 
a)  SELECT COUNT(*) FROM Movies WHERE rating > 7.5;
b)  SELECT AVG(rating) FROM Movies;

c) SELECT COUNT(*) FROM Movies 
	WHERE playing_limit_date > CURDATE();
	
d) SELECT COUNT(*) FROM Movies 
WHERE release_date > CURDATE();

e) SELECT MAX(rating) FROM Movies;

f) SELECT MIN(rating) FROM Movies;

 **- [ ] Exercício 8**
 
a) SELECT * FROM Movies 
	ORDER BY title;

b) SELECT * FROM Movies 
	ORDER BY title LIMIT 5;

c) SELECT * FROM Movies 
	WHERE release_date < CURDATE() 
	ORDER BY release_date DESC LIMIT 3;

d) SELECT * FROM Movies 
	ORDER BY rating DESC LIMIT 3;




