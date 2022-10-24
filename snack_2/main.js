const zucchini = [
    {
        varietà: 'Zucchina lunga fiorentina',
        lunghezza: 13,
        peso: 200,
    },
    {
        varietà: 'Zucchina lunga fiorentina',
        lunghezza: 16,
        peso: 250,
    },
    {
        varietà: 'Zucchino ortolano di Faenza',
        lunghezza: 27,
        peso: 300,
    },
    {
        varietà: 'Zucchina striata di Napoli',
        lunghezza: 15,
        peso: 235,
    },
    {
        varietà: 'Zucchina lunga fiorentina',
        lunghezza: 15,
        peso: 240,
    },
    {
        varietà: 'Zucchino romanesco',
        lunghezza: 15,
        peso: 240,
    },
    {
        varietà: 'Zucchino ortolano di Faenza',
        lunghezza: 13,
        peso: 200,
    },
    {
        varietà: 'Zucchino romanesco',
        lunghezza: 12,
        peso: 180,
    },
    {
        varietà: 'Zucchina striata di Napoli',
        lunghezza: 22,
        peso: 280,
    },
    {
        varietà: 'Zucchina striata di Napoli',
        lunghezza: 20,
        peso: 260,
    }
]

const zucchiniGreaterOrEqualThen15cm = zucchini.filter((zucchina)=> {
    const {lunghezza} = zucchina;
    if(lunghezza >= 15){
        return true;
    }
})

const zucchiniLessThen15cm = zucchini.filter((zucchina)=> {
    const {lunghezza} = zucchina;
    if(lunghezza < 15){
        return true;
    }
})

console.log(zucchiniGreaterOrEqualThen15cm, zucchiniLessThen15cm);