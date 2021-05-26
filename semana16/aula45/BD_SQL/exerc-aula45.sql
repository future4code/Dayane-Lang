
    CREATE TABLE Movies ( 
    id VARCHAR(255) PRIMARY KEY, 
    title VARCHAR(255) NOT NULL UNIQUE, 
    synopsis TEXT NOT NULL, 
    release_date DATE NOT NULL, 
    rating INT NOT NULL );
    
INSERT INTO Movies (id, title, synopsis, release_date, rating) 
VALUES
( "001", "Se eu fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.", "2006/06/01", "7"  );
    
INSERT INTO Movies (id, title, synopsis, release_date, rating) 
VALUES
( "002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, 
anuncia que vai se casar e não poderá mais morar com ela.", "2012/12/27", "10" );   

INSERT INTO Movies (id, title, synopsis, release_date, rating) 
VALUES
( "003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017/11/02", "8" );

INSERT INTO Movies (id, title, synopsis, release_date, rating) 
VALUES
("004", "Memórias Póstumas de Brás Cubas", "A obra tem início com a declaração da morte de Brás Cubas, 
cujo narrador e protagonista relata suas memórias depois de ter sido vítima de pneumonia. 
Pertencente a uma família abastada do século XIX, Brás Cubas narra primeiramente sua morte e enterro onde apareceram onze amigos. 
Por conseguinte, ele relata diversos momentos de sua vida, desde eventos da sua infância, adolescência e fase adulta.", "2001/08/17", "7" );

-- SELECT id, title, rating FROM Movies WHERE id = "002";

-- SELECT id, title FROM Movies WHERE title = "Memórias Póstumas de Brás Cubas";

-- SELECT id, title, synopsis FROM Movies WHERE rating >= 7;
 
 SELECT * FROM Movies WHERE title LIKE "%vida%";

 SELECT * FROM Movies WHERE title LIKE "%anos%" OR synopsis LIKE "%anos%";

SELECT * FROM Movies WHERE release_date < "2021/01/11";

SELECT * FROM Movies WHERE release_date < "2021/01/11" AND (title LIKE "Flor" OR synopsis LIKE "%Flor%") AND rating > 7;

SELECT * FROM `cruz-2114392-dayane-lang`.Movies;