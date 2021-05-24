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

    