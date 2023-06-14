// Your code here
window.onload = function () {
    //create div
    const div = document.createElement('div');

    //create h1 element
    const title = document.createElement('h1');
    title.id = 'kitten-title';
    title.textContent = 'title of Kitten'; // will be changed by kitten api

    //create img element
    const img = document.createElement('img');
    img.id = 'kitten-img';
    img.alt = 'a cute kitten';
    img.src = 'url';

    //append
    div.appendChild(title);
    div.appendChild(img);
    //add to body
    document.body.appendChild(div);

    //fetch from cat api
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            const kitten = data[0];

            const titleElement = document.getElementById('kitten-title');
            const imgElement = document.getElementById('kitten-img'); 

            titleElement.textContent = kitten.breeds || 'Kitten Pic';

            imgElement.src = kitten.url;

        })
        .catch*(error => {
            console.error('Error:', error)
        });
}