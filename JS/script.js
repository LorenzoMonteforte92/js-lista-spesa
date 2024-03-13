// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente.
// Svolgete questo esercizio in 2 versioni: col ciclo for e col ciclo while


const list = [
    'Latte',
    'Cacao',
    'Insalata',
    'Carote',
    'Pomodori',
    'Piatti pronti'
];

const forCycle = document.querySelector(`#text-for`);
const whileCycle = document.querySelector(`#text-while`)

//stampa con ciclo for
let listItems
for(let i = 0; i < list.length; i++) {
    listItems = list[i];
    forCycle.innerHTML += ` ${listItems}`;
}

//stampa con ciclo while
let i = 0
while(i < list.length){
    listItems = list[i];
    whileCycle.innerHTML += ` ${listItems}`;
    i++
}



