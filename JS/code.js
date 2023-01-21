const cardsContainer = document.querySelector('#cardsContainer');
const apiUrl = 'https://rickandmortyapi.com/api/character';
let algo;

const printList = (datos) => {
    //funcionalidad
    console.log(datos);
}

const getData = async(api) => {
    try{
        const response = await fetch(api);
        const data = await response.json();
        printList(data.results);
    }
    catch(error){
        return(error);
    }
}

getData(apiUrl);