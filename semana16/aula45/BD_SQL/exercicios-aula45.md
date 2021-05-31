##EXERCÍCIO 1##


    Começaremos pela tabela de atores. Nós vamos guardar as seguintes informações: id, nome, salário, data de nascimento e sexo (que possui as opções `female` e `male`).


    *a. Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. 
    Explique os demais comandos que estão nessa query.*
    RESP:
    -O comando VARCHAR serve para determinar o máximo de caracteres permitidos e dentro do parentese "(255)" representa o número máximo de caracteres;
    -O comando DATE representa uma data(ano-mês-dia);
    -PRIMARY KEY significa chave primária e o seu valor tem que ser único;
    -NOT NULL significa que o valor não pode ficar vazio.

    *b. O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. 
    Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*
    RESP:
    -Comando SHOW DATABASES: mostra os bancos de dados presentes no sistema;
    -Comando SHOW TABLES: mostra as tabelas que você criou.

    *c. O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. 
    Utilize o comando  `DESCRIBE Actor` e explique os resultados.*
    RESP: Esse comando traz todas as informações pertinentes a  tabela Actor.

##EXERCÍCIO 2## 


    O próximo passo é colocar dados nessa tabela. Vamos começar criando a linha de um ator brasileiro muito famoso.

    *a. Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 
        23 de Agosto de 1963*.
    RESP:
      INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES(
         "002", 
        "Glória Pires",
        1200000,
        "1963-08-23", 
        "female"
      );


    *b. Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. 
    Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.*
    RESP: 

    *a. Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 
         23 de Agosto de 1963*.
        RESP:
            INSERT INTO Actor (id, name, salary, birth_date, gender)
                VALUES(
                    "002", 
                    "Glória Pires",
                    1200000,
                    "1963-08-23", 
                    "female"
                 );


    *b. RESP: 

        O erro abaixo ocorreu pelo fato do id ser uma primary key que não pode ser duplicada. Se o mesmo ID for duplicado,
        o banco entenderá como uma inclusão dupla desnecessária.

        ERRO: INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES( "002", "Glória Pires", 1200000, 
        "1963-08-23", "female" )     Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'.


    Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. 
    Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta
    
 
    #c.RESP:

        ERRO: INSERT INTO Actor (id, nome, salary) VALUES( "003", "Fernanda Montenegro", 300000, "1929-10-19", "female" ) Error Code: 1136. Column count doesn't match value             count at row 1
        OBS: Esse erro ocorreu porque no "INSERT INTO Actor" estamos passando (id, nome, salary) referente a quantidade de colunas serem diferentes dos valores (values) passados         na tabela.
        Importante lembrar Que mesmo o valor salary esteja como float, é preciso colocá-lo entre aspas devido ele ser passado como uma char, assim como todas as outras                   variáveis.

    *d. RESP:

        ERRO: INSERT INTO Actor (id, name, salary) VALUES( "004", 400000, "1949-04-18", "male" ) Error Code: 1136. Column count doesn't match value count at row 1 0.016 sec
        OBS: Esse erro ocorreu porque no "INSERT INTO Actor"  foram passados (id, nome, salary, birth_date, gender) referente as colunas e no VALUES informou-se valores com             exceção do nome. 
        Importante lembrar Que mesmo o valor salary esteja como float, é preciso colocá-lo entre aspas devido ele ser passado como uma char, assim como todas as outras                   variáveis.

    *e. RESP:

        ERRO: INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES( "005", "Juliana Paes", 719333.33, 1979-03-26, "female" ) Error Code: 1292. 
        Incorrect date value: '1950' for column 'birth_date' at row 1 0.016 sec
        OBS: Tal erro ocorreu pelo fato do value do salary ser float, ou seja, não aceita casas decimais e deve estar dentro de aspas, 
        e o value do birthday ser date e deve ser colocado entre aspas.


    *f. RESP:

        Criação das Queryes

            INSERT INTO Actor (id, name, salary, birth_date, gender)
        VALUES
            ( "001", "Tony Ramos", "400000", "1948-08-25", "male"),
            ( "002", "Glória Pires", "1200000", "1963-08-23", "female"),
            ( "003", "Fernanda Montenegro", "300000", "1929-10-19", "female"),
            ( "004", "Antonio Fagundes", "400000", "1949-04-18", "male"),
            ( "005", "Juliana Paes", "719333.33", "1979-03-26", "female");
      

