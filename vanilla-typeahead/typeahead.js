const characters = [];

const list = document.getElementById("list");
// console.dir(list)

const search = document.querySelector('input');

fetch('https://www.swapi.co/api/people')
    .then(response => response.json())
    .then(response => {
        characters.push(...response.results);
        render();
    })

//I'm getting an error that says access to fetch from origin 'null' has been blocked by CORS policy... if opaque response serves your needs set the request's mode to no-cors to fetch the resource with CORS disabled

function filterText(){
    const filtered = characters;
    .filter(val => val.name.toLowerCase().includes(this.value.toLowerCase()))
    .map(val => `<li>${val.name}</li>`);

    if(filtered.length){
        render(filtered)
    }
}

function render(array){
    const html = array.join('');
    list.innerHTML = html;
}

search.addEventListener("keyup", filterText)

