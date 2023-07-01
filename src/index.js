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
    .then(data=>processBreeds(data))

function processBreeds(data) {
    const dogData = data.message
    const breeds = Object.keys(dogData)
    const subbreeds = Object.values(dogData)

    for (let i=0;i<subbreeds.length;i++){
        if(subbreeds[i].length > 0){
            subbreeds[i].forEach(item=>breeds.push(item))
        }
    }

    breeds.forEach(breed=>listBreeds(breed))
}

function listBreeds(breed){
    const ulList = document.getElementById('dog-breeds')
    const newItem = document.createElement('li')
    newItem.className = 'breed'
    newItem.textContent = breed
    ulList.append(newItem)
}

// Challenge 3

function challenge3() {
    const liElements = document.querySelectorAll('.breed')
    liElements.forEach(element => element.addEventListener('click', changeFontColor)) 
}

function changeFontColor() {
    this.style.color = 'blue'
}

setTimeout(() => {
    challenge3()
}, 3000);


// Challenge 4

function challenge4() {
    const selectDropdown = document.getElementById("breed-dropdown")
    selectDropdown.addEventListener('click',()=>selectDropdown.addEventListener('change', stateFilter))
}

function stateFilter() {
    const liElements = document.querySelectorAll('.breed')
    const breedList = []
    liElements.forEach(element => breedList.push(element.textContent))

    const returnList = []
    const option = this.value
    returnList.push(breedList.filter(breed => {if(breed.startsWith(option)){returnList.push(breed)}})
    )

    for (let i = 0;i<liElements.length;i++){
        if(returnList.includes(liElements[i].textContent)){
            liElements[i].style.display = ''
        }
        else{liElements[i].style.display = 'none'}
    }
    
}

setTimeout(() => {
    challenge4()
}, 4000);