##EXERCÍCIO 3## 


Com os dados criados, podemos nos aventurar nas queries de seleção de dados. 
Elas são indicadas pelo operador `SELECT`. Talvez a query mais famosa que existe é:

```sql
SELECT * FROM Actor
```
Agora, se quisermos colocar uma condição para retornar as linhas (entradas), devemos usar o operador WHERE e 
colocar a nossa condição que pode usar alguns operadores (=, !=, >, etc). 
Abaixo, está uma query que retorna somente o id e o nome dos atores.

   *a. Escreva uma query que retorne todas as informações das atrizes*

        SELECT * FROM Actor where gender = "female";

        SELECT id, name FROM Actor WHERE gender = "female";

    *b. Escreva uma query que retorne o salário do ator com o nome `Tony Ramos`*

        SELECT salary FROM Actor WHERE name = "Tony Ramos";

    *c. Escreva uma query que retorne todas as informações que tenham o `gender` com o valor `"invalid"`. Explique o resultado.*
    RESP:
        SELECT FROM * Actor gender = "invalid" ;
        O resultado apresentado foi NULL em todos os campos da tabela". Desta forma, nenhum campo foi apresentado 
        por todos serem caracterizados por "female" or "male", nenhum foi caracterizado como "invalid".
    
    *d. Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000*

        SELECT id, name, salary FROM Actor WHERE salary <= 500000;

    *e. Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. 
        Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. 
        Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta*
    
        SELECT id, nome from Actor WHERE id = "002";
        ERRO: SELECT id, nome from Actor WHERE id = "002" LIMIT 0, 100	Error Code: 1054. Unknown column 'nome' in 'field list'	0.141 sec

        RESP: A constante "nome" não pertence a coluna correspondente do id= "002". Para Que dê certo é preciso colocar o nome 
              correto da constante, Que no caso é "name".



##EXERCÍCIO 4## 


Para finalizar o nosso estudo nas tabelas de atores, vamos fazer uma query mais complexa. 
Queremos encontrar todos os atores e atrizes:

- cujos nomes começam com "A" ou "J"; e
- cujos salários são maiores do que R$300.000

Para fazer a primeira parte, vamos usar o comparador `LIKE`, que permite comparar strings. 
Para verificar se uma palavra começa com a letra "A", usamos a sintaxe: `LIKE "A%"` porque `%` indica uma string genérica. O operador "ou" é indicado por `OR`. 
Assim, a primeira condição é indicada por: `WHERE name LIKE "A%" OR name LIKE "J%"`. 

Já a segunda parte é simples: `salary > 300000`. O que pode confundir é o operador lógico "e" (`AND`). 
A ideia aqui é que todos os atores terão o salário maior do que R$300.000, mas seus nomes poderão começar com o "A" ou "J". 
Dessa forma, a query vai ficar dessa forma (preste atenção nos parênteses):

    SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000


    *a. Explique com as suas palavras a query acima*
    RESP: No select acima é pedido para Que se mostre todas as informações da tabela Actor cujos nomes começarem com A ou J, 
    e respectivos salários, sejam maiores Que 300000

    *b. Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00*
    RESP: 
        SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000;

    *c. Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.* 
    RESP: 
        SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";

    *d. Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" 
    no nome e o salário entre R$350.000,00 e R$900.000,00*.
    RESP: 
        SELECT * FROM Actor WHERE (name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") 
        AND salary BETWEEN 35000000 AND 900000;


##EXERCÍCIO 5##   


Terminamos de fazer um belo estudo sobre a tabela de Atores. Agora, você vai ficar mais independente. Precisamos criar a tabela de Filmes com as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10)

