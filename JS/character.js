const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const urlApi =  `https://rickandmortyapi.com/api/character/${id}`

//DOM Elements to draw on
const imgElement = document.querySelector('.character__photo');
const nameElement = document.querySelector('.character__name');
const infoList = document.querySelector('.character__info'); 

//Function to handle data
const drawCharacter = (info) => {
    const {name, image, species, gender, status} = info;
    const stats = [species, gender, status];

    imgElement.src = image;
    imgElement.alt = `${name} - image`;
    nameElement.textContent = name;
    
    stats.forEach(element => {
        const listElement = document.createElement('li');
        listElement.textContent = element;
        infoList.appendChild(listElement);
    });
}

//Function to fetch info from API
const getData = async(api) => {
    try{
        const response = await fetch(api);
        const data = await response.json();
        drawCharacter(data);
    }
    catch(error){
        return(error);
    }
}

//Get character info from API
getData(urlApi);