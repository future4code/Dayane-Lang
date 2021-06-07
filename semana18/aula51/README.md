## EXERCÍCIOS AULA51
---

# EXERCÍCIO 1

a)As ids podem possuir letras e números, portanto, o fato delas serem declaradas como uma string aumentará a segurança de cada um e tornará seus ids únicos.
Uma string pode conter números e letras juntos, aumentando a segurança e tornando os ids únicos.

b)
    import { v4 } from "uuid";

        export function generateId(): string {
        return v4();
    }

# EXERCÍCIO 2    