*a. Escreva a query que cria essa tabela. Para sinopse, utilize o tipo `TEXT`, pesquise sobre ele se precisar. 
Explique a query resumidamente.*
RESP:
    A query criou uma tabela com o nome Movies e com as colunas : id, title, synopsis, release_date e rating.


 CREATE TABLE Movies ( 
    id VARCHAR(255) PRIMARY KEY, 
    title VARCHAR(255) NOT NULL UNIQUE, 
    synopsis TEXT NOT NULL, 
    release_date DATE NOT NULL, 
    rating INT NOT NULL );


*b.  
INSERT INTO Movies (id, title, synopsis, release_date, rating) 
VALUES
( "001", "Se eu fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.", "06/01/2006", 7 );

*c. 
INSERT INTO Movies (id, title, synopsis, release_date, rating) 
VALUES
( "002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, 
anuncia que vai se casar e não poderá mais morar com ela.", "2012/12/27", "10" );

*d.
INSERT INTO Movies (id, title, synopsis, release_date, rating) 
VALUES
( "003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", 
"2017/11/02", "8" );

*e.
INSERT INTO Movies (id, title, synopsis, release_date, rating) 
VALUES
("004", "Memórias Póstumas de Brás Cubas", "A obra tem início com a declaração da morte de Brás Cubas, 
cujo narrador e protagonista relata suas memórias depois de ter sido vítima de pneumonia. 
Pertencente a uma família abastada do século XIX, Brás Cubas narra primeiramente sua morte e enterro onde apareceram onze amigos. 
Por conseguinte, ele relata diversos momentos de sua vida, desde eventos da sua infância, adolescência e fase adulta.", "2001/08/17", "7" );

##EXERCÍCIO 6## 


     *a. Escreva a query que cria essa tabela. Para sinopse, utilize o tipo `TEXT`, pesquise sobre ele se precisar. 
         Explique a query resumidamente.*
         
         RESP:A query criou uma tabela com o nome Movies e com as colunas : id, title, synopsis, release_date e rating.


            CREATE TABLE Movies ( 
                 id VARCHAR(255) PRIMARY KEY, 
                 title VARCHAR(255) NOT NULL UNIQUE, 
                 synopsis TEXT NOT NULL, 
                 release_date DATE NOT NULL, 
                 rating INT NOT NULL 
             );


        *b.  
            INSERT INTO Movies (id, title, synopsis, release_date, rating) 
            VALUES
            ( "001", "Se eu fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
            Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.", "06/01/2006", 7 );

        *c. 
            INSERT INTO Movies (id, title, synopsis, release_date, rating) 
            VALUES
            ( "002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
            A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, 
            anuncia que vai se casar e não poderá mais morar com ela.", "2012/12/27", "10" );

        *d.
            INSERT INTO Movies (id, title, synopsis, release_date, rating) 
            VALUES
            ( "003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
            que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", 
            "2017/11/02", "8" );

        *e.
            INSERT INTO Movies (id, title, synopsis, release_date, rating) 
            VALUES
            ("004", "Memórias Póstumas de Brás Cubas", "A obra tem início com a declaração da morte de Brás Cubas, 
            cujo narrador e protagonista relata suas memórias depois de ter sido vítima de pneumonia. 
            Pertencente a uma família abastada do século XIX, Brás Cubas narra primeiramente sua morte e enterro onde apareceram onze amigos. 
            Por conseguinte, ele relata diversos momentos de sua vida, desde eventos da sua infância, adolescência e fase adulta.", "2001/08/17", "7" );


##EXERCÍCIO 7## 


*a. RESP: SELECT * FROM Movies WHERE title LIKE "%vida%";

*b. RESP: SELECT * FROM Movies WHERE title LIKE "%anos%" OR synopsis LIKE "%anos%";

*c. RESP: SELECT * FROM Movies WHERE release_date < "2021/01/11";

*d. RESP: 
SELECT * FROM Movies WHERE release_date < "2021/01/11" AND 
(title LIKE "Flor" OR synopsis LIKE "%Flor%") AND rating > 7;
