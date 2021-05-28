// objeto padrão da conta do usuario
export type userAccount = {
    name: string,
    cpf: number,
    birthDateAsString: string,
    balance: number,
    statement: transaction[]
}

// objeto padrão da transação
export type transaction = {
    amount: number,
    date: number,
    description: string
}

// array de usuarios :)
export const users: userAccount[] = [
    {
        name: "Elen Barret",
        cpf: 12345678911,
        birthDateAsString: "09/08/1960",
        balance: 10000,
        statement: [{
            amount: 5000,
            date: 2105215089068,
            description: "Deposito de Dinheiro"
        }]
    },
    {
        name: "Mingau Lee",
        cpf: 98765432101,
        birthDateAsString: "08/02/2003",
        balance: 1200,
        statement: [{
            amount: 2100,
            date: 2105215089068,
            description: "Deposito de Dinheiro"
        }]
    }
]