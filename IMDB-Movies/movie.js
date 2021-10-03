console.log("success")

const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movie = document.getElementById("movie");
const form= document.getElementById("form");
const search = document.getElementById("search");

// ===========================SHOW FUnction===============================

showMovies(apiUrl);
function showMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data.results);
        data.results.forEach(element => {
            // const info = document.createElement('div');
            const container = document.createElement('div')
            container. className = "MyClass"; 
            const img_container = document.createElement('div');
            const image = document.createElement('img');
            image.className= "img";
            const text = document.createElement('h1');
            const des = document.createElement('p');
            des.className= "des"

            text.innerHTML = `${element.title}`;
            image.src = IMGPATH + element.poster_path;
            des.innerHTML = "Sorry this website, is under development, so u wont be getting the details, we would be upading it pretty soon Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptates asperiores recusandae alias adipisci quam sequi consectetur voluptas expedita qui aspernatur, magni voluptatum sunt ducimus maiores minima soluta pariatur corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusamus voluptates eos, quae quos voluptate adipisci unde perferendis doloribus odio culpa vitae cupiditate eligendi perspiciatis quibusdam! Sit recusandae aut sint.";

            img_container.appendChild(image);
            container.appendChild(img_container);
            container.appendChild(text);
            container.appendChild(des);
            movie.appendChild(container);
            

        });
    })
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    movie.innerHTML = '';
    console.log("Show movies");
    const searchTerm = search.value;
    if (searchTerm){
        showMovies(SEARCHAPI + searchTerm);
        search.value="";
    }
})

