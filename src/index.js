console.log('%c HI', 'color: firebrick')

// Challenege 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
fetch(imgUrl)
    .then(response=>response.json())
    .then(data=>data.message.forEach(dog => processData(dog)))

function processData(dog) {
    const imgContainer = document.getElementById('dog-image-container')
    const newImage = document.createElement('img')
    newImage.src = dog
    imgContainer.append(newImage)
}

// Challenge 2
const breedUrl = "https://dog.ceo/api/breeds/list/all";
fetch(breedUrl)
    .then(response=>response.json())
    .then(data=>Object.keys(data.message).forEach(breed=>processBreeds(breed)))

function processBreeds(breed) {
    const ulList = document.getElementById('dog-breeds')
    const newItem = document.createElement('li')
    newItem.textContent = breed
    ulList.append(newItem)
}

// Challenge 3