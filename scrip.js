const input = document.querySelector('input');
const button = document.querySelector('button');
const section = document.querySelector('section');

button.addEventListener('click', (event) => {
    console.log(input.value);
    getMovieData(input.value);
    input.value = '';
})

const getMovieData = (query) => {
    console.log(query);
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
        addCard(data)
    })
    .catch(err => {
        console.log(err);
    })
}

const addCard = (data) => {
    data.forEach(item => {
        const {original} = item.show.image;
        const div = document.createElement('div');
        div.innerHTML = `<div class="card"> 
                            <img src=${original}> 
                            <h3> title </h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati tempore aliquam vel sunt velit debitis!</p>
                         </div>`;
        section.appendChild(div);
    });
}