const persons = [
    {
        nome: 'Marco',
        cognome: 'Mariosa',
        età: 22,
    },
    {
        nome: 'Fabio',
        cognome: 'Pacifici',
        età: 26,
    },
    {
        nome: 'Fabio',
        cognome: 'Rossi',
        età: 17,
    },
    {
        nome: 'Michele',
        cognome: 'Ventura',
        età: 26,
    },
    {
        nome: 'Martino',
        cognome: 'Giorgi',
        età: 14,
    },
    {
        nome: 'Davide',
        cognome: 'Colonna',
        età: 15,
    },
]

console.log(canDrive(persons));


/**
 * Takes and array of persons and returns a new array with a new phrase if a person can drive or not
 * @param {object} arrayOfPersons  an array where every obj is a person
 * @returns {object} an array of persons
 */
function canDrive(arrayOfPersons){
    let newPersons = []
    arrayOfPersons.forEach(person => {
        const {età, nome,cognome} = person;
        const copyPerson = {...person, frase: `${età >= 18 ?  nome + ' ' + cognome + ' ' + 'può guidare' : nome+ ' ' + cognome + ' ' + 'non può guidare'}` };
        //console.log(copyPerson);
        newPersons.push(copyPerson);
    });

    return newPersons;
}


