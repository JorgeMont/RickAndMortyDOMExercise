const apiUrl = 'https://rickandmortyapi.com/api/character';

//Creando elementos
const cardsContainer = document.querySelector('#cardsContainer');

let algo;

const printList = (datos) => {
    //funcionalidad
    console.log(datos);
    datos.forEach(
            (characterData) => {
                //Crear un elemento
                // const prueba = document.createElement('p');
                const cardElement = document.createElement('article');
                const imageElement = document.createElement('img');
                const nameLabel = document.createElement('h1');
                const anchorElement = document.createElement('a');

                //Ordenando el elemento
                cardElement.appendChild(anchorElement);
                anchorElement.appendChild(nameLabel);
                anchorElement.appendChild(imageElement);

                //Agregar clases
                cardElement.classList.add('characterCard');

                nameLabel.textContent = characterData.name;
                imageElement.src = characterData.image;

                //Agregar su enlace
                anchorElement.href = `/?id=${characterData.id}`;
                //Agregarlo al DOM
                cardsContainer.appendChild(cardElement);
            }
        );
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
