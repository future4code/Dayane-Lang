// console.log("Hello, Mundo!");

// let nome: any;

// nome = 0;
// let age: number = 5;
// let age2: number = 6;

// const ages: (number|string)[] = [];

// ages.push(age);


enum MARCA_DE_CARRO {
    FORD = "Ford",
    VOLKSWAGEN = "Volkswagen",
    PEUGEOUT = "Peugeout",
    CITROEN = "Citroen"
}

type carro = {
    marca: MARCA_DE_CARRO,
    volumeDoTanque: number,
    temMotorFlex: boolean,
    calcularAutonomia: (combustivel: number) => number
}

function calcAutonomia(combustivel: number): number {
    return combustivel * 15;
}

const mustang: carro = {
    marca: MARCA_DE_CARRO.FORD,
    volumeDoTanque: 61,
    temMotorFlex: false,
    calcularAutonomia: calcAutonomia
}

const gol: carro = {
    marca: MARCA_DE_CARRO.VOLKSWAGEN,
    volumeDoTanque: 55,
    temMotorFlex: true,
    calcularAutonomia: calcAutonomia
}

const garagem: carro[] = [];
garagem.push(mustang);
garagem.push(gol);
// console.table(garagem);

function buscarCarrosPorMarca(frota: carro[], marca?: string | undefined): carro[] {

    if (marca === undefined) {
        return frota
    }
 
    return frota.filter(
        (carro) => {
            return carro.marca === marca
        }
    )
 }
 
const minhaFrota: carro[] = buscarCarrosPorMarca(garagem);
console.table(minhaFrota)
//vendo a km do gol
const kmDoGol = gol.calcularAutonomia(gol.volumeDoTanque);
console.log(`um gol de tanque cheio faz ${kmDoGol} quilômetros.`)