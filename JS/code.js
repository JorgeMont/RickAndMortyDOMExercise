const apiUrl = 'https://rickandmortyapi.com/api/character';

//Assigns the container element to a constant
const cardsContainer = document.querySelector('#cardsContainer');

let algo;

const printList = (datos) => {
    //functionality
    console.log(datos);
    datos.forEach(
            (characterData) => {
                //Create the elements needed
                // const prueba = document.createElement('p');
                const cardElement = document.createElement('article');
                const imageElement = document.createElement('img');
                const nameLabel = document.createElement('h1');
                const anchorElement = document.createElement('a');

                //Ordering the element
                cardElement.appendChild(anchorElement);
                anchorElement.appendChild(nameLabel);
                anchorElement.appendChild(imageElement);

                //Add class styles
                cardElement.classList.add('characterCard');

                nameLabel.textContent = characterData.name;
                imageElement.src = characterData.image;

                //Adds href to respective character
                anchorElement.href = `./character.html?id=${characterData.id}`;
                //Add to DOM
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
