# Exercícios da Tarde #


♦EXERCÍCIO 01


a) Crie uma cópia do endpoint acima, e altere-o para que ele possa receber um parâmetro de filtragem por nome.

b) Crie mais uma cópia do endpoint acima, e agora permita que haja filtragem por tipo de usuário. O tipo de usuário deve ser passado por **path params.**


♦EXERCÍCIO 02

Faça uma cópia do endpoint original, e adicione a ele a funcionalidade de ordenação que possa receber nome ou tipo de user.


♦EXERCÍCIO 03

Gere uma cópia do endpoint original, e faça com que ele exiba apenas 5 users por vez.


♦EXERCÍCIO 04


Crie um último endpoint que possua todas as funcionalidades acima (as duas filtragens, a ordenação e a paginação). Atribua valores padrão para filtragem, ordenação e paginação para que:

- Caso o usuário não forneça parâmetro de filtragem, o endpoint busque todos os users;
- Caso o usuário não forneça parâmetro de ordenação, o endpoint ordene por nome em ordem **decrescente;**
- Caso o usuário não forneça número de página, deve começar na página 1

