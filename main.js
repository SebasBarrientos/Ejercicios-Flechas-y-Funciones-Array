const saludar = () => "Hola";

const division = (a, b) => a / b;

const miNombre = (nombre) => `Mi nombre es ${nombre}`;
console.log(miNombre("Sebastian"));

const test2 = () => console.log("Funcion 2 ejecutada.");
const test1 = (callback) => test2();
test1();

// 2. forEach
let gente = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
    nombre: "Pilar",
    edad: 24,
  },
  {
    nombre: "Laura",
    edad: 24,
  },
  {
    nombre: "Jenny",
    edad: 10,
  },
];
//   Crea un array con la gente mayor de 25 años y muéstralo por consola.
let personasMas25 = [];
const mayores25 = gente.forEach((persona) => {
  if (persona.edad > 25) {
    personasMas25.push(persona);
  }
});
console.log(personasMas25);
//   Crea un array con la gente que empieza por J.
let personasConJ = [];
const funcionPersonasConJ = gente.forEach((persona) => {
  if (persona.nombre[0] === "J") {
    personasConJ.push(persona);
  }
});
console.log(personasConJ);

// 3. Map
// Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.
let personasMasDe25 = [];
const mayoresDe25 = gente.map((persona) => {
  if (persona.edad > 25) {
    personasMasDe25.push(persona);
  }
});
console.log(personasMasDe25);
// Crea un array con la gente que empieza por J.
let mapPersonasConJ = [];
const funcionMapPersonasConJ = gente.map((persona) => {
  if (persona.nombre[0] === "J") {
    mapPersonasConJ.push(persona);
  }
});
console.log(personasConJ);
// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

const numbers = [4, 5, 6, 7, 8, 9, 10];
const elevarNumbers = numbers.map((number) => number ** number);
console.log(elevarNumbers);

// 4. Filter
// Crea un segundo array que devuelva los impares
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const impares = numbers.filter((number) => number % 2 != 0);

console.log(impares);
// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
const foodList = [
  { name: "Tempeh", isVeggie: true },
  { name: "Cheesbacon burguer", isVeggie: false },
  { name: "Tofu burguer", isVeggie: true },
  { name: "Entrecot", isVeggie: false },
];
/* [
          'Que rico Tempeh me voy a comer!',
          'Que rica Tofu burguer me voy a comer!'
         ]
      */
const comidaVegana = foodList
  .filter((comida) => comida.isVeggie == true)
  .map((comida) => {
    return `Que rico ${comida.name} me voy a comer!`;
  });
console.log(comidaVegana);

// 5. Reduce
// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
const numeros = [39, 2, 4, 25, 62];
// Salida--> 483600
const multiplicando = numeros.reduce((a, b) => a * b);
console.log(multiplicando);

// EXTRAS.
//Map
// Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];
const resultado = staff.map((persona) => {
  return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies}`;
});
console.log(resultado);
// Resultado esperado
/*
    [
      'Pepe es TheBoss y le gusta leer y ver pelis',
      'Ana es becaria y le gusta nadar y bailar',
      'Luis es programador y le gusta dormir y comprar',
      'Ana es becaria y le gusta nadar y bailar',
      'Carlos es secretario y le gusta fútbol y queso'
    ]
 */
const foodListExtras = ["Pizza", "Ramen", "Paella", "Entrecot"];
//Resultado esperado
/* [
        'Como soy de Italia, amo comer Pizza',
        'Como soy de Japón, amo comer Ramen',
        'Como soy de Valencia, amo comer Paella',
        'Aunque no como carne, el Entrecot es sabroso'
       ]
    */
const rta = foodListExtras.map ((comida) => {
    switch (true) {
        case comida=="Pizza": return 'Como soy de Italia, amo comer '+comida;
            
        case comida=="Ramen":
            return 'Como soy de Japón, amo comer '+comida;

        case comida=="Paella":
            return 'Como soy de Valencia, amo comer '+comida;

        default:
            return `Aunque no como carne, el ${comida} es sabroso`
            
    }
})
console.log(rta);

// Filter
// Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros
const inventory = [
        {
          name: 'Mobile phone',
          price: 199
        },
        {
          name: 'TV Samsung',
          price: 459
        },
        {
          name: 'Viaje a cancún',
          price: 600
        },
        {
          name: 'Mascarilla',
          price: 1
        }
      ];
      /*
        [
          'TV Samsung,',
          'Viaje a Cancún'
        ]
      */
const mas300 = inventory.filter ((objeto)=> objeto.price>300).map((objeto)=> objeto.name)
console.log(mas300);


// Reduce
// Concatena todos los elementos del array con reduce para que devuelva una sola frase
const sentenceElements = [
    'Me',
    'llamo',
    'Sebastian',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
    ];
   
// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'
const result = sentenceElements.reduce((a,b) => a+" "+b)
console.log(result);